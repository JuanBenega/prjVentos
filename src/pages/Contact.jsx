import { Image, Nav } from 'react-bootstrap'

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


const Contact = () => {
    return (
        <div className="contact">
            <div className="map">
                <h1 className="contactTitle">Nos podés encontrar a través del país</h1>
                <h4 className="contactText">Somos una empresa en continua expansión</h4>
                <div className="location1 tooltip">
                    <Image src={locationPin} className='locationPin' />
                    <div className="right">
                        <Image src={contactGps} />
                        <h6>Perdriel 2875, La Tablada, Buenos Aires</h6>
                        <Image src={contactPhone} />
                        <h6>(011) 15-6983-2386</h6>
                        <Image src={contactMail} />
                        <h6>bsas@ventos.com.ar</h6>
                        <i></i>
                    </div>
                </div>
                <div className="location2 tooltip">
                    <Image src={locationPin} className='locationPin' />
                    <div className="right">
                        <Image src={contactGps} />
                        <h6>Arenales 872, Villa Mercedes, San Luis</h6>
                        <Image src={contactPhone} />
                        <h6>(011) 3112-9539</h6>
                        <Image src={contactMail} />
                        <h6>vm@ventos.com.ar</h6>
                        <i></i>
                    </div>
                </div>
                <div className="location3 tooltip">
                    <Image src={locationPin} className='locationPin' />
                    <div className="right">
                        <Image src={contactGps} />
                        <h6>Callejón Vidoza 55, Maipú, Mendoza</h6>
                        <Image src={contactPhone} />
                        <h6>(02612) 15-08-1375</h6>
                        <Image src={contactMail} />
                        <h6>mdz@ventos.com.ar</h6>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className="contactLinks">
                <div className="contactItem">
                    <h6 className='contactSocialTitle'>Seguinos</h6>
                    <Nav.Link className='contactSocialIcon' href='https://www.facebook.com/profile.php?id=100083334182810'><Image src={contactFace} /></Nav.Link>
                    <Nav.Link className='contactSocialIcon' href='https://www.instagram.com/ventos_oficial/'><Image src={contactInst} /></Nav.Link>
                    <Nav.Link className='contactSocialIcon' href=''><Image src={contactTwit} /></Nav.Link>
                    <Nav.Link className='contactSocialIcon' href='https://www.linkedin.com/company/ventoselect-s-r-l/'><Image src={contactLinkedin} /></Nav.Link>
                </div>
                <div className="contactItem">
                    <Image src={contactLinkPhone} />
                    <h6>(011) 15-6983-2386</h6>
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