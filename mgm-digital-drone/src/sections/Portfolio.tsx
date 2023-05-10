const imgList = [
    'https://cdn.britannica.com/54/101754-050-3FA9B4A0/Downtown-Sao-Paulo.jpg',
    'https://s4.static.brasilescola.uol.com.br/be/2022/05/floresta-amazonica-rio-amazonas.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/dc/Serra_P4.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Praca_do_Papa%2C_Belo_Horizonte.jpg/640px-Praca_do_Papa%2C_Belo_Horizonte.jpg',
    'https://i0.statig.com.br/bancodeimagens/4z/fi/hm/4zfihmb25m6hi9hkf2fh47m60.jpg'
]

const Item = (props: { img: string }) => (
    <div style={{ backgroundImage: `url(${props.img})` }} className="bg-cover bg-center h-[300px] w-full hover:scale-x-110 transition-all">

    </div>
)

export const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="text-center mt-10">
                <h1>Portfolio</h1>
                <ul className="grid grid-cols-1 md:grid-cols-5 p-4 pr-8">
                    {imgList.map(img => (
                        <Item img={img} key={img} />
                    ))}
                </ul>
            </div>
        </section>
    )
}