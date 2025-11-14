import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollerOnTop from "./ScrollerOnTop";
import ScrollToTop from "react-scroll-to-top";

import Header from './components/Header';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import ShippingPoliciesPage from './pages/Shipping';
import CareInstructionsPage from './pages/Care';
import FAQsPage from './pages/Faqs';
import ProductPage from "./pages/ProductPage";
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import TheCoffeeArc from './pages/TheCoffeeArc'; // Added import
import TheMalibuCollection from './pages/TheMalibuCollection'; // Added import


const App = () => {
  return (
    
      <Router>
      <CartProvider>
      <ScrollerOnTop />
      <ScrollToTop
        smooth
        className="flex items-center justify-center bg-coffeeDeep text-white rounded-full shadow-md hover:bg-darkolivegreen"
      />
      <MainContent />
      </CartProvider>
    </Router>
    
  );
};

const MainContent = () => {
  const location = useLocation();
  // Cleaned up duplicate and added PrivacyPolicy
  const hideNavbarRoutes = ["/About", "/Contact", "/shipping_policies", "/Care_instructions","/Faqs","/TermsAndConditions", "/PrivacyPolicy", "/Cart"]; 

  return (
    <div className="bg-white dark:bg-darkBg min-h-screen">
      <Header />
      {/* This logic correctly shows the navbar on routes NOT in the list (i.e., Home, Collection pages) */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />} 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faqs" element={<FAQsPage />} />
        <Route path="/Care_instructions" element={<CareInstructionsPage />} />
        <Route path="/shipping_policies" element={<ShippingPoliciesPage />} />
        
        {/* Added Collection Pages */}
        <Route path="/The-Coffee-Arc" element={<TheCoffeeArc />} />
        <Route path="/The-Malibu-Collection" element={<TheMalibuCollection />} />

        {/* Updated Product Page Route to be dynamic */}
        <Route path="/:collection/product/:id" element={<ProductPage />} />
        
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
