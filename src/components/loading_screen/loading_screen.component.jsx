import { motion, AnimatePresence } from "framer-motion";

/**
 * A fullscreen loading overlay component with an animated spinner.
 * Features a rotating border gradient effect and centered loading text.
 *
 * Uses Framer Motion for:
 * - Fade out animation on exit
 * - Infinite smooth rotation of the spinner
 * - Fixed positioning to cover the entire viewport
 */
const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 h-full w-full bg-[#050a18] flex items-center justify-center bg-background"
  >
    <div className="flex flex-col items-center gap-4">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-24 h-24 border-4 border-t-purple border-r-purple/50 border-b-purple/30 border-l-purple/10 rounded-full"
      />
      <span className="text-sm text-white">Loading...</span>
    </div>
  </motion.div>
);

export default LoadingScreen;
