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
                        <h5>Perdriel 2875, La Tablada, Buenos Aires</h5>
                        <Image src={contactPhone} />
                        <h5>(011) 15-41743095</h5>
                        <Image src={contactMail} />
                        <h5>abc@ventos.com.ar</h5>
                        <i></i>
                    </div>
                </div>
                {/* <Image src={locationPin} className='location2' /> */}
            </div>
        </div>
    )
}

export default Contact