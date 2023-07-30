import { Routes, Route } from "react-router-dom"

function Login() {
  return (
    <div className="min-h-screen min-w-[100vw]">
      <form action="" method="" role="form">
        <h1>Log In.</h1>
        <div>
          <label
            role="user-label"
            aria-label="username input"
            htmlFor="username"
          ></label>
          <input
            type="text"
            required
            placeholder="Username ex. Joe123"
            name="username"
          ></input>
        </div>
      </form>
    </div>
  )
}

export default Login
