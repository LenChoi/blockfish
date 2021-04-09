/*
 * Copyright 2018 ICON Foundation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.project.blockfish.service.icon.icx.get;

import com.project.blockfish.service.icon.icx.Constants;
import foundation.icon.icx.IconService;
import foundation.icon.icx.data.Address;
import foundation.icon.icx.transport.http.HttpProvider;
import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;

import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.TimeUnit;

public class IcxGetBalance {

    private IconService iconService;

    private IcxGetBalance() {
        OkHttpClient okHttpClient = new OkHttpClient.Builder()
                .readTimeout(200, TimeUnit.MILLISECONDS)
                .writeTimeout(600, TimeUnit.MILLISECONDS)
                .build();

        iconService = new IconService(new HttpProvider(okHttpClient, Constants.SERVER_URL, 3));
    }

    private void getBalance() throws IOException {
        Address address = Constants.testAddress1;
        BigInteger balance = iconService.getBalance(address).execute();
        System.out.println("balance: " + balance);
    }

    public static void main(String[] args) throws IOException {
        new IcxGetBalance().getBalance();
    }
}
