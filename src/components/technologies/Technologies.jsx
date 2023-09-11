import React from "react";
import { useState, useEffect } from "react";
import "./technologies.css";
import Loader from "../loader/Loader";
import { sleep } from "../../helpers/utils";

const Technologies = () => {
  const [tech, setTech] = useState([]);
  const [loading, setLoading] = useState(false);
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
  const mappedData = tech.toReversed().map((item) => {
    return (
      <div className="box" key={item._id}>
        <img src={item.image} alt={item._id} width="50px" />
      </div>
    );
  });
  return (
    <div className="tech">
      <h2 className="tech-heading">TECHNOLOGIES</h2>
      <div className="container">
        <div className="box-container">
          {!loading ? mappedData : <Loader />}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
