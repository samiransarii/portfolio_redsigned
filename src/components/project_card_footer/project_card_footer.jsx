/**
 * Renders the footer section of a project card with a GitHub link.
 * Includes GitHub icon and hover effect with blue text color.
 *
 * @param {string} githubLink - URL to project's GitHub repository
 */
import { CardFooter } from "@/components/ui/card";
import { SiGithub } from "@icons-pack/react-simple-icons";

const ProjectCardFooter = ({ githubLink }) => (
  <CardFooter className="p-4 flex gap-4 text-normal">
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm hover:text-blue"
    >
      <SiGithub size={20} />
      Source Code
    </a>
  </CardFooter>
);

export default ProjectCardFooter;
