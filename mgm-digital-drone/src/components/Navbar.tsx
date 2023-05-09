import { List } from '@phosphor-icons/react'
import MGMDigital from '../assets/mgmdigital.png'

export const Navbar = () => {
    return (
        <nav className='fixed h-[64px] w-full mt-2 z-10'>
            <div className='ml-10 flex justify-between md:justify-start items-center h-full'>
                <a href="http://www.mgmdigital.com.br" className='h-full p-2' tabIndex={1}>
                    <img src={MGMDigital} alt="MGM Digital" className='h-full' />
                </a>
                <ul className='list-none hidden md:flex gap-4 mx-12 '>
                    <li>
                        <a href="" className='border border-white py-1 px-4 rounded-full hover:bg-slate-400 transition-all' tabIndex={2}>Contato</a>
                    </li>
                    <li>
                        <a href="" className='border border-white py-1 px-4 rounded-full hover:bg-slate-400 transition-all' tabIndex={3}>Nosso site</a>
                    </li>
                    <li>
                        <a href="" className='border border-white py-1 px-4 rounded-full hover:bg-slate-400 transition-all' tabIndex={4}>
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="" className='border border-white py-1 px-4 rounded-full hover:bg-slate-400 transition-all' tabIndex={4}>Portfolio</a>
                    </li>
                </ul>
                <List className='menu float-right hidden mr-10 shadow-filter cursor-pointer' size={32} color="#fff" weight="fill" />
            </div>
        </nav>
    )
}