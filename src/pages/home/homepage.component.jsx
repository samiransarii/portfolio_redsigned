import React from "react";

import "./homepage.styles.scss";
import ProfileSection from "../../components/profile_section/profile_section.component";
import AvatarSection from "../../components/avatar_section/avatar_section.component";

export const Homepage = () => (
  <main className="homepage">
    <header className="homepage__header flex">
      <ProfileSection />
      <AvatarSection />
    </header>
  </main>
);

export default Homepage;
