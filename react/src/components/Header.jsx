import { Link } from 'react-router-dom';
import logo from '../assets/tech hub logo-01.png';
import '../App.css';

export default function Header() {
  return (
    <header className="section header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div>TECH HUB</div>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/learn">What I learned</Link>
      </nav>
    </header>
  );
} 