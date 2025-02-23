import React from "react";
import TopicHeader from "../../components/headers/headers.component";
import SkillCategory from "@/components/skill_category/skill_category";
// import ExperienceTimeline from "../../components/experience_timeline/experience_timeline.component";

import { interestsData } from "@/data/interests_data";

const Aboutpage = () => (
  <section
    id="about"
    className="px-[10%] py-8 pb-60 bg-transparent backdrop-blur-md"
  >
    <TopicHeader>About Myself</TopicHeader>
    {/* <ExperienceTimeline /> */}
    <p className="text-normal text-gray-300 mt-4">
      I’m deeply interested in{" "}
      <span className="font-semibold text-blue">Machine Learning</span>,{" "}
      <span className="font-semibold text-blue">Backend Systems</span>,{" "}
      <span className="font-semibold text-blue">iOS Development</span>, and{" "}
      <span className="font-semibold text-blue">System Design</span>. I enjoy
      working on projects that solve problems using cutting-edge technologies
      and improve user experience. I also like building smooth and appealing
      user interfaces.
    </p>

    {/* Interests Section */}
    <div className="mt-12">
      {Object.entries(interestsData).map(([key, category]) => (
        <SkillCategory
          key={key}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  </section>
);

export default Aboutpage;
