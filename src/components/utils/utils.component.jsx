import React from "react";

/**
 * TimelineLine used in the ExperienceTimeline
 * The actuall timeline scale
 */
export const TimelineLine = () => (
  <div className="absolute left-3.5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue via-purple-light to-purple" />
);

/**
 * TimelineCircle used in the TimeLineEvent
 * Used as a dot on the timeline scale
 */
export const TimelineCircle = () => (
  <div className="absolute left-3 w-5 h-5 bg-blue rounded-full transform -translate-x-1.5" />
);

/**
 * Used to display the logos on the TimeLineEvents
 */
export const EventLogo = ({ logo }) => (
  <div className="flex items-center">{logo}</div>
);

/**
 * Non draggable image used in the homepage
 */
export const NonDraggableImage = ({ src, alt, classNames }) => (
  <img
    src={src}
    alt={alt}
    className={`select-none ${classNames}`}
    onDragStart={(e) => e.preventDefault()}
  />
);

/**
 * Google SVG logos used on the TimeLineEvents
 */
export const GoogleLogo = ({ height, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 102.018 104.1"
    width={width}
    height={height}
    id="google"
  >
    <path
      fill="#4285f4"
      d="M102.018 53.204a44.6 44.6 0 0 0-1.1-10.641H52.05v19.316h28.685a25.436 25.436 0 0 1-10.641 16.887l-.1.647 15.452 11.97 1.07.107c9.831-9.08 15.5-22.44 15.5-38.286"
    ></path>
    <path
      fill="#34a853"
      d="M52.05 104.1c14.053 0 25.851-4.627 34.469-12.608L70.094 78.768c-4.395 3.066-10.294 5.206-18.044 5.206a31.335 31.335 0 0 1-29.611-21.63l-.61.052L5.762 74.83l-.21.584a52.012 52.012 0 0 0 46.5 28.686"
    ></path>
    <path
      fill="#fbbc05"
      d="M22.439 62.344A32.044 32.044 0 0 1 20.7 52.05a33.672 33.672 0 0 1 1.677-10.294l-.029-.69L6.084 28.432l-.532.253a51.94 51.94 0 0 0 0 46.729l16.887-13.07"
    ></path>
    <path
      fill="#eb4335"
      d="M52.05 20.126a28.848 28.848 0 0 1 20.126 7.75l14.69-14.343A50.008 50.008 0 0 0 52.05 0a52.012 52.012 0 0 0-46.5 28.685l16.831 13.071a31.463 31.463 0 0 1 29.669-21.63"
    ></path>
  </svg>
);
