# Authentification vs Authorization

- authorization has to do with user level

## Credential
    - username and password (1 factor)

## SSO Single sign on
    - authorization more than authenfication

## 2FA (Two-factor authenfication)
    - sms code or mail

## MFA (Multi-factor authenfication)
    - more than 2 factor (for more security)

## Oauth 2.0
    - authorization more than authentification
    - login in a third party server (login with google,github etc)

## JWT (JSON Web Token)
    - Authorization to get metadata for credential

## OTP (One time password)
    - receive a code by sms or mail

## Magic Link ????
    - link to connect without password

## Public key cryptography
    - create two keys, public and private key like in github


## Implementation

- Custom Auth (Server side)
    - user/pass
    - webauthn

- Identity provider
    - openid
    - SAML 2.0
        - Sign in with...

- Identy As a Service IDaaS
    - Auth0
    - Firebase
    - Azure
        - nothing to build

## Security
    - Man in the middle attacks
            - hacking middle of the server and user
    - keylogger
        - phising keyboard that intercept key tapped

    - Easy to guess passwords
   
    - Web server and DBs Attacks

    - Phishing and Social engineering Attacks
