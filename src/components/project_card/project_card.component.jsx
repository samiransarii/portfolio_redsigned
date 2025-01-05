import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useTilt } from "../../hooks/useTilt";
import { cardMotion } from "@/animations/project_card_animations";
import { GlareEffect } from "../glare_effect/glare_effect.component";
import ProjectCardImage from "../project_card_image/project_card_image";
import ProjectCardFooter from "../project_card_footer/project_card_footer";
import ProjectCardContent from "../project_card_content/project_card_content";

/**
 * A 3D interactive project card component with tilt and glare effects.
 * Displays project details including image, description, technologies used,
 * and GitHub link. Features smooth animations on hover.
 *
 * Composed of three sub-components:
 * - ProjectCardImage: Handles image and title display
 * - ProjectCardContent: Manages description and technology badges
 * - ProjectCardFooter: Renders GitHub link
 *
 * @param {Object} project - Project data
 * @param {string} project.image - URL of project image
 * @param {string} project.title - Project title
 * @param {string} project.description - Project description
 * @param {string[]} project.technologies - Array of technology names
 * @param {string} project.githubLink - URL to GitHub repository
 */

const ProjectCard = ({ project }) => {
  const { rotations, glare, handlers } = useTilt();

  return (
    <motion.div
      className="relative"
      onMouseMove={handlers.handleMouseMove}
      onMouseLeave={handlers.handleMouseLeave}
      animate={cardMotion.animate(rotations)}
      style={cardMotion.style}
      transition={cardMotion.transition}
    >
      <Card className="flex flex-col h-full text-normal bg-transparent border border-blue/90 p-4">
        <GlareEffect glare={glare} />
        <ProjectCardImage image={project.image} title={project.title} />
        <ProjectCardContent
          description={project.description}
          technologies={project.technologies}
        />
        <ProjectCardFooter githubLink={project.githubLink} />
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
