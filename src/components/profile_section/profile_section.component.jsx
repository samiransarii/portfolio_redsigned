import React from "react";
import "./profile_section.styles.scss";
import { SiReaddotcv } from "@icons-pack/react-simple-icons";
import resumePDF from "../../static/resume.pdf";

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
      <p>
        Graduating in December 2025!{" "}
        <span className="font-semibold text-blue"> Seeking FT roles</span>.
      </p>
    </div>
    <div className="pt-8">
      <a
        key="resume"
        href={resumePDF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-4 text-sm text-white/70 hover:text-purple/70 transition-colors duration-150"
        aria-label="Resume"
      >
        <SiReaddotcv size={38} />
        <span>Resume</span>
      </a>
    </div>
  </div>
);

export default ProfileSection;
