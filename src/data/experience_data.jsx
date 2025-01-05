import React from "react";
import { GoogleLogo } from "../components/utils/utils.component";
import EverestWalkLogo from "../static/icons/everestwalk-logo.jpeg";

export const experiences = [
  {
    id: 1,
    title: "STEP II Intern at Google",
    team: "Google Core Team, Mountain View, CA",
    logo: <GoogleLogo height="40" width="40" />,
    time: "May 2024 - August 2024",
    desc: "I worked on an internal tool used by over 23,000 users to generate outputs from Generative AI models. My role involved developing features across the full stack, using Angular and TypeScript on the frontend and Kotlin with Google Cloud Spanner on the backend. I worked on making the tool more efficient by optimizing the data-fetching logic, which eliminated redundant backend API calls, improving system performance and resolving timeout issues. I also made database queries faster by creating a materialized view with proper indexing, which enhanced the overall performance.",
  },
  {
    id: 2,
    title: "STEP Intern at Google",
    team: "Document AI Team, Kirkland, WA",
    logo: <GoogleLogo height="40" width="40" />,
    time: "May 2023 - August 2023",
    desc: "I contributed to the development of the Document AI Cloud console by implementing UI enhancements using Angular, TypeScript, and RxJS. I also improved Identity and Access Management (IAM) permissions on the client side, ensuring secure access to resources and reducing failed backend requests caused by unauthorized actions. To ensure the reliability and functionality of these updates, I wrote detailed Jasmine tests to validate the modified UI components.",
  },
  {
    id: 3,
    title: "Summer Intern at Everestwalk Groups",
    team: "Developers Team, Kathmandu, NP",
    logo: (
      <img
        src={EverestWalkLogo}
        className="h-16 w-auto rounded-full"
        alt="Company Logo"
      />
    ),
    time: "April 2022 - July 2022",
    desc: "The MWell Platform, a project by Everest Walk Group, is a digital health solution focused on providing personalized behavioral health recommendations to users. I collaborated with the team to deliver the initial prototype ahead of schedule by optimizing the landing page, improving the admin portal, and implementing thorough REST API unit tests using Jest and Postman. Additionally, I worked on improving the platform’s overall performance, creating a smoother and more efficient experience for both users and administrators.",
  },
];
