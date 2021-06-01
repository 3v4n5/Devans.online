import React from 'react'
import { socials } from '../data'

const Footer = () => {
    return (
        <footer className='py-5 bg-footer text-muted text-center'>
            <div className="container">

                <div className="row d-flex mx-auto justify-content-center">

                    <p className='col-lg-4 align-self-center mb-0 text-primary font-weight-bold'>&copy; Devans.online </p>
                        <div className="col-lg-4">
                            {
                                socials.map(({ link, icon }, i) => (
                                    <a href={link} key={i} target='blank' className="icons">
                                        {icon}
                                    </a>
                                ))
                            }
                        </div>

                    <p className='col-lg-4 mb-0'><small>{new Date().getFullYear()} - Derechos reservados</small></p>

                </div>
            </div>

        </footer>
    )
}

export default Footer
