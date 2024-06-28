# SSOReady NextAuth.js Demo

This is a demo app using [SSOReady](https://ssoready.com) and [NextAuth.js](https://next-auth.js.org).

The `.env` provided is configured to work with the Vercel-hosted example release
of this app, which runs on https://ssoready-nextauth-demo.vercel.app/.

To run it yourself locally, you'll need to use your own set of client ID /
secrets and replace those in `.env`. To do that, do the following:

* Run `npm run dev`
* Sign up at https://app.ssoready.com for free.
* Create a new "Environment". Choose any valid name and redirect URL.
* Edit the new environment. Set the OAuth Redirect URI to `http://localhost:3000/api/auth/callback/ssoready`.
* Go to "API Keys".
* Create a new SAML OAuth Client. Take the client secret (it starts with
  `ssoready_oauth_client_secret_...`) and put it in `.env` under `SSOREADY_CLIENT_SECRET`.
* Click "View SAML OAuth Client". Take the displayed client ID (it starts with
  `saml_oauth_client_`) and put it in `.env` under `SSOREADY_CLIENT_ID`.

You now have a working SAML setup for your app. If you want to test the login
against a real SAML identity provider, you can sign up for a dev account of Okta
(go to https://developer.okta.com/signup/ and click "Sign up free for Developer
Edition"). Then you can follow the instructions here:

https://ssoready.com/docs/idp-configuration/okta
