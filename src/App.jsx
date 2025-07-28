import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Learn from './components/Learn';
import Posts from './components/Posts';
// import PostDetail from './components/PostDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Experiments from './components/Experiments';
import Todo from './components/Todo';
import Users from './components/Users';
import './App.css';



function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="learn" element={<Learn />} />
          <Route path="posts" element={<Posts />}>
            <Route path=":id" element={<Posts />} />
          </Route>

          <Route path="experiments" element={<Experiments />} />
          <Route path="todo" element={<Todo />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
