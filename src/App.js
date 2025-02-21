import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeCards from './pages/Home';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div className="bg-white dark:bg-darkBg min-h-screen">

      <Header />
      <Navbar />

        <Routes>
          <Route path="/" element={<HomeCards />} />

          {/* Future routes for other pages can be added here */}
        </Routes>
      
      
      </div>
      <Footer />
    </Router>
  );
};

export default App;
