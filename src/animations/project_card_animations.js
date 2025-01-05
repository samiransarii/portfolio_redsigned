/**
 * Defines 3D card animation settings for hover effects.
 * Uses spring physics to create smooth rotation and perspective transformations.
 *
 * @param {Object} rotations - Contains x, y, z rotation values
 * @param {number} rotations.x - Rotation around Y axis
 * @param {number} rotations.y - Rotation around X axis
 * @param {number} rotations.z - Controls perspective depth (multiplied by 450)
 */
export const cardMotion = {
  animate: (rotations) => ({
    rotateY: rotations.x,
    rotateX: rotations.y,
    transformPerspective: rotations.z * 450,
  }),
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 40,
  },
  style: {
    transformStyle: "preserve-3d",
    transformOrigin: "center",
    perspective: "1500px",
  },
};
