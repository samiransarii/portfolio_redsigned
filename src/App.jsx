import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// components
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./pages/home/homepage.component";
import Aboutpage from "./pages/about/aboutpage.component";
import Projectspage from "./pages/projects/projectspage.component";
import TechnologiesPage from "./pages/technologies/technologiespage.component";
import Footer from "./components/footer/footer.component";
import LoadingScreen from "./components/loading_screen/loading_screen.component";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Homepage />
          <Aboutpage />
          <Projectspage />
          <TechnologiesPage />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
