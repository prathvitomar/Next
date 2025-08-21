"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { signIn, signOut } from "next-auth/react"

function NextAuthSigninPage() {
    const navigate = useRouter();

    function handleSignin() {
        signIn();
        navigate.push("/");
    }
  
    function handleSignOut() {
        signOut();
        navigate.push("app/signin");
    }
  
    return (
    <div>
        <button onClick={handleSignin}>
            Signin
        </button>
        <button onClick={handleSignOut}>
            Logout
        </button>
    </div>
  )
}

export default NextAuthSigninPage