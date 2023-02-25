package dev.ericdrake.exceptions;

public class InvalidBinException extends Exception {
    public static final String NONEXISTENT_BIN_ID = "The Bin ID provided does not exists";

    public InvalidBinException(){
        super(InvalidBinException.NONEXISTENT_BIN_ID);
    }
}
