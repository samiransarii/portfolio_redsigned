/**
 * Defines motion variants for profile section animations.
 * Contains configurations for icon rotation and text fade-in effects
 * used with Framer Motion.
 */

export const iconMotion = {
  rest: {
    rotate: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    rotate: -15,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const textMotion = {
  rest: {
    opacity: 0,
    x: -10,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};
