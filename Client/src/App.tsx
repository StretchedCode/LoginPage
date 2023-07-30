import "./stylesheets/App.css"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={login}></Route>
      </Routes>
    </>
  )
}

export default App
