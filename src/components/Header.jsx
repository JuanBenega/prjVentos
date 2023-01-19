import { Navbar, Nav, Image, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import logo from '../img/logo.png'
import locationIcon from '../img/locationIcon.svg'
import phoneIcon from '../img/phoneIcon.svg'

const Header = () => {

    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = event => {
            let scroll = window.scrollY;
            scroll >= 130 ? console.log("MAYOR"): console.log("MENOR");
            console.log(scroll);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <Navbar collapseOnSelect expand="lg" className="navClass" variant="dark" fixed="top">
            <div className="text Sup">
                <Image src={locationIcon} />
                <p>Perdriel 2875, La Tablada, Buenos Aires</p>
                <Image src={phoneIcon} />
                <p>(011) 15-41743095</p>
            </div>
            <Nav className="header">
                <Image src={logo} className="logoHeader"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="linkGroup">
                    <Nav >
                        <Nav.Link href="#features" className="link">Inicio</Nav.Link>
                        <Nav.Link href="#pricing" className="link">Nosotros</Nav.Link>
                        <Nav.Link href="#deets" className="link">Automatización</Nav.Link>
                        <Nav.Link href="#memes" className="link">Mecanización</Nav.Link>
                    </Nav>
                    <Button className="bContact">Contacto</Button>
                </Navbar.Collapse>
            </Nav>
            <Nav className="text Inf">
                <p>DEVELOPER INDUSTRIAL AUTOMATION</p>
            </Nav>

        </Navbar>
    )
}

export default Header