import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Product from "./Product/Product";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import UseCase from "./UseCase/UseCase";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to "I'm lazy to read allat"</h1>
        <p>
          Your ultimate tool for generating summaries and converting text to
          speech. Simplify your life with just a few clicks!
        </p>
        <div className="button-group">
          <button onClick={() => navigate("/upload")}>Text-To-Speech</button>
          <button onClick={() => navigate("/summary")}>Generate Summary</button>
        </div>
      </header>

      <section className="features-section">
        <div className="feature">
          <h3>Generate Summaries</h3>
          <p>
            Upload your documents and get concise summaries in seconds. Save
            time and focus on what matters most.
          </p>
        </div>
        <div className="feature">
          <h3>Text-to-Speech</h3>
          <p>
            Convert text into natural-sounding audio with customizable
            backgrounds. Perfect for multitasking!
          </p>
        </div>
      </section>
      <Contact />
      <Product />
      <WhyChooseUs />
      <UseCase />
      <Reviews />
    </div>
  );
};

export default Home;
