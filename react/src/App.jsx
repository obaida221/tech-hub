import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Learn from './components/Learn';
import Posts from './components/Posts';
import Header from './components/Header';
import Footer from './components/Footer';
import Experiments from './components/Experiments';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/experiments" element={<Experiments />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
