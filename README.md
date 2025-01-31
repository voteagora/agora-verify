## Agora Verify
Agora Verify
The app provides a simple mechanism for wallet + social verification using ConnectKit and [Auth.js](https://authjs.dev/). 

## Env Variables

Configure the .env file with the following required parameters. The AUTH_SECRET is generated using the command `openssl rand -base64 32`

```bash
NEXT_PUBLIC_ALCHEMY_ID=
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=

AUTH_SECRET=
AUTH_TWITTER_ID=
AUTH_TWITTER_SECRET=
```


## X App Config
Ensure the X app is configured with the following callback URI 

```
http://localhost:3000/api/auth/callback/twitter (for local development)
https://verify.agoray.xyz/api/auth/callback/twitter (for prod)
```