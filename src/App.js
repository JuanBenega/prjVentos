import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './pages/Contact';
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
