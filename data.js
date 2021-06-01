import { SiFacebook } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { BsCheckCircle } from 'react-icons/bs';
import { RiPaintBrushLine } from 'react-icons/ri';
import { MdDeveloperBoard, MdPhoneIphone } from 'react-icons/md';
import Image from 'next/image';

export const socials = [
        {

                link: 'https://www.facebook.com/devans.devans.9469',
                text: 'Devans',
                icon: <SiFacebook />

        },
        {

                link: 'https://twitter.com/@Devans23159343',
                text: '@Devans23159343',
                icon: <SiTwitter />

        },
        {

                link: 'https://www.github.com/',
                text: 'Devans',
                icon: <SiGithub />

        },
        {

                link: 'https://api.whatsapp.com/send?phone=573127921501&text=hola,%20Dev@ns%20me%20puedes%20ayudar%20con%20mi%20proyecto%20Gracias!?',
                text: 'Dev@ns',
                icon: <SiWhatsapp />


        }
]

export const services = [
        {
                title: 'Titulo',
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores quaerat optio excepturi cumque soluta asperiores amet nesciunt voluptatum alias.',
                icon: <MdDeveloperBoard />

        },
        {
                title: 'Titulo',
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores quaerat optio excepturi cumque soluta asperiores amet nesciunt voluptatum alias.',
                icon: <MdPhoneIphone />

        },
        /* {
                title: 'lorem',
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores quaerat optio excepturi cumque soluta asperiores amet nesciunt voluptatum alias.',
                icon: <FaWordpress />

        }, */
        {
                title: 'Titulo',
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores quaerat optio excepturi cumque soluta asperiores amet nesciunt voluptatum alias.',
                icon: <RiPaintBrushLine />

        },
]

export const planes = [
        {
                plan: 'Gratis',
                title: 'Gratis',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                icon: <BsCheckCircle />,
                items: [
                        { item: 'lorem ipsum' },
                        { item: 'lorem ipsum' },
                        { item: 'lorem ipsum' },
                ]
        },
        {
                plan: 'Gratis',
                title: 'Gratis',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                icon: <BsCheckCircle />,
                items: [
                        { item: 'lorem ipsum' },
                        { item: 'lorem ipsum' },
                        { item: 'lorem ipsum' },
                ]
        },
        {
                plan: 'Gratis',
                title: 'Gratis',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                icon: <BsCheckCircle />,
                items: [
                        { item: 'lorem ipsum' },
                        { item: 'lorem ipsum' },
                        { item: 'lorem ipsum' },
                ]
        }
]

export const testimonios = [
        
        {
                img: <Image
                        src="/lens.png"
                        alt="imagen de testimonio"
                        width={100}
                        height={100}
                />,
                title: 'Lens Arte y Felicidad',
                content: ' " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut soluta nam, odio repudiandae voluptate, in at autem deleniti vero eveniet laboriosam fugiat aspernatur totam qui. " '        
        },
        {
                img: <Image
                        src="/balletrina.png"
                        alt="imagen de testimonio"
                        width={100}
                        height={100}
                />,
                title: 'Balletrina',
                content: ' " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut soluta nam, odio repudiandae voluptate, in at autem deleniti vero eveniet laboriosam fugiat aspernatur totam qui. " '        
        },
        {
                img: <Image
                        src="/hib.png"
                        alt="imagen de testimonio"
                        width={100}
                        height={100}
                />,
                title: 'Hib Un Estilo Propio',
                content: ' " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut soluta nam, odio repudiandae voluptate, in at autem deleniti vero eveniet laboriosam fugiat aspernatur totam qui. " '        
        },
]



