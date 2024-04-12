package net.DinethLochana.DinethServer.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Resource_Not_Found_Exception extends RuntimeException{

    public Resource_Not_Found_Exception(String message){
        super(message);
    }

}
