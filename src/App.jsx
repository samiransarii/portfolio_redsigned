import React from "react";

// components
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./pages/home/homepage.component";
import Aboutpage from "./pages/about/aboutpage.component";
import Projectspage from "./pages/projects/projectspage.component";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Projectspage />
    </div>
  );
}

export default App;
