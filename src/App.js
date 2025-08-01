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
  const hideNavbarRoutes = ["/About", "/Contact", "/shipping_policies", "/Care_instructions","/Faqs","/shipping_policies","/TermsAndConditions", "/Cart"]; //hide the coffee arc navbar on these routes

  return (
    <div className="bg-white dark:bg-darkBg min-h-screen">
      <Header />
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
        <Route path="/The-Coffee-Arc/product/:id" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
