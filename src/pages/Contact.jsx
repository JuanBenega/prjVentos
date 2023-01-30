import { Image } from 'react-bootstrap'
import mapa from '../img/mapa.png'
import locationPin from '../img/locationPin.png'
import contactPhone from '../img/contactPhone.png'
import contactGps from '../img/contactGps.png'
import contactMail from '../img/contactMail.png'

const Contact = () => {
    return (
        <div className="contact">
            <div className="map">
                <h1 className="contactTitle">Nos podés encontrar a través del país</h1>
                <h4 className="contactText">Somos una empresa en continua expansión</h4>
                <Image src={mapa} className='contactMap' />
                <div className="location1 tooltip">
                    <Image src={locationPin} />
                    <div className="right">
                        <Image src={contactGps} />
                        <h6>Perdriel 2875, La Tablada, Buenos Aires</h6>
                        <Image src={contactPhone} />
                        <h6>(011) 15-41743095</h6>
                        <Image src={contactMail} />
                        <h6>info@ventos.com.ar</h6>
                        <i></i>
                    </div>
                </div>
                <div className="location2 tooltip">
                    <Image src={locationPin} />
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
                {/* <Image src={locationPin} className='location2' /> */}
            </div>
        </div>
    )
}

export default Contact