import { useEffect, useState } from "react"
import { Button, Carousel, Image, Tab, Tabs, Modal } from "react-bootstrap"

import mech01 from '../img/mech01.png'
import mech02 from '../img/mech02.png'
import mech03 from '../img/mech03.png'
import industrial1 from '../img/industrial1.png'
import scada1 from '../img/scada1.png'
import elec1 from '../img/elec1.png'
import marlew from '../img/marlew.png'
import furukawa from '../img/furukawa.png'
import schneider from '../img/schneider.png'
import phoenix from '../img/phoenix.png'


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
        // Levanto las diferentes secciones
        const industrial = document.querySelector(`#justify-tab-example-tabpane-industrial`);
        const industrialTab = document.querySelector(`#justify-tab-example-tab-industrial`);
        const elec = document.querySelector(`#justify-tab-example-tabpane-elec`);
        // Identifico los encabezados de las distintas secciones
        const elecTab = document.querySelector(`#justify-tab-example-tab-elec`);
        const scada = document.querySelector(`#justify-tab-example-tabpane-scada`);
        const scadaTab = document.querySelector(`#justify-tab-example-tab-scada`);

        switch (sect) {
            case 'industrial':
                // Doy visualización a la pestaña seleccionada
                industrial.className = 'fade tabContent tab-pane active show';
                elec.className = 'fade tabContent tab-pane';
                scada.className = 'fade tabContent tab-pane';
                // Indico las pestañas cual debe mostrarse como activa
                industrialTab.className = 'nav-link active';
                elecTab.className = 'nav-link';
                scadaTab.className = 'nav-link';
                // Establezco la pestaña activa
                industrialTab.setAttribute('aria-selected', 'true');
                elecTab.setAttribute('aria-selected', 'false');
                scadaTab.setAttribute('aria-selected', 'false');
                break;
            case 'scada':
                // Doy visualización a la pestaña seleccionada
                industrial.className = 'fade tabContent tab-pane';
                elec.className = 'fade tabContent tab-pane';
                scada.className = 'fade tabContent tab-pane active show';
                // Indico las pestañas cual debe mostrarse como activa
                industrialTab.className = 'nav-link';
                elecTab.className = 'nav-link';
                scadaTab.className = 'nav-link active';
                // Establezco la pestaña activa
                industrialTab.setAttribute('aria-selected', 'false');
                elecTab.setAttribute('aria-selected', 'false');
                scadaTab.setAttribute('aria-selected', 'true');
                break;
            case 'elec':
                // Doy visualización a la pestaña seleccionada
                industrial.className = 'fade tabContent tab-pane';
                elec.className = 'fade tabContent tab-pane active show';
                scada.className = 'fade tabContent tab-pane';
                // Indico las pestañas cual debe mostrarse como activa
                industrialTab.className = 'nav-link';
                elecTab.className = 'nav-link active';
                scadaTab.className = 'nav-link';
                // Establezco la pestaña activa
                industrialTab.setAttribute('aria-selected', 'false');
                elecTab.setAttribute('aria-selected', 'true');
                scadaTab.setAttribute('aria-selected', 'false');
                break;
            default:
                break;
        }

        // Scroleo a la sección de pestañas
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };


    return (
        <div className="autom">
            <div className={animationDone ? "mechAnimation animCollapse" : "mechAnimation"}></div>
            <div className="automCarouselDiv">
                <Carousel fade className='automCarousel'>
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
                            src={mech02}
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
                                industrial y su creación requiere un análisis
                                sistémico y experiencia en diversos métodos de
                                ingeniería.</h6>
                            <Button className="sectionButton" onClick={() => scroll('pipe')}>Mas información...</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='automCarouItem'>
                        <img
                            className="d-block w-100"
                            src={mech03}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='automCarouText'>
                            <p className='automCarouTitle'>Mantenimiento Industrial</p>
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
            <div className="automDetail">
                <Tabs
                    defaultActiveKey="industrial"
                    id="justify-tab-example"
                    className="mb-3 tabTitle"
                    justify
                    variant="tabs"
                >
                    <Tab eventKey="tanks" title="Tanques & trabajos especiales" className="tabContent">
                        <Image src={industrial1} className='tabImage' />
                        <p> <strong>ProRecipientes de proceso y sistemas de agitación
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
                        <Image src={scada1} className='tabImage' />
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
                            especialmente para las industrias química,
                            petroquímica y de ciencias de la vida.</p>
                    </Tab>
                    <Tab eventKey="mant" title="Mantenimiento Industrial" className="tabContent">
                        <Image src={elec1} className='tabImage' />
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
            <div className="automProjects">
                <div className="automProj">
                    <div className="automProjImg auPrIm1"></div>
                    <div className="automProjImg auPrIm2"></div>
                    <div className="automProjCartel">
                        <h3 className="automProjTitle">Nuestros proyectos más importantes</h3>
                        <p className="automProjDescrip">Trabajando siempre para cumplir con la calidad en cada proyecto, poniendo prioridad en la necesidad el cliente.</p>
                    </div>
                    <div className="automProjImg auPrIm3"></div>
                    <div className="automProjImg auPrIm4"></div>
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