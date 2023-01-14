import { Container, Navbar, Nav, Image, Button } from "react-bootstrap"
import logo from '../img/logo.png'


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="header" bg="dark" variant="dark" sticky="top">
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
            </Navbar>
        </>
    )
}

export default Header