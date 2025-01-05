import React from "react";
import "./profile_section.styles.scss";
import resumePDF from "../../static/resume.pdf";
import { profileData } from "@/data/profile_data";
import ResumeLink from "../resume_link/resume_link.component";

/**
 * Renders the profile section containing greeting, role description,
 * and an animated resume link.
 *
 * Displays profile information from profileData configuration including:
 * - Greeting and role title
 * - Multi-line description with highlighted text segments
 * - Resume link with hover animations
 */
const ProfileSection = () => {
  return (
    <section className="profile-section">
      <h3 className="profile-section__greeting">
        {profileData.greeting} <br /> {profileData.role}
      </h3>
      <div className="profile-section__about">
        {profileData.description.map((item, index) => (
          <p key={index}>
            {item.text}
            <span className={item.highlightClass}>{item.highlight}</span>
          </p>
        ))}
      </div>
      <ResumeLink resumePDF={resumePDF} />
    </section>
  );
};

export default ProfileSection;
