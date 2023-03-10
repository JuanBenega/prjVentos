import { useState } from 'react';
import { Offcanvas, Image, NavLink, OffcanvasTitle } from 'react-bootstrap';
import sidebar from '../img/sidebar.png'


const Sidebar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Image src={sidebar} onClick={handleShow} className={!show ? "sidebarBtn" : "hide"} />
            <Offcanvas show={show} onHide={handleClose} placement='end' className='sidebarCont'>
                <Offcanvas.Header closeButton>
                    <OffcanvasTitle></OffcanvasTitle>
                </Offcanvas.Header>
                <Offcanvas.Body className='sidebarText'>
                    <h5>Telefóno</h5>
                    <h6>Buenos aires: +54-911-6983-2386 (JORGE)</h6>
                    <h6>Mendoza: +54-92612-08-1375 (NICOLAS)</h6>
                    <h6>San Luis: +54-911-3112-9539 (FRANCO)</h6>
                    <br />
                    <h5>Redes sociales</h5>
                    <NavLink className='sidebarLink' target="_blank" href='https://www.facebook.com/profile.php?id=100083334182810'>Facebook: Ventos</NavLink>
                    <NavLink className='sidebarLink' target="_blank" href='https://www.instagram.com/ventos_oficial/'>Instagram: Ventos_oficial</NavLink>
                    <NavLink className='sidebarLink' target="_blank" href='https://www.youtube.com/@ventos_oficial'>Youtube: @Ventos_oficial</NavLink>
                    <NavLink className='sidebarLink' target="_blank" href='https://www.linkedin.com/company/ventoselect-s-r-l/'>Linkedin: Ventoselect-s-r-l</NavLink>
                    <br />
                    <h5>Correo electrónico</h5>
                    <NavLink className='sidebarLink' target="_blank" href='mailto:'>info@vnetos.com.ar</NavLink>
                    <NavLink className='sidebarLink' target="_blank" href='mailto:'>ventas@ventos.com.ar</NavLink>
                    <NavLink className='sidebarLink' target="_blank" href='mailto:'>administracion@ventos.com.ar</NavLink>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar