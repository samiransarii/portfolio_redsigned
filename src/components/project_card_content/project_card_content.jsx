/**
 * Renders the content section of a project card including description and technology badges.
 * Features a flexible layout with wrapped technology tags and transparent styling.
 *
 * @param {string} description - Project description text
 * @param {string[]} technologies - Array of technology names to display as badges
 */
import { Badge } from "@/components/ui/badge";
import { CardContent, CardDescription } from "@/components/ui/card";

const ProjectCardContent = ({ description, technologies }) => (
  <CardContent className="flex-grow p-4">
    <CardDescription className="text-white mb-4">{description}</CardDescription>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
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
);

export default ProjectCardContent;
