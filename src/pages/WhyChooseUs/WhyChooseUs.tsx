import React from "react";
import "./WCU.css";

const WhyChooseUs: React.FC = () => {
  const featuresLeft = [
    {
      title: "Save Time",
      description:
        "Why spend hours reading when you can get the gist in seconds? Let us do the hard work for you.",
      icon: "⏳",
    },
    {
      title: "Listen Anywhere",
      description:
        "Turn any text into audio and listen while you relax, commute, or pretend to work.",
      icon: "🎧",
    },
    {
      title: "Stay Lazy",
      description:
        "Embrace your inner laziness while still staying productive. It's a win-win!",
      icon: "😴",
    },
    {
      title: "Easy to Use",
      description:
        "No complicated setups. Just upload, summarize, and listen. Simple as that.",
      icon: "👌",
    },
  ];

  const featuresRight = [
    {
      title: "AI-Powered",
      description:
        "Our cutting-edge AI ensures accurate summaries and natural-sounding audio every time.",
      icon: "🤖",
    },
    {
      title: "Customizable",
      description:
        "Choose the level of detail you want in your summaries or pick your favorite voice for audio.",
      icon: "🎙️",
    },
    {
      title: "Accessible",
      description:
        "Use our app anytime, anywhere. Perfect for lazy mornings or busy afternoons.",
      icon: "🌍",
    },
    {
      title: "Fun & Efficient",
      description:
        "Who said productivity can't be fun? Enjoy a seamless experience that makes life easier.",
      icon: "🎉",
    },
  ];

  return (
    <div className="why-choose-us-container">
      <header className="why-choose-us-header">
        <h1>
          Why <span className="highlight">Choose Us?</span>
        </h1>
        <p>
          Because reading is overrated! Let us summarize, read, and simplify
          your life so you can focus on what really matters—like doing nothing.
        </p>
      </header>

      <div className="why-choose-us-layout">
        <div className="features-column">
          {featuresLeft.map((feature, index) => (
            <div key={index} className="feature-cards">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="center-image">
          <img
            src="https://imagedelivery.net/c2SKP8Bk0ZKw6UDgeeIlbw/b42a93bc-86c5-41bb-e148-e704fc9ef900/public"
            alt="Keyboard with Play Button"
          />
        </div>

        <div className="features-column">
          {featuresRight.map((feature, index) => (
            <div key={index} className="feature-cards">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
