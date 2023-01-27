
import { Carousel, Image } from 'react-bootstrap'
import ServiceCard from './ServiceCard'

import landing1 from '../img/landing1.jpg'
import landing2 from '../img/landing2.jpg'
import landing3 from '../img/landing3.jpg'
import arrow from '../img/landArrow.png'
import autom from '../img/landAutom.png'
import mecan from '../img/landMecan.png'
import landIcon1 from '../img/landIcon1.png'
import landIcon2 from '../img/landIcon2.png'
import landIcon3 from '../img/landIcon3.png'
import landIcon4 from '../img/landIcon4.png'
import landIcon5 from '../img/landIcon5.png'
import landIcon6 from '../img/landIcon6.png'
import landIcon7 from '../img/landIcon7.png'
import landUs1 from '../img/landUs1.png'
import landUs2 from '../img/landUs2.png'
import landUs3 from '../img/landUs3.png'
import landUs4 from '../img/landUs4.png'


const Landing = () => {

    const services = [
        {
            icon: landIcon1,
            descrip:'Diseño e ingeniería'
        },
        {
            icon: landIcon2,
            descrip:'Instalación y puesta en marcha'
        },
        {
            icon: landIcon3,
            descrip:'Tanques y trabajos especiales'
        },
        {
            icon: landIcon4,
            descrip:'Pipping y revamping'
        },
        {
            icon: landIcon5,
            descrip:'Mantenimiento industrial'
        },
        {
            icon: landIcon6,
            descrip:'Automatización industrial'
        },
        {
            icon: landIcon7,
            descrip:'Electricidad industrial'
        }
    ];

    const us = [
        {
            pic: landUs1,
            name: 'Arnaldo Dimuro',
            job: 'CEO'
        },
        {
            pic: landUs1,
            name: 'Franco Berrone',
            job: 'CEO'
        },
        {
            pic: landUs1,
            name: 'Danilo Quiroga',
            job: 'CEO'
        },
        {
            pic: landUs1,
            name: 'Patricio Pulitano',
            job: 'CEO'
        },
    ]

    return (
        <div className="landing">
            <Carousel fade className='landCarousel'>
                <Carousel.Item className='carouItem'>
                    <img
                        className="d-block w-100"
                        src={landing1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carouText'>
                        <p className='carouTitle'>Somos una empresa apasionada por lo que hacemos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouItem'>
                    <img
                        className="d-block w-100"
                        src={landing2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='carouText'>
                        <p className='carouTitle'>La innovación es nuestra premisa</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouItem'>
                    <img
                        className="d-block w-100"
                        src={landing3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='carouText'>
                        <p className='carouTitle'>Trabajamos para darle lo mejor a nuestros clientes</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="landArrow">
                <Image src={arrow} />
                <Image src={arrow} />
            </div>
            <div className="landArrow">
                <div className="landSeg">
                    <div className="landSegLeft">
                        <h3>AUTOMATIZACIÓN</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquam non illum, odio obcaecati numquam qui. Animi, sit a inventore dolores perspiciatis earum minima sunt quidem culpa atque aut commodi.</p>
                    </div>
                    <Image src={autom} />
                </div>
                <div className="landSeg">
                    <div className="landSegRight">
                        <h3>MECANIZACIÓN</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquam non illum, odio obcaecati numquam qui. Animi, sit a inventore dolores perspiciatis earum minima sunt quidem culpa atque aut commodi.</p>
                    </div>
                    <Image src={mecan} />
                </div>
            </div>
            <div className="landArrow">
                <Image src={arrow} />
                <Image src={arrow} />
            </div>
            <div className="landServices">
                <div className="landServText">
                    <h1 className='landServTitle'>Nuestros servicios</h1>
                    <p className='landServDescrip'>Somos una empresa joven en constante crecimiento que integra conocimientos de ingeniería, fabricación, construcción y mantenimiento</p>
                </div>
                <div className="landServIcons">
                    {
                        services.map ((service) =>
                            <ServiceCard 
                                icon={service.icon}
                                descrip={service.descrip}
                            />
                        )
                    }
                </div>
            </div>
            <div className="landArrow">
                <Image src={arrow} />
                <Image src={arrow} />
            </div>
            <div className="us">
                <h1 className="usTitle">Nosotros</h1>
                <div className="landUsCards">
                    {
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default Landing