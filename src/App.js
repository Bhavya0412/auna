import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollerOnTop from "./ScrollerOnTop";
import ScrollToTop from "react-scroll-to-top";



import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeCards from './pages/Home';
import Footer from './components/Footer';
import ShippingPoliciesPage from './pages/Shipping';
import CareInstructionsPage from './pages/Care';
import FAQsPage from './pages/Faqs';
import ProductPage from "./pages/ProductPage";
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <ScrollerOnTop />
      <ScrollToTop
  smooth
  className="flex items-center justify-center bg-coffeeDeep text-white rounded-full shadow-md hover:bg-darkolivegreen"
/>
      <div className="bg-white dark:bg-darkBg min-h-screen">

      <Header />
      <Navbar />

        <Routes>

          <Route path="/" element={<HomeCards />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Faqs" element={<FAQsPage />} />
          <Route path="/Care_instructions" element={<CareInstructionsPage />} />
          <Route path="/shipping_policies" element={<ShippingPoliciesPage />} />
          <Route path="/The-Coffee-Arc/product/:id" element={<ProductPage />} />
          {/* Future routes for other pages can be added here */}
        </Routes>
      
      
      </div>
      <Footer />
    </Router>
  );
};

export default App;
