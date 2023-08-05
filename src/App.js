import { HashRouter, Route, Routes } from 'react-router-dom';

import Contact from './pages/Contact';
import Automation from './pages/Automation';
import Mecanization from './pages/Mecanization';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import Sidebar from './components/Sidebar';



import './styles/App.scss';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <HashRouter >
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path='/' Component={Landing} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path='/autom' Component={Automation} />
        <Route exact path='/mecaniz' Component={Mecanization} />
      </Routes>
      <Chatbot />
      <Footer />
    </HashRouter>
  );
}

export default App;
