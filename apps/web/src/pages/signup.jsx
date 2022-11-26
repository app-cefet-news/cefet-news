import { useState } from "react"

import Head from "next/head"

import Navbar from "../components/Navbar"

export default function SignUp() {

  const [form, setForm] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
  }

  function handleForm(e) {
    setForm((fields) => ({
      ...fields,
      [e.target.name]: e.target.value
    }))
  }



  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Navbar
        clean
      />
      <div
        className="p-4"
      >
        <h1
          className="text-3xl text-center font-bold"
        >
          Cadastro
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 p-4"
        >
          <input
            onChange={handleForm}
            type="text"
            name="name"
            placeholder="Name"
            className="border rounded-md p-2 bg-neutral-900"
          />
          <input
            onChange={handleForm}
            type="text"
            name="email"
            placeholder="Email"
            className="border rounded-md p-2 bg-neutral-900"
          />
          <input
            onChange={handleForm}
            type="password"
            name="password"
            placeholder="Password"
            className="border rounded-md p-2 bg-neutral-900"
          />
          <button
            type="submit"
            className="p-2 bg-neutral-0 text-neutral-900 rounded-md hover:bg-neutral-30"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  )
}