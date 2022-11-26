import Head from "next/head"
import Navbar from "../components/Navbar"

export default function Login() {


  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Navbar
        clean
      />
      <div>
        Login page
      </div>
    </>
  )
}