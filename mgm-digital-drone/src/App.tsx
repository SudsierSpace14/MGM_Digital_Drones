import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Hero } from "./sections/Hero"
import { Portfolio } from "./sections/Portfolio"
import { RankedWorks } from "./sections/RankedWorks"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RankedWorks />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
