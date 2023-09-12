import React, { useState, useEffect } from "react";
import "./splash.css";
import { useTypingEffect } from "../hooks/typing-effect";

const Splash = () => {
  const text = useTypingEffect("xNehanSS..", "200");

  return (
    <div className="splash">
      <div className="splash-content">
        <img src="/assets/images/icon_green.png" alt="Logo" />
        <h1 className="name">8{text}</h1>
      </div>
    </div>
  );
};

export default Splash;
