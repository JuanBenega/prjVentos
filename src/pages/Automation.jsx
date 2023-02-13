import { Button, Carousel, Image, Tab, Tabs } from "react-bootstrap"

import autoAnimation from '../img/autoAnimation.gif'
import autom01 from '../img/autom01.png'
import autom02 from '../img/autom02.png'
import autom03 from '../img/autom03.png'


const Automation = () => {
    return (
        <div className="autom">
            <div className="automAnimation">
                <Image src={autoAnimation} />
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
                            <p className='automCarouTitle'>Automatización Industrial</p>
                            <h6>Nos enfocamos en la implementación de soluciones
                                originales de automatización Industrial e Industria
                                4.0. Resolvemos los problemas de forma rápida y
                                eficaz, manteniendo el mejor costo-beneficio para
                                nuestros clientes.</h6>
                            <Button className="sectionButton">Mas información...</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='automCarouItem'>
                        <img
                            className="d-block w-100"
                            src={autom02}
                            alt="Second slide"
                        />
                        <Carousel.Caption className='automCarouText'>
                            <p className='automCarouTitle'>Control de Procesos – Sistemas SCADA
                                Automatización de Procesos Industriales</p>
                            <h6>Nuestros sistemas posibilitan la integración y la
                                comunicación de todos los procesos industriales a
                                través de dispositivos que controlan la lógica del
                                funcionamiento de la maquina / planta / Pulse y
                                displays proceso</h6>
                            <Button className="sectionButton">Mas información...</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='automCarouItem'>
                        <img
                            className="d-block w-100"
                            src={autom03}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='automCarouText'>
                            <p className='automCarouTitle'>Electricidad Industrial</p>
                            <h6>Contamos con profesionales con vasta experiencia
                                en el rubro eléctrico, abarcando un amplio espectro
                                en servicio de Ingeniería, instalación, montaje y
                                automatización complementando la actividad
                                ofreciendo mantenimiento preventivo y correctivo.</h6>
                            <Button className="sectionButton">Mas información...</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="automDetail">
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="home" title="Automatización Industrial">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id consequatur, explicabo perferendis harum modi, a facilis, praesentium labore ipsum distinctio autem ad ipsam laborum aliquam maiores! Deleniti, porro quis.</p>
                    </Tab>
                    <Tab eventKey="profile" title="Control de Procesos – Sistemas SCADA">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id consequatur, explicabo perferendis harum modi, a facilis, praesentium labore ipsum distinctio autem ad ipsam laborum aliquam maiores! Deleniti, porro quis.</p>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Electricidad Industrial">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id consequatur, explicabo perferendis harum modi, a facilis, praesentium labore ipsum distinctio autem ad ipsam laborum aliquam maiores! Deleniti, porro quis.</p>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Automation