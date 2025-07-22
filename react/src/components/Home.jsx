import  { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import courseImg from '../assets/course.jpeg';
import projectImg from '../assets/project.jpg';
import communityImg from '../assets/community.png';
import '../App.css';


export default function Home() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <section className="section hero">
        <h1>Welcome to Tech Hub</h1>
        <p>Your Gateway to Technology Learning</p>
        <a className="cta-button" href="#">Join Tech Hub</a>
      </section>
      <div style={{ margin: '20px 0', fontWeight: 'bold' }}>
        Timer: {seconds} second{seconds !== 1 ? 's' : ''} elapsed
      </div>
      <main className="section main">
        <div className="cards">
          <div className="card">
            <img src={courseImg} alt="Courses" />
            <h3>Courses</h3>
            <p>Learn programming and tech skills</p>
          </div>
          <div className="card">
            <img src={projectImg} alt="Projects" />
            <h3>Projects</h3>
            <p>Build real-world applications</p>
          </div>
          <div className="card">
            <img src={communityImg} alt="Community" />
            <h3>Community</h3>
            <p>Connect with tech enthusiasts</p>
          </div>
        </div>
        
      </main>
      
      <Footer />
    </>
  );
} 