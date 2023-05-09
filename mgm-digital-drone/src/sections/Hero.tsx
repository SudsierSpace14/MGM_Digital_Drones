import Video from '../assets/ilhabela/video.mp4'

export const Hero = () => {
    return (
        <section id="hero" className='h-[95vh] w-screen flex-center relative overflow-hidden'>
            <div className='flex flex-col items-center gap-6 shadow-filter text-center'>
                <h1 className='px-4'>MGM DIGITAL DRONES</h1>
                <div className='flex gap-4'>
                    <button>Contato</button>
                    <button>Conheça nosso site</button>
                </div>

            </div>
            <video autoPlay loop muted className='drone-video absolute left-1/2 -translate-x-1/2 h-[95vh] lg:h-[110vh]'>
                <source src={Video} type="video/mp4" />
            </video>
        </section>
    )
}