import { Container, Navbar, Nav, Image, Button } from "react-bootstrap"
import logo from '../img/logo.png'
import locationIcon from '../img/locationIcon.svg'
import phoneIcon from '../img/phoneIcon.svg'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navClass" variant="dark" sticky="top">
            <div className="text Sup">
                <Image src={locationIcon} />
                <p>Perdriel 2875, La Tablada, Buenos Aires</p>
                <Image src={phoneIcon} />
                <p>(011) 15-41743095</p>
            </div>
            <Nav className="header">
                <Image src={logo} />
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