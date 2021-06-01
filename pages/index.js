import React from 'react'
import Layout from '../components/Layout'
import { services, planes } from '../data';
import Link from 'next/link';
import AnimateIcons from '../components/Animateicons/animateIcons';
import Testimonials from '../components/Testimonials/Testimonials';
import Image from 'next/image'


const Index = () => {
    return (
        <Layout>

            {/* Seccion hero */}
            <section className='hero py-5 d-flex'>
                <div className="container align-self-center">
                    <div className="row d-flex ">
                        <div className="col-lg-6 align-self-center">
                            <Image
                                src="/hero-img.png"
                                alt="imagen de bloque hero"
                                width={600}
                                height={500}
                                className='hero-image'
                            />
                            {/* <div className='align-self-center position-absolute'>
                                <Image
                                    src="/circle.png"
                                    alt="circulo imagen bloque hero"
                                    width={500}
                                    height={500}
                                    className='circle'
                                />
                            </div> */}
                        </div>
                        <div className=" content col-lg-6 align-self-center">
                            <h1>Diseño y desarrollo de <span className='text-primary'>sitios web y Apps a la medida</span></h1>
                            <p className='lead text-muted mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam amet sequi error doloremque! Fugit deserunt dignissimos eaque ipsum neque.</p>
                            <div>
                                <Link href="#">
                                    <a>
                                        <button type="button" className="btn btn-primary mr-3 mb-3 shadow">Inicia tu proyecto </button>
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a>
                                        <button type="button" className="btn btn-secondary mb-3 shadow">Ver portafolio </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seccion Tecnologias */}
            <section className="tecnolgias py-5">
                <div className="container align-self-center">
                    {/*  <h1 className='titulo'>Tecnologias</h1> */}
                    <div className="row d-flex">
                        <div className='col-lg-6 align-self-center'>
                            <h3>Subtitulo</h3>
                            <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla earum aperiam similique rerum dolor tenetur odit dicta pariatur neque. Quod magnam porro, obcaecati debitis voluptate earum a enim voluptatum quia nulla veritatis ad reprehenderit! Sit id dignissimos incidunt sed earum ipsa, animi, quam commodi, consequuntur nostrum eaque nisi accusamus!</p>
                        </div>
                        <div className='col-lg-6 pb-3 align-self-center'>
                            <AnimateIcons />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seccion Servicios */}
            <section className="services py-5 d-flex" id="servicios">
                <div className="container align-self-center">

                    <h2 className='titulo'>Servicios</h2>

                    <div className="row">
                        {
                            services.map(({ title, icon, content }, i) => (
                                <div className="card card-services text-white mx-auto my-3 shadow" key={i}>
                                    <div className="card-body">
                                        <div className="card-icon d-flex mb-3 shadow">
                                            <span className='align-self-center mx-auto lead'>{icon}</span>
                                        </div>
                                        <h3 className="card-title">{title}</h3>
                                        <p className="card-text text-muted">{content}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </section>

            {/* Seccion Testimonios */}
            <section className="testimonials py-5 d-flex">
                <div className="container align-self-center">
                    {/*  <h1 className='titulo'>Tecnologias</h1> */}
                    <div className="py-3 container shadow">
                        <div className='align-self-center'>
                            <h2 className="text-center mb-3">Testimonios</h2>
                                <Testimonials />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seccion Planes */}
            <section className="planes py-5 d-flex">
                <div className="container">
                    <div className="w-75 text-center mx-auto mb-5">
                        <h2>Planes a la medida <span className='text-primary font-weight-bold'>para todo presupuesto</span></h2>
                        <p className='lead text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod autem, beatae numquam dolorum modi unde accusantium commodi recusandae nulla?</p>
                    </div>

                    <div className="row">
                        {
                            planes.map(({ plan, title, content, items, icon }, i) => (
                                <div className='card card-planes mx-auto my-3 shadow' key={i}>
                                    <div className="card-body">
                                        <small className='text-primary font-weight-bold'>{plan}</small>
                                        <h2 className='font-weight-bold mb-4'>{title}</h2>
                                        <p className='text-muted mb-3'>{content}</p>
                                        <ul className='list-unstyled mb-0'>
                                            {items.map(({ item }, i) => (
                                                <li className='text-muted mb-2' key={i}> <span className='text-primary lead font-weight-bold mr-1'>{icon}</span> {item}</li>
                                            ))}
                                        </ul>
                                        <div className="pt-4 pb-2">
                                            <Link href="#">
                                                <a className="btn btn-primary w-100 shadow">Agenda una demo</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Seccion  */}
            <section className='design d-flex'>
                <div className="container align-self-center">
                    <div className="row d-flex">
                        <div className="col-lg-12">
                            {/* <h1 className='text-dark font-weight-bold'>Diseño y desarrollo de <span className='text-primary font-weight-bold'>sitios web y Apps a la medida</span></h1>
                            <p className='lead mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam amet sequi error doloremque! Fugit deserunt dignissimos eaque ipsum neque.</p>
                            <div>
                                <Link href="#">
                                    <a>
                                        <button type="button" className="btn btn-primary mr-3 mb-3 shadow">Inicia tu proyecto </button>
                                    </a>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Seccion Contacto */}
            <section className='contacto py-5 d-flex'>
                <div className="container align-self-center">
                    <div className="card shadow bg-dark">
                        <div className="card-body p-5">
                            <h3 className='font-weight-bold'>Contactanos para comenzar tu proyecto</h3>
                            <p className='text-muted mb-4'>Tienes una idea que deseas llevar a la realidad, es momento de empezar tu proyecto y lograr los mejores resultados</p>
                            <form>
                                <div className="row">
                                    <div className="col-12 col-md-3 my-3">
                                        <input type="text" className="form-control shadow" placeholder="Nombre"  />
                                    </div>
                                    <div className="col-12 col-md-3 my-3">
                                        <input type="email" className="form-control shadow" placeholder="Email" />
                                    </div>
                                    <div className="col-12 col-md-3 my-3">
                                        <input type="text" className="form-control shadow" placeholder="Mensaje" />
                                    </div>
                                    <div className="col-12 col-md-3 my-3">
                                        <button type="submit" className="btn btn-primary w-100 shadow">Enviar Datos</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        
            {/* Seccion Final  */}                
            <section className='final d-flex'>
                <div className="container align-self-center">
                    <div className="row d-flex">
                        <div className="col-lg-12">

                        </div>
                    </div>
                </div>
            </section>                
        </Layout>
    )
}

export default Index
