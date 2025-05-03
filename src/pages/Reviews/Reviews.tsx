import React from "react";
import "./Reviews.css";

const Reviews: React.FC = () => {
  const reviews = [
    {
      quote:
        "This app saved me hours of reading! Now I can just sit back, relax, and let the AI read everything for me. Genius!",
      name: "Alex Johnson",
      role: "Professional Procrastinator",
      image:
        "https://img.freepik.com/free-photo/portrait-cheerful-handsome-man-keeps-hands-together-smiles-broadly-dressed-elegant-shirt_273609-16601.jpg", // Imagine placeholder
    },
    {
      quote:
        "I used to dread reading long reports. Now, I just hit play and listen while I sip my coffee. Best app ever!",
      name: "Emily Davis",
      role: "Busy Entrepreneur",
      image:
        "https://media.istockphoto.com/id/1444339602/photo/black-woman-african-beauty-and-skincare-health-of-luxury-spa-model-with-a-smile-on-an-orange.jpg?s=612x612&w=0&k=20&c=cwNbqTAyZdi57HBV_J7_9XxKA4rT-DtwvTMqvEJS0gs=", // Imagine placeholder
    },
  ];

  return (
    <div className="reviews-container">
      <header className="reviews-header">
        <h1>
          What Our <span className="highlight">Lazy Readers</span> Say
        </h1>
        <p>
          Hear from people who’ve embraced the art of doing less. Whether it’s
          summarizing long texts or listening to them, they’re loving the
          convenience!
        </p>
        <button className="read-all-button">Read All Reviews</button>
      </header>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-text">
              <p>"{review.quote}"</p>
              <h3>{review.name}</h3>
              <p className="role">{review.role}</p>
            </div>
            <div className="review-image">
              <img src={review.image} alt={`${review.name}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
