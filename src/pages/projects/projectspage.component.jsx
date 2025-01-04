import React from "react";
import TopicHeader from "../../components/headers/headers.component";
import ProjectGrid from "../../components/project_grid/project_grid.component";
import { projectsData } from "../../data/projectsData";

const Projectspage = () => {
  return (
    <div id="projects" className="px-[15%] pb-32">
      <TopicHeader>My Recent Projects</TopicHeader>
      <p className="text-normal pb-4">
        These are some of the projects I have been working on so far. See my
        GitHub repositories for in-depth explanation of these projects.
      </p>
      <ProjectGrid projects={projectsData} />
    </div>
  );
};

export default Projectspage;
