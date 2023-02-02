
import { Carousel, Image } from 'react-bootstrap'
import ServiceCard from '../components/ServiceCard'
import UsCard from '../components/UsCard'

import landing1 from '../img/landing1.jpg'
import landing2 from '../img/landing2.jpg'
import landing3 from '../img/landing3.jpg'
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
            job: 'CEO'
        },
        {
            pic: landUs3,
            name: 'Danilo Quiroga',
            job: 'CEO'
        },
        {
            pic: landUs4,
            name: 'Patricio Pulitano',
            job: 'CEO'
        },
    ]

    const clients = [
        {
            name: 'CARREFOUR',
            pic: client1,
            title: 'Automatización en depósitos',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis veniam ab sint laboriosam quos amet inventore magnam cumque. Dolores eos veniam doloribus qui reiciendis, blanditiis vitae dolore perferendis quod.'
        },
        {
            name: 'COLOSHOP',
            pic: client2,
            title: 'Fabrica de llave en mano',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis veniam ab sint laboriosam quos amet inventore magnam cumque. Dolores eos veniam doloribus qui reiciendis, blanditiis vitae dolore perferendis quod.'
        },
        {
            name: 'FARMACITY',
            pic: client3,
            title: 'Adecuación tableros eléctricos',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis veniam ab sint laboriosam quos amet inventore magnam cumque. Dolores eos veniam doloribus qui reiciendis, blanditiis vitae dolore perferendis quod.'
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
                        <h4>Desarrollamos nuevos sistemas de automatizacion y mecanica para empresas relacionadas al rubro industrial con toda la tecnologia de vanguardia </h4>
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
            <div className="textMobile">
                <h2 className='carouTitle'>Somos una empresa apasionada por lo que hacemos</h2>
                <h5>Desarrollamos nuevos sistemas de automatizacion y mecanica para empresas relacionadas al rubro industrial con toda la tecnologia de vanguardia </h5>
            </div>
            <Arrows />
            <div className="landSegments">
                <div className="landSeg">
                    <div className="landSegLeft">
                        <h3>AUTOMATIZACIÓN</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquam non illum, odio obcaecati numquam qui. Animi, sit a inventore dolores perspiciatis earum minima sunt quidem culpa atque aut commodi.</p>
                    </div>
                    <Image src={autom} fluid />
                </div>
                <div className="landSeg">
                    <div className="landSegRight">
                        <h3>MECANIZACIÓN</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquam non illum, odio obcaecati numquam qui. Animi, sit a inventore dolores perspiciatis earum minima sunt quidem culpa atque aut commodi.</p>
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