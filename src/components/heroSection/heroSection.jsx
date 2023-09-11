import React from "react";
import "./herosection.css";

const HeroSection = (props) => {
  const desc_1 =
    "Highly skilled and logical Software Engineer with a passion for problem-solving and a quick learning ability. Enabling me to deliver efficient code solutions.";
  const desc_2 = "Committed to excellence, I thrive in dynamic environments.";
  const desc_3 =
    "Let's connect and discuss how I can contribute to your organization's success.";
  let styles;
  {
    props.window < 650
      ? (styles = { display: "block", textAlign: "center" })
      : null;
  }
  return (
    <div className="hero" style={styles}>
      <div className="hero-texts">
        <h4 className="hero-heading">INTRO</h4>
        <h4 className="hero-title">Full Stack Developer</h4>
        <h4 className="hero-heading">WHO AM I</h4>
        <h4 className="hero-desc">{desc_1}</h4>
        <h4 className="hero-desc">{desc_2}</h4>
        <h4 className="hero-desc">{desc_3}</h4>
      </div>
      <div className="hero-image">
        <img src="/assets/images/profile.jpg" width="200" alt="self" />
      </div>
    </div>
  );
};

export default HeroSection;
