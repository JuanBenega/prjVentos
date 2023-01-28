import { Image } from 'react-bootstrap'
import mapa from '../img/mapa.png'
import locationPin from '../img/locationPin.png'

const Contact = () => {
    return (
        <div className="contact">
            <div className="map">
                <h1 className="contactTitle">Nos podés encontrar a través del país</h1>
                <h4 className="contactText">Somos una empresa en continua expansión</h4>
                <Image src={mapa} className='contactMap' />
                <Image src={locationPin} className='location1' />
                <Image src={locationPin} className='location2' />
            </div>
        </div>
    )
}

export default Contact