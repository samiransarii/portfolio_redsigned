import { motion } from "framer-motion";

/**
 * Renders a dynamic glare effect overlay using radial gradient and framer-motion.
 * Creates a subtle light reflection that follows mouse movement across the parent element.
 *
 * @param {Object} props
 * @param {Object} props.glare - Glare effect properties
 * @param {number} props.glare.x - Horizontal position of glare as percentage (0-100)
 * @param {number} props.glare.y - Vertical position of glare as percentage (0-100)
 * @param {number} props.glare.opacity - Opacity of glare effect (0-1)
 * @returns {JSX.Element} Motion div with animated radial gradient
 */
export const GlareEffect = ({ glare }) => (
  <motion.div
    className="absolute inset-0 z-20 rounded-lg"
    style={{
      mixBlendMode: "overlay",
      transform: "translateZ(1px)",
      transformStyle: "preserve-3d",
    }}
    animate={{
      background: `radial-gradient(
       farthest-corner circle at ${glare.x}% ${glare.y}%,
       rgba(18, 194, 233, 0.3) 10%,
       rgba(18, 194, 233, 0.1) 30%,
       transparent 80%
     )`,
      opacity: glare.opacity,
    }}
  />
);
