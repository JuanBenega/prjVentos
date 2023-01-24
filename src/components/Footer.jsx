import { Image, NavLink } from "react-bootstrap"
import logoFooter from '../img/logoFooter.png'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import youtube from '../img/youtube.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="groupFooter">
                <div>
                    <Image src={logoFooter} className='imgFooter' />
                    <h6>@Ventos.com</h6>
                </div>
                <div className="linksFooter">
                    <NavLink className="linkFoot">Inicio</NavLink>
                    <NavLink className="linkFoot">Automatización</NavLink>
                    <NavLink className="linkFoot">Mecanización</NavLink>
                    <NavLink className="linkFoot">Contacto</NavLink>
                </div>
                <div className="contactFooter">
                    <h5>Contactanos</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic dolorem nobis in ullam quibusdam magni quae quos quas, dolores natus modi, consectetur deserunt placeat ipsam, quis laboriosam expedita labore.</p>
                </div>
                <div>
                    <Image src={facebook}></Image>
                    <Image src={instagram}></Image>
                    <Image src={youtube}></Image>
                    <Image src={linkedin}></Image>
                </div>
            </div>
            <p className="firmFooter">Copyright ® 2023 Company All rights Recerved</p>
        </div>
    )
}

export default Footer