import { Navbar } from 'react-bootstrap';
import Header from './components/Header';
import logo from './img/fondo.png';



import './styles/App.scss';

function App() {
  return (
    <>
        <Header />
      <div className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </>
  );
}

export default App;
