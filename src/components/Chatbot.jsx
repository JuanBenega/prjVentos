import { Image, Nav } from "react-bootstrap";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import chatbot from '../img/chatbot.png';
import avatarBot from '../img/avatarBot.png'

const Chatbot = () => {

  const styleFloat =
  {
    background: 'transparent',
  }


  const theme = {
    background: 'rgba(255, 255, 255, 0.6);',
    headerBgColor: 'linear-gradient(180deg, #E7E7E7 52.6%, rgba(217, 217, 217, 0.7) 69.79%, #B0B0B0 100%)',
    fontFamily: 'Poppins',
    headerFontWeight: '600',
    headerFontSize: '20px',
    botBubbleColor: '#13A3D9',
    headerFontColor: '#13A3D9',
    botFontColor: 'white',
    userBubbleColor: '#13A3D9',
    userFontColor: 'white',
  };



  const steps = [
    {
      id: '1',
      message: 'Hola, soy tu asistente Ventos y estoy para ayudarte',
      trigger: '2',
    },
    {
      id: '2',
      message: '¿Cuál es tu nombre?',
      trigger: '3',
    },
    {
      id: '3',
      user: true,
      trigger: '4',
    },
    {
      id: '4',
      message: 'Es un gusto saludarte {previousValue}',
      trigger: '5',
    },
    {
      id: '5',
      message: 'Por favor elegí una opción para que pueda ayudarte',
      trigger: '6',
    },
    {
      id: '6',
      options: [
        { value: 1, label: 'Conocer Ventos', trigger: '7' },
        { value: 2, label: 'Servicios de Automatización', trigger: '8' },
        { value: 3, label: 'Servicios de Mecanización', trigger: '11' },
        { value: 4, label: 'Contactarme', trigger: 'contact' },
      ],
    },
    {
      id: '7',
      message: 'Ventos es una empresa pensada y creada para innovar en soluciones tecnológicas para la industria.',
      trigger: '5',
    },
    {
      id: '8',
      message: 'Los servicios de Automatización que brindamos son: Automatización Industrial, Control de procesos a través del sistema SCADA y Electricidad Industrial',
      trigger: '9',
    },
    {
      id: '9',
      message: 'Si querés información ampliada hacé click abajo',
      trigger: '10',
    },
    {
      id: '10',
      component: <Nav.Link href="/autom" className="link">Automatización</Nav.Link>,
      trigger: '5',
    },
    {
      id: '11',
      message: 'Los servicios de Automatización que brindamos son: Tanques y trabajos especioales, Pipping & Revamping y Mantenimiento Industrial',
      trigger: '12',
    },
    {
      id: '12',
      message: 'Si querés información ampliada hacé click abajo',
      trigger: '13',
    },
    {
      id: '13',
      component: <Nav.Link href="/mecaniz" className="link">Mecanización</Nav.Link>,
      trigger: '5',
    },
    {
      id: 'contact',
      message: 'Ayudame a darte la mejor solución, de que zona estás más cerca:',
      trigger: 'zoneContact',
    },
    {
      id: 'zoneContact',
      options: [
        { value: 1, label: 'Buenos Aires', trigger: 'contactBA' },
        { value: 2, label: 'Mendoza', trigger: 'contactMEN' },
        { value: 3, label: 'San Luis', trigger: 'contactSL' },
      ],
    },
    {
      id: 'contactBA',
      message: 'Nuestro contacto en Buenos Aires es Jorge, Cel: +54-911-6983-2386',
      trigger: 'baWhatsapp',
    },
    {
      id: 'baWhatsapp',
      component: <Nav.Link href="https://wa.me/541169832386" target='_blank'>Hablá con él por WhatsApp</Nav.Link>,
      trigger: '5',
    },
    {
      id: 'contactMEN',
      message: 'Nuestro contacto en Buenos Aires es Nicolás, Cel: +54-92612-08-1375',
      trigger: 'menWhatsapp',
    },
    {
      id: 'menWhatsapp',
      component: <Nav.Link href="https://wa.me/5492612081375" target='_blank'>Hablá con él por WhatsApp</Nav.Link>,
      trigger: '5',
    },
    {
      id: 'contactSL',
      message: 'Nuestro contacto en Buenos Aires es Franco, Cel: +54-911-3112-9539',
      trigger: 'slWhatsapp',
    },
    {
      id: 'slWhatsapp',
      component: <Nav.Link href="https://wa.me/541131129539" target='_blank'>Hablá con él por WhatsApp</Nav.Link>,
      trigger: '5',
    },
  ]


  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        floating={true}
        floatingIcon={<Image src={chatbot} />}
        floatingStyle={styleFloat}
        botAvatar={avatarBot}
        steps={steps}
        headerTitle='Chat Ventos'
        placeholder='Escribí acá'
        width='400px'
      />
    </ThemeProvider>
  )
}

export default Chatbot