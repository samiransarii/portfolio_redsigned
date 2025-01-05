import React from "react";
import { motion } from "framer-motion";
import * as SimpleIcons from "@icons-pack/react-simple-icons";

const progressLevels = {
  Basic: 50,
  Intermediate: 60,
  Advanced: 75,
};

/**
 * Renders an individual skill card with icon, name, and proficiency level.
 * Features hover animation and glass-morphism styling.
 *
 * @param {Object} skill - Skill information
 * @param {string} skill.name - Name of the technology
 * @param {string} skill.icon - Icon identifier from simple-icons package
 * @param {string} skill.level - Proficiency level
 */
const SkillCard = ({ skill }) => {
  const IconComponent = SimpleIcons[skill.icon];
  const progressWidth = progressLevels[skill.level];

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex items-center gap-3 px-8 py-4 bg-white/5 rounded-lg border border-blue/10 hover:border-blue/50 transition-colors duration-300"
    >
      {IconComponent && (
        <div className="w-12 h-12 flex items-center justify-center">
          <IconComponent size={32} color={skill.color} />
        </div>
      )}
      <div className="flex flex-col gap-2 pl-4 flex-grow">
        <span className="text-sm text-white/90">{skill.name}</span>
        <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressWidth}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full rounded-full"
            style={{ backgroundColor: skill.color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
