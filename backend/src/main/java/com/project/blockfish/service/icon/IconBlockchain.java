package com.project.blockfish.service.icon;

import com.project.blockfish.service.icon.icx.DeployTokenExample;
import foundation.icon.icx.*;
import foundation.icon.icx.crypto.KeystoreException;
import foundation.icon.icx.data.*;
import foundation.icon.icx.transport.http.HttpProvider;
import foundation.icon.icx.transport.jsonrpc.RpcItem;
import foundation.icon.icx.transport.jsonrpc.RpcObject;
import foundation.icon.icx.transport.jsonrpc.RpcValue;
import okhttp3.OkHttpClient;

import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.security.InvalidAlgorithmParameterException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.util.concurrent.TimeUnit;

public class IconBlockchain {


    public KeyWallet createWallet(String password) throws InvalidAlgorithmParameterException, NoSuchAlgorithmException, NoSuchProviderException, IOException, KeystoreException {
        KeyWallet wallet = KeyWallet.create();
        File destinationDirectory = new File("/Users/minho/Downloads/upload/");
        String fileName = KeyWallet.store(wallet, password, destinationDirectory);
        System.out.println("fileName:" + fileName); // Keystore file name output
        System.out.println("address:" + wallet.getAddress()); // Address Check
        System.out.println("privateKey:" + wallet.getPrivateKey()); // PrivateKey Check
        return wallet;
    }

    public byte[] readBytes(File file) throws IOException {
        long length = file.length();
        if (length > Integer.MAX_VALUE) throw new OutOfMemoryError("File is too big!!");
        byte[] result = new byte[(int) length];
        try (DataInputStream inputStream = new DataInputStream(new FileInputStream(file))) {
            inputStream.readFully(result);
        }
        return result;
    }


    public static void main(String[] args) throws InvalidAlgorithmParameterException, NoSuchAlgorithmException, NoSuchProviderException, IOException, KeystoreException {

        OkHttpClient okHttpClient = new OkHttpClient.Builder()
                .readTimeout(200, TimeUnit.MILLISECONDS)
                .writeTimeout(600, TimeUnit.MILLISECONDS)
                .build();

        IconService iconService = new IconService(new HttpProvider(okHttpClient, "http://localhost:8080", 3));



        System.out.println("3");
        IconBlockchain iconBlockchain = new IconBlockchain();
        iconBlockchain.createWallet("abc123");

        File file = new File("/Users/minho/Downloads/upload/UTC--2021-04-09T11-49-37.755--hx37853cdf2939845dbe920c32a2f61ef1513ab45f.json");
        System.out.println("4");
        Wallet wallet = KeyWallet.load("abc123", file);
        System.out.println("address:" + wallet.getAddress()); // Address Check
        System.out.println("5");
//
//        File file1 = new File("/Users/minho/Downloads/sampleToken.zip");
//        byte[] bytes = iconBlockchain.readBytes(file1);
//        System.out.println("bytes = " + bytes);

        String methodName = "balanceOf"; /* Method name to check the balance */
        System.out.println("6");
        DeployTokenExample deployTokenExample = new DeployTokenExample();
        System.out.println("7");
        Address tokenAddress = deployTokenExample.deploy(wallet);
        System.out.println("8");

// Enter the address to check balance.
// You must enter the given key name ("_owner"). Otherwise, your transaction will be rejected.
        RpcObject params = new RpcObject.Builder()
                .put("_owner", new RpcValue(wallet.getAddress()))
                .build();

        Call<RpcItem> call = new Call.Builder()
                .to(tokenAddress)
                .method(methodName)
                .params(params)
                .build();

        RpcItem result = iconService.call(call).execute();
        BigInteger balance = result.asInteger();
        System.out.println("balance:"+balance);
    }


}
