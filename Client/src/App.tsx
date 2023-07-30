import "./stylesheets/App.css"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
      </Routes>
    </>
  )
}

export default App
