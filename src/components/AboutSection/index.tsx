import React from "react";
import {
  AboutMeContainer,
  AboutMePhoto,
  AboutMeText,
  AboutWrapper,
  AboutmeTitleContainer,
  MarqueeContainer,
} from "./AboutElements";
import AnimatedTitle from "../AnimatedTitle";
import { motion } from "framer-motion";
import AnimatedTechnologies from "./AnimatedTechnologies";
import { Colored } from "../../pages/Resume/ResumeElements";

const photo = require("../../img/photo2.png");

const AboutSection = () => {
  return (
    <AboutWrapper id="about">
      <AboutmeTitleContainer>
        <AnimatedTitle
          text="About me"
          color="var(--additional-color)"
          size="var(--big-font-size)"
          sizesmall="var(--big-font-sizeMobile)"
          colorSwap={false}
        />
      </AboutmeTitleContainer>

      <AboutMeContainer>
        <AboutMePhoto src={photo}></AboutMePhoto>
        {/* break in text */}
        <AboutMeText />

        <AnimatedTitle
          text="Who's this guy?"
          color="var(--additional-color)"
          size="var(--h2-font-size)"
          sizesmall="var(--h2-font-sizeMobile)"
          spacing="0.25em"
        />
        {/* break in text */}
        <AboutMeText />
        <AboutMeText>
          Hi, I’m Konrad. I’m a former Aircraft Engineer and aspiring Junior
          Front-end Developer, who is passionate about building things for the
          web. When I was a kid, I was completely hooked on the world of
          computers and creating things, so I found tutorials about C++ and I
          managed to learn the fundamentals of the language.
        </AboutMeText>
        <AboutMeText>
          In the years, I’ve graduated Aircraft Engineering at Silesian
          University of Technology - where I often used my experience in C++.
          During time spent at the airport and university, I learned a lot about{" "}
          <Colored>the importance of standarization, problem solving</Colored>{" "}
          and complex systems, such as an airplane, transport systems or design
          processes. When a chance occured after graduation I fully focused on
          my passion for coding by learning React and how IT systems works.
        </AboutMeText>
        <AboutMeText>
          I'm a self-motivated learner with strong organization, time management
          and communication skills.{" "}
          <Colored>
            First time in a long time I find passion in my work and the beauty
            behind creating things.{" "}
          </Colored>
          Now looking for a junior dev position or internship to finally kick
          start my career and learn among professionals.
        </AboutMeText>
      </AboutMeContainer>
      <MarqueeContainer as={motion.div} transition={{ delay: 2 }}>
        <AnimatedTechnologies fromRight={false} textDelay={1} />
        <AnimatedTechnologies fromRight={false} textDelay={1.5} />
        <AnimatedTechnologies fromRight={false} textDelay={2} />
      </MarqueeContainer>
    </AboutWrapper>
  );
};

export default AboutSection;
