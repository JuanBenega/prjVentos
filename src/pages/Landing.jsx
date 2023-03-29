import { useNavigate } from "react-router-dom";
import { Carousel, Image } from 'react-bootstrap'
import ServiceCard from '../components/ServiceCard'
import UsCard from '../components/UsCard'

import landing1 from '../img/landing1.png'
import landing2 from '../img/landing2.png'
import landing3 from '../img/landing3.png'
import landing4 from '../img/landing4.png'
import landing5 from '../img/landing5.png'
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
import client1 from '../img/client1.png'
import client2 from '../img/client2.png'
import client3 from '../img/client3.png'
import ClientCard from '../components/ClientCard'
import Arrows from '../components/Arrows'


const Landing = () => {

    const navigate = useNavigate();
    const services = [
        {
            icon: landIcon1,
            descrip: 'Diseño e ingeniería'
        },
        {
            icon: landIcon2,
            descrip: 'Instalación y puesta en marcha'
        },
        {
            icon: landIcon3,
            descrip: 'Tanques y trabajos especiales'
        },
        {
            icon: landIcon4,
            descrip: 'Pipping y revamping'
        },
        {
            icon: landIcon5,
            descrip: 'Mantenimiento industrial'
        },
        {
            icon: landIcon6,
            descrip: 'Automatización industrial'
        },
        {
            icon: landIcon7,
            descrip: 'Electricidad industrial'
        }
    ];

    const us = [
        {
            pic: landUs1,
            name: 'Arnaldo Dimuro',
            job: 'CEO'
        },
        {
            pic: landUs2,
            name: 'Franco Berrone',
            job: 'Gerente San Luis'
        },
        {
            pic: landUs3,
            name: 'Nicolás Ortiz',
            job: 'Gerente Mendoza'
        },
        {
            pic: landUs4,
            name: 'Jorge Arias',
            job: 'Gerente Buenos Aires'
        },
    ]

    const clients = [
        {
            name: 'TERSUAVE',
            pic: client1,
            title: 'Nueva planta resinas',
            text: 'Ingeniería, diseño, desarrollo y montaje eléctrico/mecánico de nueva planta resinas. Fabricación de tableros, programación de PLC, HMI Y SCADA, fabricación de piping, montaje de equipos, puesta en marcha, y pruebas Villa Mercedes. 2022'
        },
        {
            name: 'TERSUAVE',
            pic: client1,
            title: 'Planta Tinters',
            text: 'Diseño de ingeniería, desarrollo de programación de PLC, HMI Y SCADA, fabricación de tableros. Fabricación de tanques de vacío, fabricación de piping, montaje de equipos. Montaje eléctrico/mecánico, puesta en marcha, y pruebas Villa Mercedes. 2021'
        },
        {
            name: 'DIASER',
            pic: client2,
            title: 'Actualización automatización',
            text: 'Actualización y reformas en su SCADA general de planta donde llevo un año de desarrollo con el equipo de producción. 2020'
        },
        {
            name: 'LABORATORIOS SL',
            pic: client3,
            title: 'Sistema de control de planta de polímeros',
            text: 'Instalación de tableros, programación de SCADA, HMI y PLC. Malvinas Argentinas. 2018'
        }
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
                        <h1>Somos una empresa Joven en constante crecimiento que
                            integra conocimientos de ingeniería, fabricación,
                            construcción y mantenimiento.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouItem'>
                    <img
                        className="d-block w-100"
                        src={landing2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='carouText'>
                        <h1>Nuestra Misión: crear valor recurrente para todas las partes interesadas
                            ofreciendo productos, servicios y soluciones industriales inteligentes y
                            sostenibles.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouItem'>
                    <img
                        className="d-block w-100"
                        src={landing4}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='carouText'>
                        <h1>Nos interesa descubrir y desarrollar con éxito equipos y procesos innovadores,
                            donde nuestro compromiso se vea reflejado en la rentabilidad de nuestro cliente.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouItem'>
                    <img
                        className="d-block w-100"
                        src={landing3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='carouText'>
                        <h1>Nuestros equipos de expertos en procesos nos respaldan para diseñar sus
                            instalaciones de producción, desde un solo equipo hasta la planta
                            completa llave en mano.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouItem'>
                    <img
                        className="d-block w-100"
                        src={landing5}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='carouText'>
                        <h1>Directamente en el sitio como en nuestros talleres ubicados
                            en Buenos Aires, San Luis y Mendoza, nos ocupamos de todos
                            sus trabajos de construcción industrial en general en nuevas
                            unidades o en extensión de unidades existentes.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="textMobile">
                <h2 className='carouTitle'>Somos una empresa Joven en constante crecimiento que
                            integra conocimientos de ingeniería, fabricación,
                            construcción y mantenimiento.</h2>
                <h5>Nuestra Misión: crear valor recurrente para todas las partes interesadas
                            ofreciendo productos, servicios y soluciones industriales inteligentes y
                            sostenibles.</h5>
            </div>
            <Arrows />
            <div className="landSegments">
                <div className="landSeg" onClick={() => navigate('/autom')}>
                    <div className="landSegLeft">
                        <h3>AUTOMATIZACIÓN</h3>
                        <p>Diseño, montaje, cableado y conexionado de plantas industriales <br />
                            Fabricación de tableros eléctricos de potencia y control. <br />
                            Programación de PLC, HMI <br />
                            Programación e implementación de sistemas SCADA</p>
                    </div>
                    <Image src={autom} fluid />
                </div>
                <div className="landSeg" onClick={() => navigate('/mecaniz')}>
                    <div className="landSegRight">
                        <h3>MECANIZACIÓN</h3>
                        <p>Fabricación de piping en Planta con soldadores certificados. <br />
                            Sistema TIG y convencional. <br />
                            Diseño y montaje de reactores para uso industrial, confeccionados en acero inoxidable. <br />
                            Diseño y fabricación de tanques en acero inoxidable. <br />
                        </p>
                    </div>
                    <Image src={mecan} fluid />
                </div>
            </div>
            <Arrows />
            <div className="landServices">
                <div className="landServText">
                    <h1 className='landServTitle'>Nuestros servicios</h1>
                    <p className='landServDescrip'>Somos una empresa joven en constante crecimiento que integra conocimientos de ingeniería, fabricación, construcción y mantenimiento</p>
                </div>
                <div className="landServIcons">
                    {
                        services.map((service) =>
                            <ServiceCard
                                icon={service.icon}
                                descrip={service.descrip}
                            />
                        )
                    }
                </div>
            </div>
            <Arrows />
            <div className="landUs">
                <h1 className="usTitle">Nosotros</h1>
                <div className="landUsCards">
                    {
                        us.map((person) =>
                            <UsCard
                                pic={person.pic}
                                name={person.name}
                                job={person.job}
                            />
                        )
                    }
                </div>
            </div>
            <Arrows />
            <div className="landClients">
                <h1 className="clientsTitle">Nuestros clientes</h1>
                <p className="clientsText">Confiaron y confían en nosotros, brindandosle el mejor servicio siempre</p>
                <div className="clientsCards">
                    {
                        clients.map((client) =>
                            <ClientCard
                                name={client.name}
                                pic={client.pic}
                                title={client.title}
                                text={client.text}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Landing