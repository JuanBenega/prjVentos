
import { Carousel } from 'react-bootstrap'
import landing1 from '../img/landing1.jpg'
import landing2 from '../img/landing2.jpg'
import landing3 from '../img/landing3.jpg'


const Landing = () => {
    return (
        <div className="landing">
            <Carousel className='landCarousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={landing1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={landing2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={landing3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Landing