import { Navbar, Nav, Image, Button, Container } from "react-bootstrap"
import { useEffect, useState } from "react";
import logo from '../img/logo.png'
import logoDesarm from '../img/logoDesarm.png'
import locationIcon from '../img/locationIcon.svg'
import phoneIcon from '../img/phoneIcon.svg'

const Header = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <Navbar collapseOnSelect expand="lg" className="navClass" variant="dark" fixed="top">
            {offset < 130
                ? <div className="text Sup">
                    <Image src={locationIcon} />
                    <p>Perdriel 2875, La Tablada, Buenos Aires</p>
                    <Image src={phoneIcon} />
                    <p>(011) 15-41743095</p>
                </div>
                : <div className="blackDiv"></div>
            }
            
            <Container fluid className={offset < 130 ? "header" : "header thin"}>
                <Image src={offset < 130 ? logo : logoDesarm} className={offset < 130 ? "logoHeader" : "logoHeader simple"} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bMenu"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="group">
                    <Nav className="linkGroup">
                        <Nav.Link href="#features" className="link">Inicio</Nav.Link>
                        <Nav.Link href="#deets" className="link">Automatización</Nav.Link>
                        <Nav.Link href="#memes" className="link">Mecanización</Nav.Link>
                        <Button className="bContact">Contacto</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {offset < 130
                ? <div className="text Inf">
                    <p>DEVELOPER INDUSTRIAL AUTOMATION</p>
                </div>
                : <div className="blackDiv"></div>
            }

        </Navbar>
    )
}

export default Header