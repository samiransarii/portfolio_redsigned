/**
 * Rounds a number to a specified number of decimal places
 * @param {number} num - The number to round
 * @param {number} [fix=2] - Number of decimal places (defaults to 2)
 * @returns {number} The rounded number
 */
export const round = (num, fix = 2) => parseFloat(num.toFixed(fix));

/**
 * Calculates the Euclidean distance between two points in 2D space
 * @param {number} x1 - X coordinate of first point
 * @param {number} y1 - Y coordinate of first point
 * @param {number} x2 - X coordinate of second point
 * @param {number} y2 - Y coordinate of second point
 * @returns {number} The distance between the two points
 */
export const distance = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

/**
 * Calculates mouse position relative to a DOM element in both absolute pixels and percentages
 * @param {MouseEvent} event - The mouse event object
 * @param {DOMRect} rect - The bounding rectangle of the target element
 * @returns {Object} Mouse position data containing:
 *   @returns {Object} absolute - Absolute pixel coordinates {x, y}
 *   @returns {Object} percent - Percentage coordinates relative to element size {x, y}
 *   @returns {Object} center - Percentage coordinates relative to element center {x, y}
 */
export const calculateMousePosition = (event, rect) => {
  const absolute = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  const percent = {
    x: round((100 / rect.width) * absolute.x),
    y: round((100 / rect.height) * absolute.y),
  };

  return {
    absolute,
    percent,
    center: {
      x: percent.x - 50,
      y: percent.y - 50,
    },
  };
};
