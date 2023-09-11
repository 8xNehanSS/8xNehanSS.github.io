import React, { useState, useEffect } from "react";
import "./splash.css";

const Splash = () => {
  const [name, setName] = useState("");
  const textToType = "8xxNehanSS..";
  const typingSpeed = 200; // Adjust the typing speed as needed
  let timer;

  useEffect(() => {
    let index = 0;

    function addCharacter() {
      if (index < textToType.length) {
        setName((prevName) => prevName + textToType.charAt(index));
        index++;
        timer = setTimeout(addCharacter, typingSpeed);
      }
    }

    addCharacter();

    // Clear the timer when all characters have been typed
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="splash">
      <div className="splash-content">
        <img src="/assets/images/icon_green.png" alt="Logo" />
        <h1 className="name">{name}</h1>
      </div>
    </div>
  );
};

export default Splash;
