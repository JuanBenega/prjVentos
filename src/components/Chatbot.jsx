import { Image } from "react-bootstrap";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import chatbot from '../img/chatbot.png';
import avatarBot from '../img/avatarBot.png'

const Chatbot = () => {

    const styleFloat =
    {
        background: 'transparent',
        //bottom: '500'
    }

    const theme = {
        background: 'rgba(255, 255, 255, 0.6);',
        headerBgColor: 'linear-gradient(180deg, #E7E7E7 52.6%, rgba(217, 217, 217, 0.7) 69.79%, #B0B0B0 100%)',
        fontFamily: 'Poppins',
        headerFontWeight: '600',
        headerFontSize: '20px',
        botBubbleColor: '#13A3D9',
        headerFontColor: '#13A3D9',
        botFontSize: '36px',
        botFontColor: 'white',
        userBubbleColor: '#13A3D9',
        userFontColor: 'white',
    };


    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                floating={true}
                floatingIcon={<Image src={chatbot} />}
                floatingStyle={styleFloat}
                botAvatar={avatarBot}
                steps={[
                    {
                        id: '1',
                        message: 'What number I am thinking?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        options: [
                            { value: 1, label: 'Number 1', trigger: '4' },
                            { value: 2, label: 'Number 2', trigger: '3' },
                            { value: 3, label: 'Number 3', trigger: '3' },
                        ],
                    },
                    {
                        id: '3',
                        message: 'Wrong answer, try again.',
                        trigger: '2',
                    },
                    {
                        id: '4',
                        message: 'Awesome! You are a telepath!',
                        end: true,
                    },
                ]}
            />
            {/* <Image src={chatbot} onClick={handleChat} /> */}

        </ThemeProvider>
    )
}

export default Chatbot