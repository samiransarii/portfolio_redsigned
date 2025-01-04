import React from "react";
import TopicHeader from "../../components/headers/headers.component";
import ExperienceTimeline from "../../components/experience_timeline/experience_timeline.component";

const Aboutpage = () => (
  <section
    id="about"
    className="px-[15%] py-8 pb-60 bg-transparent backdrop-blur-md"
  >
    <TopicHeader>About my experience</TopicHeader>
    <ExperienceTimeline />
  </section>
);

export default Aboutpage;
