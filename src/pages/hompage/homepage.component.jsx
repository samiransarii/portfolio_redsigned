import React from "react";
import "./homepage.styles.scss";
import { Link } from "react-router-dom";
import resume from "../../statics/resume.pdf";

// components
import PrimaryButton from "../../components/buttons/primary-button/primary-button.component";
import SecondaryButton from "../../components/buttons/secondary-button/secondary-button.component";

const Homepage = () => (
  <main className="homepage">
    <header className="homepage__header">
      <span className="greet">Hello, my name is</span>
      <h3 className="bold-heading">Samir Ansari.</h3>
      <h3 className="bold-heading">I build things for the web.</h3>
      <p>
        My core experience is in web developement, but I also have a passion for
        design. Undoubtedly, creating a modern website requires the combination
        of design, server technologies, and the layers that user interacts with,
        I believe experince in both design and developement allows for making
        the most optimal and smooth user experience.
      </p>
      <div className="btn-container">
        <PrimaryButton to="/contact">Get in touch.</PrimaryButton>
        <SecondaryButton to={resume} target="_blank" rel="noreferrer noopener">
          Resume <i>&#8594;</i>
        </SecondaryButton>
      </div>
    </header>
    <section className="projects">
      <h3 className="heading">Some of my prjects.</h3>
      <div className="card">
        <div className="header">HEADER</div>
        <div className="main-content">CONTENT</div>
        <div className="footer">FOOTER</div>
      </div>
    </section>
  </main>
);

export default Homepage;
