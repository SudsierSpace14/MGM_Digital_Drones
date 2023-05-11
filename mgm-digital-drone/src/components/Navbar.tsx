import { List, X } from '@phosphor-icons/react'
import MGMDigital from '../assets/mgmdigital.png'
import React, { useState } from 'react'

const NavItems = [
    {
        text: 'Contato',
        href: 'http://mgmdigital.com.br/contato'
    },
    {
        text: 'Nosso site',
        href: 'http://mgmdigital.com.br/'
    },
    {
        text: 'Sobre',
        href: 'http://mgmdigital.com.br/quem-somos-quem-somos'
    },
    {
        text: 'Portfolio',
        href: '#portfolio'
    }
]

const Menu: React.FC<{ toggleMenu: any }> = ({ toggleMenu }) => (
    <ul id="menu" className='absolute w-full bg-black bg-opacity-50 left-0 top-0 p-4'>
        <X onClick={toggleMenu} size={32} color="#fff" weight="bold" className='cursor-pointer float-right' />
        {NavItems.map((item, id) => (
            <a href={item.href} tabIndex={id} key={item.text} className='mb-4 block relative mt-10'>
                <li>
                    {item.text}
                </li>
            </a>
        ))}
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
        <nav className='fixed h-[64px] w-full z-10'>
            <div className='ml-10 mt-2 flex justify-between md:justify-start items-center h-full'>
                <a href="http://www.mgmdigital.com.br" className='h-full p-2' tabIndex={1}>
                    <img src={MGMDigital} alt="MGM Digital" className='h-full' />
                </a>
                <ul className='list-none hidden md:flex gap-4 mx-12 '>
                    {NavItems.map((item, id) => (
                        <li>
                            <a href={item.href} tabIndex={id} key={item.text} className='border border-white py-1 px-4 rounded-full hover:bg-slate-400 transition-all'>
                                {item.text}
                            </a>
                        </li>
                    ))}
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