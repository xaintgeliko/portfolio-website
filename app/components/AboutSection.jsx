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
        bootcamp. My experience as a Jr. Systems Engineer further enhanced my
        knowledge in PostgreSQL, Ruby, Ruby on Rails, Git, and GitHub. At
        present, I’m expanding my expertise by learning C# and the .NET
        framework through a Udemy course. I’m a quick learner, always eager to
        tackle new challenges and continuously grow both my knowledge and
        skills.
      </p>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor of Science in Information Technology | Polytechnic University
          of the Philippines (Binan Campus) | October 2023
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Digiteer Inc. | Frontend Development Bootcamp | Dec 2023</li>
        <li>Udemy | Ultimate C# Master Class for 2025 | January 2025</li>
        <li>Udemy | Front-End Web Developer Bootcamp | Jan 2025</li>
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
        <div className="">
          <Image
            src="/images/about-image.svg"
            alt="about-image"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
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
