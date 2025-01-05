/**
 * Technology skills data organized by category.
 * Each skill includes name, icon reference, and proficiency level.
 *
 * Categories:
 * - Languages: Programming languages proficiency
 * - Frontend: Web frontend technologies and frameworks
 * - Backend: Server-side technologies and databases
 * - Tools: Development tools and platforms
 *
 * @typedef {Object} Skill
 * @property {string} name - Technology name
 * @property {string} icon - Icon identifier from simple-icons
 * @property {'Basic'|'Intermediate'|'Advanced'} level - Proficiency level
 */
export const technologiesData = {
  languages: {
    title: "Programming Languages",
    skills: [
      {
        name: "TypeScript",
        icon: "SiTypescript",
        color: "#3178C6",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        icon: "SiJavascript",
        color: "#F7DF1E",
        level: "Advanced",
      },
      {
        name: "Python",
        icon: "SiPython",
        color: "#3776AB",
        level: "Advanced",
      },
      {
        name: "Kotlin",
        icon: "SiKotlin",
        color: "#7F52FF",
        level: "Intermediate",
      },
      {
        name: "Go",
        icon: "SiGo",
        color: "#00ADD8",
        level: "Basic",
      },
    ],
  },
  development: {
    title: "Development & Frameworks",
    skills: [
      {
        name: "React",
        icon: "SiReact",
        color: "#61DAFB",
        level: "Advanced",
      },
      {
        name: "Next.js",
        icon: "SiNextdotjs",
        color: "#FFFFFF",
        level: "Advanced",
      },
      {
        name: "Node.js",
        icon: "SiNodedotjs",
        color: "#339933",
        level: "Advanced",
      },
      {
        name: "Express",
        icon: "SiExpress",
        color: "#FFFFFF",
        level: "Advanced",
      },
      {
        name: "Angular",
        icon: "SiAngular",
        color: "#DD0031",
        level: "Intermediate",
      },
      {
        name: "Tailwind CSS",
        icon: "SiTailwindcss",
        color: "#06B6D4",
        level: "Advanced",
      },
      {
        name: "Framer Motion",
        icon: "SiFramer",
        color: "#F7DF1E",
        level: "Intermediate",
      },
    ],
  },
  infrastructure: {
    title: "Infrastructure & Tools",
    skills: [
      {
        name: "MongoDB",
        icon: "SiMongodb",
        color: "#47A248",
        level: "Advanced",
      },
      {
        name: "PostgreSQL",
        icon: "SiPostgresql",
        color: "#4169E1",
        level: "Intermediate",
      },
      {
        name: "Google Cloud",
        icon: "SiGooglecloud",
        color: "#4285F4",
        level: "Intermediate",
      },
      {
        name: "Docker",
        icon: "SiDocker",
        color: "#2496ED",
        level: "Intermediate",
      },
      {
        name: "Git",
        icon: "SiGit",
        color: "#F05032",
        level: "Advanced",
      },
      {
        name: "Linux",
        icon: "SiLinux",
        color: "#FCC624",
        level: "Intermediate",
      },
    ],
  },
};
