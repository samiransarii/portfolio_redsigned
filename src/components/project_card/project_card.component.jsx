import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useTilt } from "../../hooks/useTilt";
import { GlareEffect } from "../glare_effect/glare_effect.component";

const ProjectCard = ({ project }) => {
  const { rotations, glare, handlers } = useTilt();

  return (
    <motion.div
      className="relative"
      onMouseMove={handlers.handleMouseMove}
      onMouseLeave={handlers.handleMouseLeave}
      animate={{
        rotateY: rotations.x,
        rotateX: rotations.y,
        transformPerspective: rotations.z * 450,
      }}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center",
        perspective: "1500px",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 40 }}
    >
      <Card className="flex flex-col h-full text-normal bg-transparent border border-blue/90 p-4">
        <GlareEffect glare={glare} />
        <CardHeader className="p-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 object-cover object-top rounded-lg mb-4"
          />
          <CardTitle className="text-heading tracking-wide font-semibold bg-gradient-to-r from-blue via-purple to-purple-light text-transparent bg-clip-text">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardDescription className="text-white mb-4">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="default"
                className="text-blue text-sm font-normal bg-transparent hover:bg-transparent p-2"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 flex gap-4 text-normal">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-blue"
          >
            <SiGithub size={20} />
            Source Code
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
