import React from "react";
import Skill from "./Skill";

const skills = [
  { src: "/images/html.png", alt: "HTML", percentage: 70 },
  { src: "/images/css.png", alt: "CSS", percentage: 60 },
  { src: "/images/tailwindcss.png", alt: "Tailwind", percentage: 60 },
  { src: "/images/bootstrap.png", alt: "Bootstrap", percentage: 50 },
  { src: "/images/javascript.png", alt: "JavaScript", percentage: 40 },
  { src: "/images/react.png", alt: "React", percentage: 40 },
  { src: "/images/nextjs.png", alt: "Next.js", percentage: 40 },
  { src: "/images/ruby.png", alt: "Ruby", percentage: 45 },
  { src: "/images/rails.png", alt: "Rails", percentage: 45 },
  { src: "/images/csharp.png", alt: "C#", percentage: 35 },
  { src: "/images/dotnet.png", alt: ".NET", percentage: 35 },
  { src: "/images/git.png", alt: "Git", percentage: 40 },
  { src: "/images/github.png", alt: "GitHub", percentage: 70 },
  { src: "/images/jira.png", alt: "Jira", percentage: 50 },
  { src: "/images/slack.png", alt: "Slack", percentage: 75 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-4 text-white">
      <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
      <p className="text-center mb-8 font-semibold">
        Hover to see the percentage of my proficiency.
      </p>
      <div className="grid grid-cols-3 place-items-center sm:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            src={skill.src}
            alt={skill.alt}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
