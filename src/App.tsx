import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Menu from './components/menu/Menu';
import ScrollToTop from './components/scroll/ScrollToTop';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Cookies from './pages/cookies/Cookies';
import Events from './pages/events/Events';
import Home from './pages/home/Home';
import Privacity from './pages/privacity/Privacity';
import Terms from './pages/terms/Terms';
import './styles/global.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Menu /> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/aviso-de-privacidad" element={<Privacity />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terminos-y-condiciones" element={<Terms />} />
          <Route path="*" element={<h1>Page not found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
