import img01 from '../assets/portfolio/01.jpg'
import img02 from '../assets/portfolio/02.jpg'
import img03 from '../assets/portfolio/03.jpg'
import img04 from '../assets/portfolio/04.jpg'
import img05 from '../assets/portfolio/05.png'

const images = [img01, img02, img03, img04, img05]

const Item = (props: { img: string }) => (
    <div style={{ backgroundImage: `url(${props.img})` }} className="bg-cover bg-center h-[300px] w-full hover:scale-x-110 transition-all">

    </div>
)

export const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="text-center">
                <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-4 pr-8">
                    {images.map(img => (
                        <Item img={img} key={img} />
                    ))}
                </ul>
            </div>
        </section>
    )
}