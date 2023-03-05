package com.addressBookApp.auth;

public class Auth {
    private String logon;
    private String password;

    public Auth() {
    }

    public Auth(String logon,
                String password) {
        this.logon = logon;
        this.password = password;
    }

    public String getLogon() {
        return logon;
    }

    public void setLogon(String logon) {
        this.logon = logon;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Auth{" +
                "logon='" + logon + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
