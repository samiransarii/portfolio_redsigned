import React from "react";
import { technologiesData } from "@/data/technologies_data";
import TopicHeader from "../../components/headers/headers.component";
import SkillCategory from "@/components/skill_category/skill_category";

/**
 * Renders the technologies/skills page showing all skill categories.
 * Each category is displayed in a responsive grid layout with skill cards.
 *
 * Features:
 * - Responsive padding for different screen sizes
 * - Auto-generates categories from technologiesData
 * - Uses topic header component for consistent styling
 */
const TechnologiesPage = () => {
  return (
    <div id="skills" className="px-[5%] md:px-[10%] pb-32">
      <TopicHeader>Technical Skills</TopicHeader>
      <div className="mt-12">
        {Object.entries(technologiesData).map(([key, category]) => (
          <SkillCategory
            key={key}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnologiesPage;
