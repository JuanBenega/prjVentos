
import { Carousel, Image } from 'react-bootstrap'
import landing1 from '../img/landing1.jpg'
import landing2 from '../img/landing2.jpg'
import landing3 from '../img/landing3.jpg'
import arrow from '../img/landArrow.png'


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
        </div>
    )
}

export default Landing