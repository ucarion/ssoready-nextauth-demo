import NextAuth from "next-auth"
import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers"

export interface SSOReadySAMLProfile extends Record<string, any> {
  id: string
  email: string
  organizationId: string
  organizationExternalId: string
}

function SSOReadySAML<P extends SSOReadySAMLProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "ssoready-saml",
    name: "SSOReady SAML",
    type: "oidc",
    issuer: "https://auth.ssoready.com/v1/oauth",
    profile(profile) {
      return {
        id: profile.sub,
        email: profile.sub,
        organizationId: profile.organizationId,
        organizationExternalId: profile.organizationExternalId,
      }
    },
    client: {
      token_endpoint_auth_method: "client_secret_post",
    }
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [SSOReadySAML]
})
