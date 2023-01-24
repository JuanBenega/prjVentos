import { Button } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';



import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <div className="App-header">
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default App;
