import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  animateFade,
  initialFadeDown,
  initialFadeUp,
  transitionInView,
} from "@/utils/animate";
import {
  antdesign,
  css,
  express,
  figma,
  git,
  github,
  html,
  javascript,
  jira,
  mui,
  nextjs,
  nodejs,
  npm,
  photoshop,
  react,
  redux,
  sass,
  shadcnui,
  tailwindcss,
  typescript,
  vite,
} from "@/assets/svgs";

import "./styles.scss";

const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: shadcnui,
    name: "Shadcn UI",
    type: "Frontend",
  },
  {
    imageUrl: antdesign,
    name: "Ant Design",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: npm,
    name: "NPM",
    type: "Build Tool",
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Build Tool",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: jira,
    name: "Jira",
    type: "Project Management",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Tools",
  },
  {
    imageUrl: photoshop,
    name: "Photoshop",
    type: "Tools",
  },
];

const SkillsSection = () => {
  const refs = {
    mySkills: useRef(null),
    myExpertise: useRef(null),
    logos: useRef(null),
  };

  const isInView = {
    mySkills: useInView(refs.mySkills),
    myExpertise: useInView(refs.myExpertise),
    logos: useInView(refs.logos),
  };

  return (
    <section className="skills-section">
      <div className="container">
        <motion.p
          className="our-services"
          ref={refs.mySkills}
          animate={isInView.mySkills ? animateFade : initialFadeUp}
          transition={transitionInView}
        >
          MY SKILLS
        </motion.p>

        <motion.h2
          className="our-solution"
          ref={refs.myExpertise}
          animate={isInView.myExpertise ? animateFade : initialFadeDown}
          transition={transitionInView}
        >
          My Expertise.
        </motion.h2>

        <div
          className="mt-16 flex justify-between sl:justify-start flex-wrap gap-12"
          ref={refs.logos}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="block-container w-20 h-20"
              key={skill.name}
              title={skill.name}
              animate={isInView.logos ? animateFade : initialFadeDown}
              transition={{
                ease: "easeOut",
                delay: isInView.logos ? index * 0.08 : 0,
              }}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
