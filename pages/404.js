import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

const page404 = () => {
    return (

        <Layout>
            <div className="text-center margin-top">

                <img src="/404.svg" alt="imagen-404" />
                <h1 className='display-4'>Pagina no Encontrada</h1>
                <h3 className='margin-bottom'>Volver al
                    <Link href="/">
                        <a className='text-succes'> Inicio</a>
                    </Link>
                </h3>
            </div>
            <style jsx>
                {`
                    .margin-top{
                        margin-top: 100px;
                    }

                    .margin-bottom{
                        margin-bottom: 95px;
                    }
                `}
            </style>

        </Layout>
    )
}

export default page404
