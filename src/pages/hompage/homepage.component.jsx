import React from "react";

import "./homepage.styles.scss";
import linePattern from "../../static/icons/lines.png";
import avatar from "../../static/icons/avatar.png";
import arrow from "../../static/icons/arrow.png";

const Homepage = () => (
  <main className="homepage">
    <header className="homepage__header flex">
      <div className="left">
        <h3 className="greet">
          Hi, I'm Samir, <br /> a Computer Science Student
        </h3>
        <div className="about">
          <p>
            Software Engineering |
            <span className="bold"> Engineering solutions by design.</span>
          </p>
          <p>
            I believe every problem has its solution waiting to
            <span className="bold"> be discovered</span>.
          </p>
          <p>Graduating in 2026</p>
        </div>
      </div>
      <div className="right">
        <div className="pattern">
          <img
            className="pattern-lines"
            src={linePattern}
            alt="lines-pattern"
          />
          <img className="pattern-avatar" src={avatar} alt="avatar" />
        </div>
        <img className="arrow" src={arrow} alt="arrow" />
      </div>
    </header>
  </main>
);

export default Homepage;
