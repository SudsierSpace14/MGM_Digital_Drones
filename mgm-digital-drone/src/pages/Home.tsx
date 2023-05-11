import { Hero } from "../sections/Hero"
import { Portfolio } from "../sections/Portfolio"
import { RankedWorks } from "../sections/RankedWorks"

export const Home = () => {
    return (
        <>
            <Hero />
            <RankedWorks />
            <Portfolio />
        </>
    )
}