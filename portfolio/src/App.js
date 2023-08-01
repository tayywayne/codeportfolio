import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import FriendForge from './projects/FriendForge';
import Portfolio from './projects/Portfolio';
import CarCar from './projects/CarCar';
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/friendforge" element={<FriendForge />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/projects/CarCar" element={<CarCar />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
