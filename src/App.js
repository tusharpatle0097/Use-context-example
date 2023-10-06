import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UseContextCall from './context/UseContextCall'

function App() {
  return (
    <div className="App">
      <UseContextCall>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </UseContextCall>
    </div>
  );
}

export default App;
