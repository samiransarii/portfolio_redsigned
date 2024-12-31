import React from "react";
import "./profile_section.styles.scss";

const ProfileSection = () => (
  <div className="profile-section">
    <h3 className="profile-section__greeting">
      Hi, I'm Samir, <br /> a Computer Science Student
    </h3>
    <div className="profile-section__about">
      <p>
        Software Engineering |
        <span className="font-semibold"> Engineering solutions by design.</span>
      </p>
      <p>
        I believe every problem has its solution waiting to
        <span className="font-semibold"> be discovered</span>.
      </p>
      <p>Graduating in 2026</p>
    </div>
  </div>
);

export default ProfileSection;
