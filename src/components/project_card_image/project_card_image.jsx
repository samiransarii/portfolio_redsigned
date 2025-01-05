/**
 * Renders the header section of a project card with an image and title.
 * The title features a gradient text effect from blue to purple.
 *
 * @param {string} image - URL of the project image
 * @param {string} title - Title of the project
 */
import { CardHeader, CardTitle } from "@/components/ui/card";

const ProjectCardImage = ({ image, title }) => (
  <CardHeader className="p-4">
    <img
      src={image}
      alt={title}
      className="w-full h-72 object-cover object-top rounded-lg mb-4"
    />
    <CardTitle className="text-heading tracking-wide font-semibold bg-gradient-to-r from-blue via-purple to-purple-light text-transparent bg-clip-text">
      {title}
    </CardTitle>
  </CardHeader>
);

export default ProjectCardImage;
