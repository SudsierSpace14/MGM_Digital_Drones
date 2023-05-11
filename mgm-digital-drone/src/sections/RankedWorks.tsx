import Img1 from '../assets/ilhabela/ilhabela2.jpg'
import Img2 from '../assets/rankedworks/01.jpg'

export const RankedWorks = () => {
    return (
        <section id="ranked-works" className="mt-4 px-4">
            <ul className="flex flex-wrap gap-4 pr-4">
                <li className="relative flex-1 opacity-80 hover:opacity-100 transition-all min-w-[250px] shadow-filter">
                    <img src={Img1} alt="" className="h-full" />

                    <h2 className="absolute bottom-4 left-4 font-bold shadow-filter shadow-full-opacity">Ilha Bela</h2>
                </li>
                <li className="relative flex-1 opacity-80 hover:opacity-100 transition-all min-w-[250px] shadow-filter">
                    <img src={Img2} alt="" className="h-full" />

                    <h2 className="absolute bottom-4 left-4 font-bold shadow-filter shadow-full-opacity">Iluminação Pindamonhangaba</h2>
                </li>
            </ul>
        </section>
    )
}