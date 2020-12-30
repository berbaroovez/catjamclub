import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Page() {
  const [session, loading] = useSession();

  function pog() {
    console.log(session.user);
  }
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
          <img src={session.user.image} />
          <button onClick={pog}>Pog</button>
        </>
      )}
    </>
  );
}
