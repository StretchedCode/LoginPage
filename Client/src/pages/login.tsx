import { Routes, Route } from "react-router-dom"
import InputGroup from "../components/inputgroup"
import LoginCircles from "../components/loginCircles"
import { FormEvent, useState } from "react"

function Login() {
  const [username, setUsername] = useState("test")
  const [password, setPassword] = useState("pass")
  const [validForm, setValidForm] = useState(true)

  const checkForm = (e: FormEvent) => {
    if (username === "" || password === "")
      setValidForm((validForm) => !validForm)
    else
      fetch("http://localhost:3000/log-in", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify([username, password]),
      })
    e.preventDefault()
  }

  return (
    <div className="min-h-screen min-w-[100vw] bg-red-900 flex flex-col p-5 justify-center items-center xl:flex-row xl:justify-between xl:p-10">
      <LoginCircles></LoginCircles>
      <form
        onSubmit={checkForm}
        role="form"
        className="bg-white z-10 p-7 rounded flex flex-col gap-5 min-w-[30%]"
      >
        <h1 className="font-bold text-3xl">Log in</h1>
        <InputGroup
          dataLabel="username"
          labelRole="user-label"
          inputType="text"
          inputRole="username-input"
          inputPlaceholder="Username"
        ></InputGroup>
        <InputGroup
          dataLabel="password"
          labelRole="password-label"
          inputType="password"
          inputRole="user-password"
          inputPlaceholder="Password"
        ></InputGroup>
        <button
          role="submit-login"
          aria-label="form submit button"
          formAction="submit"
          className="bg-yellow-400 rounded-md font-semibold p-3 text-md hover:bg-yellow-500"
          type="submit"
        >
          Log in
        </button>
        <button
          role="sign-up"
          className="bg-fuchsia-400 rounded-md text-white p-3 text-md hover:bg-fuchsia-500 font-semibold"
          type="button"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

export default Login
