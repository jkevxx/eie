import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/scroll/ScrollToTop';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import BlogDetail from './pages/blogDetail/BlogDetail';
import Contact from './pages/contact/Contact';
import Cookies from './pages/cookies/Cookies';
import Events from './pages/events/Events';
import Home from './pages/home/Home';
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms';
import './styles/global.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleId" element={<BlogDetail />} />

          <Route path="/contacto" element={<Contact />} />
          <Route path="/aviso-de-privacidad" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terminos-y-condiciones" element={<Terms />} />
          <Route path="*" element={<h1>Page not found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
