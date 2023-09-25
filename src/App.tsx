import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Events from './pages/events/Events';
import Home from './pages/home/Home';
import './styles/global.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
