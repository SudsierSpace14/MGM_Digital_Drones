import { List, X } from '@phosphor-icons/react'
import MGMDigital from '../assets/mgmdigital.png'
import React, { useState } from 'react'

const Menu: React.FC<{ toggleMenu: any }> = ({ toggleMenu }) => (
    <ul id="menu" className='absolute w-full bg-black bg-opacity-50 left-0 top-0 p-4'>
        <X onClick={toggleMenu} size={32} color="#fff" weight="bold" className='cursor-pointer float-right' />
        <a href="" tabIndex={1} className='mb-4 block relative mt-10'>
            <li>
                Contato
            </li>
        </a>
        <a href="" tabIndex={1} className='mb-4 block relative'>
            <li>
                Nosso site
            </li>
        </a>
        <a href="" tabIndex={1} className='mb-4 block relative'>
            <li>
                Sobre
            </li>
        </a>
        <a href="" tabIndex={1} className='mb-4 block relative'>
            <li>
                Portfolio
            </li>
        </a>
    </ul>
)

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        if (menuOpen) {
            setMenuOpen(false)
            return
        }
        setMenuOpen(true)
    }

    return (
        <nav className='fixed h-[64px] w-full mt-2 z-10'>
            <div className='ml-10 flex justify-between md:justify-start items-center h-full'>
                <a href="http://www.mgmdigital.com.br" className='h-full p-2' tabIndex={1}>
                    <img src={MGMDigital} alt="MGM Digital" className='h-full' />
                </a>
                <ul className='list-none hidden md:flex gap-4 mx-12 '>
                    <li>
                        <a href="" className='border border-white py-1 px-4 rounded-full hover:bg-slate-400 transition-all' tabIndex={2}>
                            Contato</a>
                    </li>
                    <li>
                        <a href="" className='border border-white py-1 px-4 rounded-full hover:bg-slate-400 transition-all' tabIndex={3}>
                            Nosso site</a>
                    </li>
                    <li>
                        <a href="" className='border border-white py-1 px-4 rounded-full hover:bg-slate-400 transition-all' tabIndex={4}>
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="" className='border border-white py-1 px-4 rounded-full hover:bg-slate-400 transition-all' tabIndex={4}>
                            Portfolio</a>
                    </li>
                </ul>
                <List
                    onClick={toggleMenu}
                    className='menu float-right hidden mr-10 shadow-filter cursor-pointer'
                    size={32}
                    color="#fff"
                    weight="fill"
                />
                {menuOpen && <Menu toggleMenu={toggleMenu} />}
            </div>
        </nav>
    )
}