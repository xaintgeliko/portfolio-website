"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "About",
    id: "about",
    content: (
      <p className="text-white">
        I am a web developer with a passion for creating efficient and
        user-friendly web applications. I honed my skills in HTML, CSS,
        Bootstrap, React, JavaScript, and Ruby on Rails through a comprehensive
        bootcamp. My professional experience as a Jr. Systems Engineer expanded
        my expertise to include PostgreSQL, Ruby, Ruby on Rails, Git, and
        GitHub. Currently, I am broadening my skill set by learning C# and the
        .NET framework through a Udemy course. I am a fast learner and eager to
        take on new challenges, constantly seeking opportunities to expand my
        knowledge and improve my craft.
      </p>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor of Science in Information Technology - Polytechnic University
          of the Philippines - (Binan Campus)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Front End Development Course - Digiteer Inc. (September 2023 -
          December 2023)
        </li>
        <li>Ultimate C# Master Class for 2025 - Udemy (Ongoing)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("about");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.svg"
          alt="about-image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex flex-row whitespace-nowrap justify-between mt-8">
            <TabButton
              selectTab={() => handleTabChange("about")}
              active={tab === "about"}
            >
              {" "}
              About Me{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
