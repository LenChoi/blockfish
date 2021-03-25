package com.project.blockfish.controller;

import com.project.blockfish.model.Member;
import com.project.blockfish.exception.Message;
import com.project.blockfish.model.RequestLoginUser;
import com.project.blockfish.model.Response;
import com.project.blockfish.service.AuthService;
import com.project.blockfish.service.CookieUtil;
import com.project.blockfish.service.JwtUtil;
import com.project.blockfish.service.RedisUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class MemberController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;
    private final CookieUtil cookieUtil;
    private final RedisUtil redisUtil;

    @PostMapping("/signup")
    public Response signUpUser(@RequestBody Member member) {
        Response response = new Response();
        System.out.println(member);
        try{
            authService.signUpUser(member);
            response.setResponse("success");
            response.setMessage("회원가입을 성공적으로 완료했습니다.");
        } catch(Exception e){
            response.setResponse("fail");
            response.setMessage("회원가입을 하는 도중 오류가 발생했습니다.");
            response.setData(e.toString());
        }
        return response;
    }

    @GetMapping("/test")
    public String test() {
        System.out.println("here1");
        return "test";
    }

    @PostMapping("/login")
    public Response login(@RequestBody RequestLoginUser user,
                          HttpServletRequest req,
                          HttpServletResponse res) throws Exception {
        try {
            System.out.println(user.getUserId()+" "+user.getPassword());
            final Member member = authService.loginUser(user.getUserId(), user.getPassword());
            System.out.println(member);
            final String token = jwtUtil.generateToken(member); //access token 발급
            System.out.println("token = " + token);
            final String refreshJwt = jwtUtil.generateRefreshToken(member); //refresh token 발급
            System.out.println("refreshJwt = " + refreshJwt);
            Cookie accessToken = cookieUtil.createCookie(JwtUtil.ACCESS_TOKEN_NAME, token);
            System.out.println("accessToken = " + accessToken);
            Cookie refreshToken = cookieUtil.createCookie(JwtUtil.REFRESH_TOKEN_NAME, refreshJwt);
            System.out.println("refreshToken = " + refreshToken);
            System.out.println("refreshJwt = " + refreshJwt);
            redisUtil.setDataExpire(refreshJwt, member.getUserId(), JwtUtil.REFRESH_TOKEN_VALIDATION_SECOND);
            res.addCookie(accessToken); //access, refresh token 쿠키에 담기
            res.addCookie(refreshToken);
            System.out.println("redisUtil.getData(refreshJwt); = " + redisUtil.getData(refreshJwt));
            return new Response("success", "로그인에 성공했습니다.", token);
        } catch (Exception e) {
            return new Response("error", "로그인에 실패했습니다.", e.getMessage());
        }
    }

    @PostMapping("/logout")
    public Response logout(@RequestHeader(value="accessToken") String accessToken,
                           @RequestHeader(value="refreshToken") String refreshToken,
                           HttpServletRequest req, HttpServletResponse res) {
        try{
            System.out.println("accessToken = " + accessToken);
            System.out.println("refreshToken = " + refreshToken);
            Cookie accessTokenDelete = new Cookie("accessToken", null);
            Cookie refreshTokenDelete = new Cookie("refreshToken", null);
            accessTokenDelete.setMaxAge(0);
            refreshTokenDelete.setMaxAge(0);
            String userId = jwtUtil.getUserId(accessToken);
            redisUtil.deleteData(refreshToken);
            redisUtil.setDataExpire(accessToken, userId, JwtUtil.TOKEN_VALIDATION_SECOND); //블랙리스트로 access 토큰 추가
            res.addCookie(accessTokenDelete);
            res.addCookie(refreshTokenDelete);
            return new Response("success", "로그아웃에 성공했습니다", userId);
        } catch (Exception e) {
            return new Response("error", "로그아웃에 실패했습니다.", e.getMessage());
        }

    }
}
