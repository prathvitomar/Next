import FetchComponent from "@/components/FetchComponent";
import NextAuthSigninPage from "@/components/NextAuthSigninPage";
import SessionData from "@/components/SessionData";

export default function Home() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to Next.js!</h1>
      <FetchComponent/>
      <NextAuthSigninPage/>
      <SessionData/>
    </>
  );
}
