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
import { Stroke } from "./AnimatedTechnologies/AnimatedTechnologiesElements.tsx";

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
          Hi, I’m Konrad. I’m former Aircraft Engineer and aspiring Junior
          Front-end Developer, who is passionate about building things for the
          web. When I was a kid I was completely hooked to the world of
          computers and creating things so I found tutorials about C++ and
          managed to learn fundamentals of the language.
        </AboutMeText>
        <AboutMeText>
          In the years, I’ve graduated Aircraft Engineering at Silesian
          University of Technology - where I often used my experience in C++.
          During time spent at the airport and university I learned a lot about{" "}
          <Stroke>importance of standarization</Stroke> and complex systems such
          as an airplane, transport systems or design processes. When the chance
          occured after graduation I fully focused on my passion for coding by
          learning React and how IT systems works.
        </AboutMeText>
        <AboutMeText>
          I'm a self-motivated learner with strong organization, time management
          and communiaction skills.{" "}
          <Stroke>
            First time in a long time I find passion in my work and the beauty
            behind creating things.
          </Stroke>{" "}
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
