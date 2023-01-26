
import { Carousel, Image } from 'react-bootstrap'
import landing1 from '../img/landing1.jpg'
import landing2 from '../img/landing2.jpg'
import landing3 from '../img/landing3.jpg'
import arrow from '../img/landArrow.png'
import autom from '../img/landAutom.png'
import mecan from '../img/landMecan.png'


const Landing = () => {
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

                </div>
            </div>
        </div>
    )
}

export default Landing