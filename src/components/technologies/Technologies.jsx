import React, { useState, useEffect, useRef } from "react";
import "./technologies.css";
import Loader from "../loader/Loader";
import { sleep } from "../../helpers/utils";

const Technologies = (props) => {
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

  let style1;
  let style2;
  if (props.window < 650) {
    style1 = { minWidth: "100px", height: "100px" };
    style2 = { width: "50px" };
  }

  const mappedData = tech.map((item) => {
    return (
      <div className="box" key={item._id} style={style1}>
        <img src={item.image} alt={item._id} width="50px" style={style2} />
      </div>
    );
  });

  return (
    <div className="tech">
      <h2 className="tech-heading">TECHNOLOGIES</h2>
      <div className="container">
        <div className="box-container" ref={containerRef}>
          {!loading ? mappedData : <Loader />}
        </div>
      </div>
      <div className="tech-arrows">
        <img
          src="/assets/images/arrowL.png"
          width="50"
          height="50"
          className="tech--arrow"
          onClick={scrollLeft} // Scroll left when the left arrow is clicked
        />
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
