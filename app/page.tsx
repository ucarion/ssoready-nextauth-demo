"use client";

import { signIn, useSession } from "next-auth/react"

export default function Page() {
  const { data: session } = useSession()

  return (
    <div>
      <div>
        <h1>Your <code>useSession()</code> is:</h1>
        <code><pre>{JSON.stringify(session, null, 2)}</pre></code>
      </div>

      <div>
        <button onClick={() => signIn("ssoready-saml", undefined, { organizationExternalId: "example_external_id" })}>Log in with SSOReady SAML</button>
        <div>
          Reminder: your Okta username is <code>test.mctestface@example.com</code> and your password is <code>23aa5b20443ce7628400437c604172174818fc3e</code>.
        </div>
      </div>
    </div>
  )
}
