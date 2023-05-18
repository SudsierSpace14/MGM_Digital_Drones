import { InstagramLogo, FacebookLogo, Globe, WhatsappLogo } from '@phosphor-icons/react'

export const Footer = () => {
    return (
        <footer className="container px-8 sm:px-0">
            <nav aria-label="Secondary" className="flex flex-col items-start justify-between gap-12 py-8 sm:flex-row-reverse md:py-12">
                <div className="flex items-center gap-4">
                    <a target="_blank" rel="noopener noreferer" className="link" href="http://mgmdigital.com.br">
                        <WhatsappLogo size={32} color="#fff" />
                    </a>
                    <a target="_blank" rel="noopener noreferer" className="link" href="https://www.instagram.com/mgm_digitall/">
                        <InstagramLogo size={32} color="#fff" />
                    </a>
                    <a target="_blank" rel="noopener noreferer" className="link" href="https://www.facebook.com/mgmdigitall">
                        <FacebookLogo size={32} color="#fff" />
                    </a>
                    <a target="_blank" rel="noopener noreferer" className="link" href="http://mgmdigital.com.br">
                        <Globe size={32} color="#fff" />
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-12 sm:flex sm:flex-wrap sm:gap-16 lg:gap-20">
                    <div className="group flex flex-col">
                        <h2 id="footerHeading0" className="mb-4 text-base leading-none opacity-50">
                            MGM Digital
                        </h2>
                        <ul aria-labelledby="footerHeading0" className="flex flex-col gap-2">
                            <li>
                                <a href="http://mgmdigital.com.br/modernizacao-com-iluminacao-led-chega-a-80-e-traz-mais-seguranca-para-pindamonhangaba-obras-em-pindamonhangaba" className="link whitespace-nowrap">
                                    Drones
                                </a>
                            </li><li>
                                <a href="http://mgmdigital.com.br/podcast" className="link whitespace-nowrap">
                                    Studio
                                </a>
                            </li><li>
                                <a href="https://goo.gl/maps/a9qJhkfNhfW9PNyv5" className="link whitespace-nowrap">
                                    Endereço
                                </a>
                            </li><li>
                                <a href="http://mgmdigital.com.br/Index.aspx" className="link whitespace-nowrap">
                                    Patrocinadores
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="group flex flex-col">
                        <h2 id="footerHeading1" className="mb-4 text-base leading-none opacity-50">
                            Contato
                        </h2>
                        <ul aria-labelledby="footerHeading1" className="flex flex-col gap-2">
                            <li className="break-words">
                                andrenascimento@mgmdigital.com.br
                            </li>
                            <li>
                                {'(12) 991804525'}
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mgm_digitall/" className="link whitespace-nowrap">
                                    Instagram Direct
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr className="border-astro-gray-500 pb-10" />
            <h3 className='text-2xl mb-10'>
                Site feito por <a className='sudkit' href="https://sudsier-space-toolkit-react-vite.vercel.app/">SudsierSpace Toolkit</a>
            </h3>
        </footer>
    )
}