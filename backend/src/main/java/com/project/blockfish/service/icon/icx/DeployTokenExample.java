package com.project.blockfish.service.icon.icx;

import foundation.icon.icx.*;
import foundation.icon.icx.data.Address;
import foundation.icon.icx.data.Bytes;
import foundation.icon.icx.data.ScoreApi;
import foundation.icon.icx.data.TransactionResult;
import foundation.icon.icx.transport.http.HttpProvider;
import foundation.icon.icx.transport.jsonrpc.RpcObject;
import foundation.icon.icx.transport.jsonrpc.RpcValue;
import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;

import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;
import java.util.stream.Collectors;

public class DeployTokenExample {

    private IconService iconService;
    private Timer timer = new Timer();
    private long terminatedTime = 60 * 1000L;
    private boolean isRunningCheckResult = false;

    public DeployTokenExample() {
        // Logs HTTP request and response data
        // https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor
        HttpLoggingInterceptor logging = new HttpLoggingInterceptor();
        logging.setLevel(HttpLoggingInterceptor.Level.BODY);
        OkHttpClient httpClient = new OkHttpClient.Builder()
//				.addInterceptor(logging)
                .build();

        // Creates an instance of IconService using the HTTP provider
        iconService = new IconService(new HttpProvider(httpClient, "http://localhost:8080", 3));
    }


    public Address deploy(Wallet wallet) throws IOException {
        // Read binary data of the SCORE
        System.out.println("10");
        byte[] content = readFile();
        System.out.println("11");
        // Enter information about tokens to deploy
        BigInteger initialSupply = new BigInteger("100000000000");
        BigInteger decimals = new BigInteger("18");
        String tokenName = "StandardToken";
        String tokenSymbol = "ST";
        System.out.println("12");
        // Create request object to send transaction.
        Request<Bytes> request = sendTransaction(wallet, content,
                initialSupply, decimals, tokenName, tokenSymbol);
        System.out.println("13");
        // Synchronized request execution
        Bytes txHash = request.execute();
        System.out.println("14");
        System.out.println("######### sendTransaction #########");
        System.out.println(String.format("Deploy Token name:%s(%s), creator:%s, txHash:%s",
                tokenName, tokenSymbol, wallet.getAddress(), txHash));

        // Check the transaction result requested by transaction hash
        TransactionResult result = checkResult(txHash);
        if (result != null && BigInteger.ONE.equals(result.getStatus())) {
            return new Address(result.getScoreAddress());
        }
        throw new IOException("Deploy failed!");
    }

    private Request<Bytes> sendTransaction(Wallet wallet, byte[] content, BigInteger initialSupply,
                                           BigInteger decimals, String tokenName, String tokenSymbol) throws IOException {

        // Network ID ("1" for Mainnet, "2" for Testnet, etc)
        BigInteger networkId = new BigInteger("3");
        // Transaction creation time (timestamp is in the microsecond)
        long timestamp = System.currentTimeMillis() * 1000L;
        // Content's mime-type
        String contentType = "application/zip";

        // Convert information to object for the request.
        RpcObject params = new RpcObject.Builder()
                .put("_initialSupply", new RpcValue(initialSupply))
                .put("_decimals", new RpcValue(decimals))
                .build();
        System.out.println("a");
        // Create a raw transaction to deploy a token SCORE (without stepLimit)
        Transaction transaction = TransactionBuilder.newBuilder()
                .nid(networkId)
                .from(wallet.getAddress())
                .to(new Address("hx37853cdf2939845dbe920c32a2f61ef1513ab45f"))
                .timestamp(new BigInteger(Long.toString(timestamp)))
                .deploy(contentType, content)
                .params(params)
                .build();
        System.out.println("b");
        // Get an estimated step value
        BigInteger estimatedStep = iconService.estimateStep(transaction).execute();
        System.out.println("c");
        // Set some margin value for the operation of `on_install`
        BigInteger margin = BigInteger.valueOf(10000);
        System.out.println("d");
        // Create a signedTransaction with the sender's wallet and the estimatedStep
        SignedTransaction signedTransaction = new SignedTransaction(transaction, wallet, estimatedStep.add(margin));
        System.out.println("e");
        return iconService.sendTransaction(signedTransaction);
    }

    private TransactionResult checkResult(Bytes hash) {
        // Set timer to abort operation after {terminatedTime}
        startTimer();
        isRunningCheckResult = true;
        TransactionResult result = null;

        System.out.println("######### check Result #########");
        while (isRunningCheckResult) {

            try {
                // Get the transaction result with a transaction hash.
                result = iconService.getTransactionResult(hash).execute();
                System.out.println("confirm transaction txHash:" + hash);
                System.out.println("transaction status(1:success, 0:failure):" + result.getStatus());
                System.out.println("created score address:" + result.getScoreAddress());
                System.out.println("waiting accept score...");
                System.out.println("transaction result:" + result);

                break;
            } catch (Exception e) {
                // If execute as synchronized, occur exception when transaction is pending
                System.out.println("pending Transaction.....");
            }

            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
                break;
            }
        }
        timer.cancel();
        System.out.println("######### end #########");
        return result;
    }

    void startTimer() {
        stopTimer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                isRunningCheckResult = false;
            }
        }, terminatedTime);
    }

    void stopTimer() {
        timer.cancel();
        timer = new Timer();
    }

    private byte[] readFile() throws IOException {
        // sample token : resource/sample_token.zip
        File file = new File(getClass().getClassLoader().getResource("sampleToken.zip").getFile());
        return readBytes(file);
    }

    private byte[] readBytes(File file) throws IOException {
        long length = file.length();
        if (length > Integer.MAX_VALUE) throw new OutOfMemoryError("File is too big!!");
        byte[] result = new byte[(int) length];
        try (DataInputStream inputStream = new DataInputStream(new FileInputStream(file))) {
            inputStream.readFully(result);
        }
        return result;
    }

//    public BigInteger getMaxStepLimit() throws IOException {
//        // APIs that Governance SCORE provides.
//        // "getMaxStepLimit" : the maximum step limit value that any SCORE execution should be bounded by.
//        String methodName = "getMaxStepLimit";
//        // Check input and output parameters of api if you need
//        Map<String, ScoreApi> governanceScoreApiMap = getGovernanceScoreApi();
//        ScoreApi api = governanceScoreApiMap.get(methodName);
//        System.out.println("[getMaxStepLimit]\ninputs:" + api.getInputs() + "\noutputs:" + api.getOutputs());
//
//        RpcObject params = new RpcObject.Builder()
//                .put(api.getInputs().get(0).getName(), new RpcValue("invoke"))
//                .build();
//
//        Call<BigInteger> call = new Call.Builder()
//                .to(CommonData.GOVERNANCE_ADDRESS)
//                .method(methodName)
//                .params(params)
//                .buildWith(BigInteger.class);
//        return iconService.call(call).execute();
//    }

//    public Map<String, ScoreApi> getGovernanceScoreApi() throws IOException {
//        List<ScoreApi> apis = iconService.getScoreApi(CommonData.GOVERNANCE_ADDRESS).execute();
//        return apis.stream().collect(Collectors.toMap(ScoreApi::getName, api -> api));
//    }
}