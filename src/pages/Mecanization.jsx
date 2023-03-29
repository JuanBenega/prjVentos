import { useEffect, useState } from "react"
import { Button, Carousel, Image, Tab, Tabs, OverlayTrigger, Popover } from "react-bootstrap"

import mech01 from '../img/mech01.png'
import mech02 from '../img/mech02.png'
import mech03 from '../img/mech03.png'
import mechMobile01 from '../img/mechMobile01.png'
import mechMobile02 from '../img/mechMobile02.png'
import mechMobile03 from '../img/mechMobile03.png'
import mechanical1 from '../img/mechanical1.png'
import mechanical2 from '../img/mechanical2.png'
import mechanical3 from '../img/mechanical3.png'
import marlew from '../img/marlew.png'
import furukawa from '../img/furukawa.png'
import schneider from '../img/schneider.png'
import phoenix from '../img/phoenix.png'
import coca from '../img/coca.png'
import uventech from '../img/uventech.png'
import idenor from '../img/idenor.png'
import jmb from '../img/jmb.png'
import hemoderivados from '../img/hemoderivados.png'
import later from '../img/later.png'
import paty from '../img/paty.png'
import prochem from '../img/prochem.png'


const Mecanization = () => {
    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        let timeAnimation = setTimeout(() => {
            setAnimationDone(true)

        }, 3000);

        return () => {
            clearTimeout(timeAnimation);
        }
    }, [])

    const scroll = (sect) => {
        // establezco la sección a visualizar
        const section = document.querySelector(`#justify-tab-example-tabpane-${sect}`);
        const sectionButton = document.querySelector(`#justify-tab-example-tab-${sect}`);
        // Scroleo a la sección de pestañas
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Simulo un click en la pestaña para mostrar la correspondiente
        sectionButton.click();


    };

    const popover = (title, text) => {
        return (
            <Popover id="popover-basic">
                <Popover.Header as="h3">{title}</Popover.Header>
                <Popover.Body>
                    {text}
                </Popover.Body>
            </Popover>
        )
    }


    return (
        <div className="autom">
            <div className={animationDone ? "mechAnimation animCollapse" : "mechAnimation"}></div>
            <div className="automCarouselDiv">
                <Carousel fade className='mechCarousel'>
                    <Carousel.Item className='automCarouItem'>
                        <img
                            className="d-block w-100"
                            src={mech01}
                            alt="First slide"
                        />
                        <Carousel.Caption className='automCarouText'>
                            <p className='automCarouTitle'>Tanques & trabajos especiales</p>
                            <h6>Desde el simple recipiente de
                                almacenamiento móvil hasta el reactor más
                                complejo, podemos satisfacer sus
                                necesidades en una amplia gama de tanques
                                con diferentes funciones y características
                                dependiendo del proceso o procesos que se
                                vayan a implementar y de sus requisitos
                                específicos.</h6>
                            <Button className="sectionButton" onClick={() => scroll('tanks')}>Mas información...</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='automCarouItem'>
                        <img
                            className="d-block w-100"
                            src={mech03}
                            alt="Second slide"
                        />
                        <Carousel.Caption className='automCarouText'>
                            <p className='automCarouTitle'>Pipping & Revamping</p>
                            <h6>Una instalación eficaz depende en gran medida
                                de su capacidad para transportar el fluido a
                                través del sistema de tuberías hasta los
                                distintos equipos que funcionan en conjunto.
                                Un sistema de tuberías bien diseñado es, por
                                tanto, crucial para cualquier instalación
                                de tanques y su creación requiere un análisis
                                sistémico y experiencia en diversos métodos de
                                ingeniería.</h6>
                            <Button className="sectionButton" onClick={() => scroll('pipe')}>Mas información...</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='automCarouItem'>
                        <img
                            className="d-block w-100"
                            src={mech02}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='automCarouText'>
                            <p className='automCarouTitle'>Mantenimiento industrial</p>
                            <h6>Nuestros equipos pueden asistir en el
                                mantenimiento, la reparación, la
                                modernización y la puesta en
                                conformidad legal de sus unidades de
                                producción para optimizar y
                                aumentar su rendimiento.</h6>
                            <Button className="sectionButton" onClick={() => scroll('mant')}>Mas información...</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="automCarouselDivMobile">
                <Carousel fade className='automCarouselMobile'>
                    <Carousel.Item className='automCarouItemMobile'>
                        <img
                            className="d-block w-100"
                            src={mechMobile01}
                            alt="First slide"
                        />
                        <Carousel.Caption className='automCarouTextMobile'>
                            <p className='automCarouTitleMobile' onClick={() => scroll('tanks')}>Tanques & trabajos especiales</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='automCarouItemMobile'>
                        <img
                            className="d-block w-100"
                            src={mechMobile02}
                            alt="Second slide"
                        />
                        <Carousel.Caption className='automCarouTextMobile'>
                            <p className='automCarouTitleMobile' onClick={() => scroll('pipe')}>Pipping & Revamping</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='automCarouItemMobile'>
                        <img
                            className="d-block w-100"
                            src={mechMobile03}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='automCarouTextMobile'>
                            <p className='automCarouTitleMobile' onClick={() => scroll('mant')}>Mantenimiento industrial</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="automDetail">
                <Tabs
                    defaultActiveKey="tanks"
                    id="justify-tab-example"
                    className="mb-3 tabTitle"
                    justify
                    variant="tabs"
                >
                    <Tab eventKey="tanks" title="Tanques & trabajos especiales" className="tabContent">
                        <Image src={mechanical1} className='tabImage' />
                        <p> <strong>Recipientes de proceso y sistemas de agitación
                            (con o sin intercambio de calor) </strong><br />
                            - Reactores
                            - Biorreactores<br />
                            - Fermentadores / Bio-fermentadores
                            - Tanques móviles<br />
                            - Tanques de preparación
                            - Fundidores y mezcladores<br />
                            - Cristalizadores
                            - Cocinas<br />
                            - Tanques de fermentación
                            - Maduradores<br />
                            - Tanques CIP
                            - Tanques ATEX<br />
                            - Cámaras de vacío
                            - Tanques de autoclave<br />
                            - Depósitos compartimentados
                            - Hornos, calderas<br />
                            - Tanques de ebullición
                            - Tanques de almacenamiento y mezcla (integración del proceso)<br />
                            - Tanques de almacenamiento
                            - Tanques de mezcla<br />
                            - Mobiliario en acero inoxidable
                            - Equipo sanitario( piletones, mesadas, mingitorio, etc.) en acero
                            inoxidable</p>
                    </Tab>
                    <Tab eventKey="pipe" title="Pipping & Revamping" className="tabContent">
                        <Image src={mechanical2} className='tabImage' />
                        <p> - El Revamping no es una simple alternativa a
                            una nueva instalación, sino una oferta a la
                            medida adaptada a la instalación existente.
                            Nos caracterizamos por tener una
                            experiencia probada en proyectos de
                            renovación.<br />
                            - Nuestros equipos pueden acompañarle, sea
                            cual sea su sector de actividad y las normas
                            vigentes o las limitaciones relativas a la
                            continuidad de su instalación.<br />
                            - Intervenimos en cualquier tipo de
                            proyecto, desde el simple Revamping de
                            equipos hasta la modernización completa
                            de su centro de producción. También
                            realizamos paradas de unidades,
                            especialmente para las industrias química y
                            petroquímica.</p>
                    </Tab>
                    <Tab eventKey="mant" title="Mantenimiento industrial" className="tabContent">
                        <Image src={mechanical3} className='tabImage' />
                        <p> <strong> Ofrecemos una serie de servicios de
                            estudio y diseño para garantizar el éxito
                            de sus proyectos con total seguridad y en
                            estricto cumplimiento de los reglamentos
                            y normas vigentes en sus industrias:</strong><br />
                            - Ingeniería de mantenimiento integrada
                            adaptada a cada contrato para el desarrollo
                            de una política de mantenimiento desde la
                            fase de diseño.<br />
                            - Contratos de mantenimiento preventivo y
                            correctivo personalizados para la mejora
                            continua de: la automatización, la ingeniería
                            eléctrica, la instrumentación, la mecánica y
                            las tuberías.<br />
                            - Servicios de mantenimiento: asistencia y
                            análisis de fallos, mantenimiento y revisión,
                            inspección y recalificación periódica.
                            Reparaciones mecánicas: análisis de
                            degradación, experiencia en el mecanizado,
                            recomendaciones de reparaciones y
                            mejoras.<br />
                            - Mantenimiento mecánico que incorpora
                            iniciativas de mejora continua.
                            Mantenimiento de tuberías para apoyar sus
                            redes de fluidos.<br />
                            - Mantenimiento en la empresa en general
                            para una consideración global.
                            Paradas importantes: contratos de parada o
                            de mantenimiento anual con una plantilla
                            media.
                        </p>
                    </Tab>
                </Tabs>
            </div>
            <div className="sectionProjects">
                <div className="sectionProj">
                    <div className="projRow projRowDesktop">
                        <OverlayTrigger
                            placement="top"
                            overlay={popover('Coca Cola', 'Instalación de sistema de osmosis inversa. Córdoba. 2023')}
                        >
                            <Image src={coca} className="sectionProjImg" fluid/>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={popover('Uventech', 'Instalación de equipos de aspirado de polvos. Bs As. 2022')}
                        >
                            <Image src={uventech} className="sectionProjImg" />
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={popover('Idenor', 'Fabricación de tanques de acero inoxidable certificados. Mendoza. 2023')}
                        >
                            <Image src={idenor} className="sectionProjImg" />
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={popover('JMB Ambientales', 'Instalación y puesta en marcha de planta procesadora de lodos. Santa Cruz. 2020')}
                        >
                            <Image src={jmb} className="sectionProjImg" />
                        </OverlayTrigger>
                    </div>
                    <div className="sectionProjCartel">
                        <h3 className="sectionProjTitle">Nuestros proyectos más importantes</h3>
                        <p className="sectionProjDescrip">Trabajando siempre para cumplir con la calidad en cada proyecto, poniendo prioridad en la necesidad el cliente.</p>
                    </div>
                    <div className="projRow projRowMobile">
                        <OverlayTrigger
                            placement="top"
                            overlay={popover('Coca Cola', 'Instalación de sistema de osmosis inversa. Córdoba. 2023')}
                        >
                            <Image src={coca} className="sectionProjImg" />
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={popover('Uventech', 'Instalación de equipos de aspirado de polvos. Bs As. 2022')}
                        >
                            <Image src={uventech} className="sectionProjImg" />
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={popover('Idenor', 'Fabricación de tanques de acero inoxidable certificados. Mendoza. 2023')}
                        >
                            <Image src={idenor} className="sectionProjImg" />
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={popover('JMB Ambientales', 'Instalación y puesta en marcha de planta procesadora de lodos. Santa Cruz. 2020')}
                        >
                            <Image src={jmb} className="sectionProjImg" />
                        </OverlayTrigger>
                    </div>

                    <div className="projRow">
                        <OverlayTrigger
                            placement="bottom"
                            overlay={popover('Laboratorio Hemoderivados', 'Provisión de elementos y equipos varios de acero inoxidable certificados. Córdoba. 2023')}
                        >
                            <Image src={hemoderivados} className="sectionProjImg" />
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={popover('Later-cer', 'Instalación de equipo de aspirado de polvos y montaje de cañerías de extracción. Bs As. 2022')}
                        >
                            <Image src={later} className="sectionProjImg" />
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={popover('Paty', 'Instalación de sistema de osmosis inversa. San Luis. 2022')}
                        >
                            <Image src={paty} className="sectionProjImg" />
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={popover('Prochem-bio', 'Instalación y montaje de conductos de acero inoxidable. Bs As. 2023')}
                        >
                            <Image src={prochem} className="sectionProjImg" />
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
            <div className="partners">
                <h3>Nuestros socios y proveedores</h3>
                <div className="partLogos">
                    <Image src={schneider} className='partImage' />
                    <Image src={phoenix} className='partImage' />
                    <Image src={marlew} className='partImage' />
                    <Image src={furukawa} className='partImage' />
                </div>
            </div>

        </div>
    )
}
export default Mecanization