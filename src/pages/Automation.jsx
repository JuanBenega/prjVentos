import { useEffect, useState } from "react"
import { Button, Carousel, Image, Tab, Tabs } from "react-bootstrap"

import autoAnimation from '../img/autoAnimation.gif'
import autom01 from '../img/autom01.png'
import autom02 from '../img/autom02.png'
import autom03 from '../img/autom03.png'
import industrial1 from '../img/industrial1.png'
import scada1 from '../img/scada1.png'
import elec1 from '../img/elec1.png'


const Automation = () => {

    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        let timeAnimation = setTimeout(() => {
            setAnimationDone(true)

        }, 3000);

        return () => {
            clearTimeout(timeAnimation);
        }
    }, [])



    return (
        <div className="autom">
            <div className={animationDone ? "automAnimation animCollapse" : "automAnimation"}></div>
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
                    defaultActiveKey="industrial"
                    id="justify-tab-example"
                    className="mb-3 tabTitle"
                    justify
                    variant="tabs"
                >
                    <Tab eventKey="industrial" title="AUTOMATIZACION INDUSTRIAL" className="tabContent">
                        <Image src={industrial1} className='tabImage' />
                        <p> <strong>Proveemos soluciones llave en mano en Automatización de
                            máquinas y Procesos incluyendo la ingeniería. </strong><br />
                            - Provisión e integración de materiales. <br />
                            - Desarrollos de software para PLC, HMI y SCADA. <br />
                            - Desarrollo de planos. <br />
                            - Armado de tableros de control y puesta en servicio. <br />
                            <strong>Ofrecemos toda nuestra experiencia para realizar el diseño y la
                                implementación de circuitos electrónicos en general:</strong> <br />
                            - Sistemas de medición y adquisición de datos. <br />
                            - Acondicionamiento de señal <br />
                            - Manejo de entradas y salidas analógicas y digitales, fuentes de
                            alimentación, etc. <br />
                            Realizamos también el mantenimiento preventivo y la reparación
                            de sistemas de control basados en PC, PLC o micro procesados. <br />
                            <strong>Diseño y Desarrollo de máquinas automáticas y
                                desarrollo de proyectos electrónicos </strong><br />
                            - Ampliaciones o modificaciones de instalaciones y equipos
                            existentes. <br />
                            - Máquinas para procesos industriales. <br />
                            - Soluciones ingeniosas con estudio de alternativas que
                            buscan la eficiencia energética y la incorporación del
                            concepto de seguridad y ergonomía desde el diseño
                            básico, dirigiendo los proyectos hacia la mejor combinación
                            técnico-económica.</p>
                    </Tab>
                    <Tab eventKey="sacada" title="CONTROL DE PROCESOS - SISTEMA SCADA" className="tabContent">
                        <Image src={scada1} className='tabImage' />
                        <p> - Los sistemas SCADA (Supervisión, Control y
                            Adquisición de Datos) que implementamos son la mejor
                            alternativa para las industrias. A través de interfaces
                            gráficas, centralizan la información para que sea
                            accesible a todos los niveles organización en tiempo
                            real. <br />
                            - La automatización de procesos industriales es hoy la
                            mejor forma de evitar riesgos en la cadena de
                            producción. <br />
                            Contamos con todas las soluciones para que las
                            industrias se desarrollen y crezcan al ritmo del mercado.
                            Nos comprometemos con la seguridad de nuestros
                            clientes y tenemos las herramientas para hacerla
                            efectiva.</p>
                    </Tab>
                    <Tab eventKey="elec" title="ELECTRICIDAD INDUSTRIAL" className="tabContent">
                        <Image src={elec1} className='tabImage' />
                        <p><strong> Ingeniería</strong> <br />
                            • Ingeniería de nuevas instalaciones <br />
                            • Cálculo de selectividad y protecciones<br />
                            • Desarrollo de automatizaciones<br />
                            • Planos y Documentación del proyecto<br />
                            <strong> Montajes</strong> <br />
                            • Montaje de FM en Líneas de producción<br />
                            • Instalaciones en baja y media tensión<br />
                            • Sistemas de Iluminación interior y extreriorv
                            • Montajes de sistemas de Detección de Incendio,
                            Control de Acceso, Voz y Datos.<br />
                            <strong>Tableros</strong> <br />
                            • Diseño, construcción y montaje de tableros a medida.<br />
                            • Tableros de control y potencia<br />
                            • Tableros Generales de Baja Tensión<br />
                            • Tableros de transferencia con grupos electrógenos y
                            UPS.<br />
                            <strong>Mantenimiento</strong> <br />
                            • Medición de puesta a Tierra según SRT Res. 900/15<br />
                            • Termografías<br />
                            • Mto Iluminación<br />
                            • Calidad de Energía<br />
                            • Servicio Técnico Grupos Electrógenos<br />
                            • Mto UPS</p>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Automation