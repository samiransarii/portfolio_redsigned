import React from "react";
import SkillCard from "../skill_card/skill_card";

/**
 * Renders a category of skills with a title and responsive grid of skill cards.
 * Adapts from 1 column on mobile to 4 columns on larger screens.
 *
 * @param {string} title - Category title (e.g., "Languages", "Frontend Development")
 * @param {Object[]} skills - Array of skill objects to display
 */
const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-normal font-semibold mb-4 text-white/90">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
