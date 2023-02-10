import { Carousel } from "react-bootstrap"

import autom01 from '../img/autom01.png'

const Automation = () => {
    return (
        <div className="autom">
            <div className="automAnimation">

            </div>
            <div className="automCarouselDiv">
                <Carousel fade className='automCarousel'>
                    <Carousel.Item className='automCarouItem'>
                        <img
                            className="d-block w-100"
                            src={autom01}
                            alt="First slide"
                        />
                        <Carousel.Caption className='automCarouText'>
                            <p className='automCarouTitle'>Somos una empresa apasionada por lo que hacemos</p>
                            <h4>Desarrollamos nuevos sistemas de automatizacion y mecanica para empresas relacionadas al rubro industrial con toda la tecnologia de vanguardia </h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='automCarouItem'>
                        <img
                            className="d-block w-100"
                            src={autom01}
                            alt="Second slide"
                        />
                        <Carousel.Caption className='automCarouText'>
                            <p className='automCarouTitle'>La innovación es nuestra premisa</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='automCarouItem'>
                        <img
                            className="d-block w-100"
                            src={autom01}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='automCarouText'>
                            <p className='automCarouTitle'>Trabajamos para darle lo mejor a nuestros clientes</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Automation