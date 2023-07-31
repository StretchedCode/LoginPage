import { Routes, Route } from "react-router-dom"
import InputGroup from "../components/inputgroup"
import LoginCircles from "../components/loginCircles"

function Login() {
  return (
    <div className="min-h-screen min-w-[100vw] bg-red-900 flex flex-col p-5 items-center md:flex-row md:justify-between md:p-10">
      <LoginCircles></LoginCircles>
      <form
        action=""
        method=""
        role="form"
        className="bg-white z-10 p-7 rounded flex flex-col gap-5 min-w-[25%]"
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
        >
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login
