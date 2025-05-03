import React from "react";
import "./Product.css";

const Product: React.FC = () => {
  return (
    <div className="product-container">
      <header className="product-header">
        <h1>
          Simplify Reading with{" "}
          <span className="highlight">AI-Powered Summaries</span>
        </h1>
        <p>
          Tired of reading long texts? Let our AI do the work for you! Generate
          concise summaries and listen to them with our text-to-speech feature.
          Perfect for when you're on the go or just want to save time.
        </p>
      </header>

      <section className="product-features">
        {/* Card mare */}
        <div className="feature-card large">
          <img
            src="https://www.maketecheasier.com/assets/uploads/2021/12/programming-laptop-buying-guide-feat.jpg"
            alt="AI Summarization"
            className="feature-image"
          />
          <h3>AI Summarization</h3>
          <p>
            Transform lengthy articles, documents, or books into bite-sized
            summaries that are easy to digest.
          </p>
          <button className="learn-more">Learn More</button>
        </div>

        {/* Carduri mici */}
        <div className="feature-card">
          <img
            src="https://f.hubspotusercontent00.net/hubfs/6187708/What-is-Text-to-Speech-TTS%29-Initial-Speech-Synthesis-Explained-Respeecher-voice-cloning-software.jpeg"
            alt="Text-to-Speech"
            className="feature-image"
          />
          <h3>Text-to-Speech</h3>
          <p>
            Don’t feel like reading? Let our AI read the content for you with
            natural-sounding voices.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="feature-card">
          <img
            src="https://media.istockphoto.com/id/1025321152/photo/robot-handshake.jpg?s=612x612&w=0&k=20&c=CymZLFs5fREtzLm3TkLiQO3FuK0_binayNcvHg3lJRA="
            alt="Save Time"
            className="feature-image"
          />
          <h3>Save Time</h3>
          <p>
            Focus on what matters most by skipping the fluff and getting
            straight to the point.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default Product;
