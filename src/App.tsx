import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WebDevelopment from './pages/services/WebDevelopment';
import DigitalMarketing from './pages/services/DigitalMarketing';
import ECommerce from './pages/services/ECommerce';
import UiUxDesign from './pages/services/UiUxDesign';
import SeoServices from './pages/services/SeoServices';
import About from './components/About';
import OurWork from './components/OurWork';
import ContactForm from './components/ContactCTA';
import Services from './components/Services';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/services/seo" element={<SeoServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/blogpreview" element={<BlogPreview />} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;