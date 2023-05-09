import { Navbar } from "./components/Navbar"
import { Building } from "./sections/Building"
import { Hero } from "./sections/Hero"
import { RankedWorks } from "./sections/RankedWorks"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RankedWorks />
      <Building />
    </>
  )
}

export default App
