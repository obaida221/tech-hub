import { Link } from 'react-router-dom';
import '../App.css';

export default function Footer() {
  return (
    <footer className="section footer">
      <div className="footer-nav">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/learn">What I learned</Link>
      </div>
      <p>© 2025 Tech Hub</p>
    </footer>
  );
} 