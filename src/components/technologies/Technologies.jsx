import React, { useState, useEffect, useRef } from "react";
import "./technologies.css";
import Loader from "../loader/Loader";
import { sleep } from "../../helpers/utils";

const Technologies = () => {
  const [tech, setTech] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      setLoading(true);
      const resp = await fetch(
        "https://gray-jealous-hippopotamus.cyclic.app/api/tech"
      );
      await sleep(1000);
      const data = await resp.json();
      setTech(data);
      setLoading(false);
    };

    fetchPortfolioData();
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    console.log("clicked right");
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const mappedData = tech.map((item) => {
    return (
      <div className="box" key={item._id}>
        <img src={item.image} alt={item._id} width="50px" />
      </div>
    );
  });

  return (
    <div className="tech">
      <h2 className="tech-heading">TECHNOLOGIES</h2>
      <div className="tech-arrow">
        <img
          src="/assets/images/arrowL.png"
          width="50"
          height="50"
          className="tech--arrow"
          onClick={scrollLeft} // Scroll left when the left arrow is clicked
        />
        <div className="container">
          <div className="box-container" ref={containerRef}>
            {!loading ? mappedData : <Loader />}
          </div>
        </div>
        <img
          src="/assets/images/arrowR.png"
          width="50"
          height="50"
          className="tech--arrow"
          onClick={scrollRight} // Scroll right when the right arrow is clicked
        />
      </div>
    </div>
  );
};

export default Technologies;
