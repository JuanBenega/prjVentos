import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Sidebar from './components/Sidebar';



import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
        <Sidebar />
        <Landing />
      <Footer />
    </>
  );
}

export default App;
