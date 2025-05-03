import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./components/UploadForm/Upload";
import Home from "./pages/Home";
import { AudioProvider } from "./contexts/AudioContext";
import Summary from "./components/Summary/Summary";
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Product/Product";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Footer/Footer";
import "./index.css";

const App: React.FC = () => {
  return (
    <AudioProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/product" element={<Product />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
        </Routes>
        <Footer />
      </Router>
    </AudioProvider>
  );
};

export default App;
