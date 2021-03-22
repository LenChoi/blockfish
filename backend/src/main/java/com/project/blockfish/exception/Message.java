package com.project.blockfish.exception;

import lombok.Data;

@Data
public class Message {
    private Boolean status;
    private Object result;

    public Message() {
        this.status = false;
        this.result = null;
    }
}
