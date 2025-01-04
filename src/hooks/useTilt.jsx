import { useState, useRef } from "react";
import {
  calculateMousePosition,
  round,
  distance,
} from "../components/utils/mathUtils";

/**
 * Custom hook that implements a 3D tilt effect with glare based on mouse position.
 * Tracks mouse movement over an element and calculates appropriate rotations and glare
 * effects to create an interactive 3D card-like appearance. When the mouse leaves
 * the element, it smoothly animates back to its original position.
 *
 * @returns {Object} Hook state and event handlers
 * @returns {Object} rotations - Current rotation values in degrees {x, y, z}
 * @returns {Object} glare - Glare effect properties {x, y, opacity}
 * @returns {Object} handlers - Event handlers {handleMouseMove, handleMouseLeave}
 */
export const useTilt = () => {
  // Track rotation values for 3D transform
  const [rotations, setRotations] = useState({ x: 0, y: 0, z: 2 });

  // Track whether the element is currently animating
  const [isAnimating, setAnimating] = useState(false);

  // Track glare effect position and opacity
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  // Use ref to check animation state in setTimeout
  const isAnimatingRef = useRef(isAnimating);

  /**
   * Handles mouse movement over the element, updating rotations and glare
   * @param {MouseEvent} event - Mouse move event
   */
  const handleMouseMove = (event) => {
    setAnimating(true);
    isAnimatingRef.current = true;

    const rect = event.currentTarget.getBoundingClientRect();
    const { center, percent } = calculateMousePosition(event, rect);

    setRotations({
      x: round(((center.x > 50 ? 1 : -1) * center.x) / 12),
      y: round(center.y / 16),
      z: round(distance(percent.x, percent.y, 50, 50) / 20),
    });

    setGlare({
      x: percent.x,
      y: percent.y,
      opacity: 0.25,
    });
  };

  /**
   * Handles mouse leaving the element, resetting rotations and glare
   * with a small delay to ensure smooth transitions
   */
  const handleMouseLeave = () => {
    setAnimating(false);
    isAnimatingRef.current = false;

    setTimeout(() => {
      if (!isAnimatingRef.current) {
        setRotations({ x: 0, y: 0, z: 2 });
        setGlare({ x: 50, y: 50, opacity: 0 });
      }
    }, 100);
  };

  return {
    rotations,
    glare,
    handlers: {
      handleMouseMove,
      handleMouseLeave,
    },
  };
};
