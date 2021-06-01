import Navbar from '../components/Navbar/navBar'
import Footer from './footer'
import Router from 'next/router'
import NProgress from 'nprogress'


Router.onRouteChangeStart = url => {
   /*  console.log(url) */
    NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <title>Devans desarrollo web apps diseño web UI UX</title>
            <main>
                {children}
            </main>

            <Footer />

        </>
    )
}

export default Layout
