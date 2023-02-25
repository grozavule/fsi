package dev.ericdrake.exceptions;

public class BinDeletionException extends Exception {
    public static final String DELETION_FAILED = "Bin could not be deleted. There may still be items assigned to it.";

    public BinDeletionException(){
        super(BinDeletionException.DELETION_FAILED);
    }
}
