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
        className="bg-white p-7 rounded flex flex-col gap-5 min-w-[25%]"
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
      </form>
    </div>
  )
}

export default Login
