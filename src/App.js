import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './pages/Contact';
import Automation from './pages/Automation';
import Mecanization from './pages/Mecanization';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import Sidebar from './components/Sidebar';



import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/autom' element={<Automation />} />
        <Route path='/mecaniz' element={<Mecanization />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
