import React from "react";
import { motion } from "framer-motion";
import { SiReaddotcv } from "@icons-pack/react-simple-icons";
import { iconMotion, textMotion } from "../../animations/profile_animations";

/**
 * Renders an animated resume link with an icon and text.
 * Features hover animations including icon rotation and text fade-in effects.
 * Opens the resume PDF in a new tab when clicked.
 *
 * @param {string} resumePDF - URL path to the resume PDF file
 */
const ResumeLink = ({ resumePDF }) => {
  return (
    <div className="pt-8">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="inline-flex items-center"
      >
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-4 text-sm text-white/70 hover:text-purple/70 transition-colors duration-150"
          aria-label="Resume"
        >
          <motion.div variants={iconMotion}>
            <SiReaddotcv size={38} />
          </motion.div>
        </a>
        <motion.span
          variants={textMotion}
          className="ml-4 text-sm text-white/70"
        >
          Resume
        </motion.span>
      </motion.div>
    </div>
  );
};

export default ResumeLink;
