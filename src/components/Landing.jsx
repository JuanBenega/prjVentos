
import { Carousel } from 'react-bootstrap'
import landing1 from '../img/landing1.jpg'
import landing2 from '../img/landing2.jpg'
import landing3 from '../img/landing3.jpg'


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
                        <h1>Somos una empresa apasionada por lo que hacemos</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouItem'>
                    <img
                        className="d-block w-100"
                        src={landing2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='carouText'>
                        <h1>La innovación es nuestra premisa</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouItem'>
                    <img
                        className="d-block w-100"
                        src={landing3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='carouText'>
                        <h1>Crecemos cuando crecen nuestros clientes</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Landing