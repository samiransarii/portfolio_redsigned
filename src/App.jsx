import React from "react";

// components
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./pages/home/homepage.component";
import Aboutpage from "./pages/about/aboutpage.component";
import Projectspage from "./pages/projects/projectspage.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Projectspage />
      <Footer />
    </div>
  );
}

export default App;
