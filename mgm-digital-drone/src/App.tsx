import { BrowserRouter } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Router } from "./Router"

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
