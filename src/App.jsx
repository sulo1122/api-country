import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Home  from "./assets/Pages/Home"
import Detail from "./assets/Pages/Detail"

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.body.className = dark ? "dark" : "light"
  }, [dark])

  return (
    <>
      <Header dark={dark} setDark={setDark} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Detail />} />
      </Routes>
    </>
  )
}