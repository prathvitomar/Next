"use client";
import React from "react";
import { useSession } from "next-auth/react";

function SessionData() {
  const session = useSession();
  console.log("Session data:", session);
  return <div>
    <div>
        {session && session.data && (
            <React.Fragment>
                <h1>{session.data.user?.email}</h1>
                <h1>{session.data.user?.name}</h1>
            </React.Fragment>
        )}
    </div>
  </div>;
}

export default SessionData;
