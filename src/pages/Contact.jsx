import { Image, Nav } from 'react-bootstrap'


import mapa from '../img/mapa.png'
import locationPin from '../img/locationPin.png'
import contactPhone from '../img/contactPhone.png'
import contactGps from '../img/contactGps.png'
import contactMail from '../img/contactMail.png'
import contactFace from '../img/contactFace.png'
import contactInst from '../img/contactInst.png'
import contactTwit from '../img/contactTwit.png'
import contactLinkedin from '../img/contactLinkedin.png'
import contactLinkGps from '../img/contactLinkGps.png'
import contactLinkPhone from '../img/contactLinkPhone.png'
import { NavLink } from 'react-router-dom'


const Contact = () => {
    return (
        <div className="contact">
            <div className="map">
                <h1 className="contactTitle">Nos podés encontrar a través del país</h1>
                <h4 className="contactText">Somos una empresa en continua expansión</h4>
                {/* <Image src={mapa} className='contactMap' /> */}
                <div className="location1 tooltip">
                    <Image src={locationPin} className='locationPin'/>
                    <div className="right">
                        <Image src={contactGps} />
                        <h6>Perdriel 2875, La Tablada, Buenos Aires</h6>
                        <Image src={contactPhone} />
                        <h6>(011) 15-4174-3095</h6>
                        <Image src={contactMail} />
                        <h6>info@ventos.com.ar</h6>
                        <i></i>
                    </div>
                </div>
                <div className="location2 tooltip">
                    <Image src={locationPin} className='locationPin'/>
                    <div className="right">
                        <Image src={contactGps} />
                        <h6>Arenales 872, Villa Mercedes, San Luis</h6>
                        <Image src={contactPhone} />
                        <h6>(011) 15-41743095</h6>
                        <Image src={contactMail} />
                        <h6>abc@ventos.com.ar</h6>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className="contactLinks">
                <div className="contactItem">
                    <h6>Seguinos</h6>
                    <Nav.Link href='https://www.facebook.com/profile.php?id=100083334182810'><Image src={contactFace} /></Nav.Link>
                    <Nav.Link href='https://www.instagram.com/ventos_oficial/'><Image src={contactInst} /></Nav.Link>
                    <Nav.Link href=''><Image src={contactTwit} /></Nav.Link>
                    <Nav.Link href='https://www.linkedin.com/company/ventoselect-s-r-l/'><Image src={contactLinkedin} /></Nav.Link>
                </div>
                <div className="contactItem">
                    <Image src={contactLinkPhone} />
                    <h6>(011) 15-4174-3095</h6>
                </div>
                <div className="contactItem2">
                <Image src={contactLinkGps} />
                    <h6>Perdriel 2875, La Tablada, Buenos Aires</h6>
                </div>
            </div>
        </div>
    )
}

export default Contact