
import Link from 'next/link'
import React, { useState } from 'react'


import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';
/* import { FaBars } from 'react-icons/fa'; */
import { socials } from '../../data'

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link href="/" >
                        <div className='nav-logo'>
                            <a> <span>Dev</span>ans <RiCodeSSlashFill /> </a>
                        </div>
                    </Link>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-links" onClick={handleClick}>
                                    Inicio
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services">
                                <a className="nav-links" onClick={handleClick}>
                                    Services
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services">
                                <a className="nav-links" onClick={handleClick}>
                                    Planes
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog">
                                <a className="nav-links" onClick={handleClick}>
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/github">
                                <a className="nav-links" onClick={handleClick}>
                                    Github
                                </a>
                            </Link>
                        </li>
                        <li className="redes-menu">
                            {
                                socials.map(({ link, icon }, i) => (
                                    <a href={link} key={i} target='blank' className="icons">
                                        {icon}
                                    </a>
                                ))
                            }
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <RiCloseLine /> : <RiBarChartHorizontalLine />}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
