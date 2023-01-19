import { Navbar, Nav, Image, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import logo from '../img/logo.png'
import logoDesarm from '../img/logoDesarm.png'
import locationIcon from '../img/locationIcon.svg'
import phoneIcon from '../img/phoneIcon.svg'

const Header = () => {

    //const [scrollY, setScrollY] = useState(false);
    //const styleSup = "text Sup", styleInf = "text Inf";

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
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
            <Nav className={offset < 130 ? "header" : "header thin"}>
                <Image src={offset < 130 ? logo : logoDesarm} className={offset < 130 ? "logoHeader" : "logoHeader simple"} />
                {/* <div className="logoHeader"></div> */}
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