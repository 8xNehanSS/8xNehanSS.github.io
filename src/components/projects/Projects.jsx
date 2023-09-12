import React from "react";
import { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import "./projects.css";
import { sleep } from "../../helpers/utils";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPortfolioData = async () => {
      setLoading(true);
      const resp = await fetch(
        "https://gray-jealous-hippopotamus.cyclic.app/api/projects"
      );
      await sleep(1000);
      const data = await resp.json();
      setProjects(data);
      setLoading(false);
    };

    fetchPortfolioData();
  }, []);
  const git_image = (
    <img src="/assets/images/gitlogosvg.svg" width="25" className="gitlogo" />
  );
  const mappedData = projects.toReversed().map((item) => {
    console.log(item);
    return (
      <div className="project" key={item._id}>
        <h2 className="project-heading">
          <a href={item.repolink} target="_blank">
            {git_image}
          </a>
          &nbsp;&nbsp;{item.title}
        </h2>
        <p className="project-summary">{item.summary}</p>
        <p className="project-description">{item.description}</p>
      </div>
    );
  });
  return (
    <>
      <h2 className="projcontainer-heading">RECENT PROJECTS</h2>
      <div className="projcontainer">
        <div className="projcontainer-main">
          {!loading ? mappedData : <Loader />}
        </div>
      </div>
    </>
  );
};

export default Projects;
