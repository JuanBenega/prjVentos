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
                    <NavLink href="/">
                        <Image src={logoFooter} className='imgFooter' />
                    </NavLink>
                    <h6>@Ventos.com</h6>
                </div>
                <div className="linksFooter">
                    <NavLink className="linkFoot" href="/">Inicio</NavLink>
                    <NavLink className="linkFoot" href="/autom">Automatización</NavLink>
                    <NavLink className="linkFoot" href="/mecaniz">Mecanización</NavLink>
                    <NavLink className="linkFoot" href="/contact">Contacto</NavLink>
                </div>
                <div className="contactFooter">
                    <h5 className="contactFooterTitle">Contactanos</h5>
                    <p>Perdriel 2875, La Tablada, Buenos Aires</p>
                    <p>(011) 15-4174-3095</p>
                </div>
                <div className="socialFooter">
                    <NavLink className="footerSocialIcon" href="https://www.facebook.com/profile.php?id=100083334182810" target="_blank"><Image src={facebook} /></NavLink>
                    <NavLink className="footerSocialIcon" href="https://www.instagram.com/ventos_oficial/" target="_blank"><Image src={instagram} /></NavLink>
                    <NavLink className="footerSocialIcon" href="" target="_blank"><Image src={youtube} /></NavLink>
                    <NavLink className="footerSocialIcon" href="https://www.linkedin.com/company/ventoselect-s-r-l/" target="_blank"><Image src={linkedin} /></NavLink>

                </div>
            </div>
            <p className="firmFooter">Copyright ® 2023 Company All rights Recerved</p>
        </div>
    )
}

export default Footer