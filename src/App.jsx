import React from "react";

// components
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./pages/hompage/homepage.component";
import Aboutpage from "./pages/aboutpage/aboutpage.component";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Aboutpage />
    </div>
  );
}

export default App;
