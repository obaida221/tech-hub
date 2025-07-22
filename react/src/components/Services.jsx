import Header from './Header';
import Footer from './Footer';
import '../App.css';

export default function Services() {
  return (
    <>
      <Header />
      <section className="section">
        <h2>Our Services</h2>
        <ul>
          <li>Web dev</li>
          <li>App dev</li>
          <li>CYS</li>
        </ul>
      </section>
      <Footer />
    </>
  );
} 