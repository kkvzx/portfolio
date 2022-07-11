import React from "react";
import { technologiesData } from "./TechnologiesData";
import { AiFillHtml5 } from "react-icons/ai";
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

const photo = require("../../img/photo2.png");

const AboutSection = () => {
  // ========maraquee start=================

  const marqueeVariants = {
    animate: {
      x: ["-5%", "-30%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };
  // ========maraquee end===================

  // const htmlTechnologiesData = technologiesData.map((singleObject) => (
  //   <TechnologiesSquare key={singleObject.id}>
  //     <SquareImage src={singleObject.photoPath}></SquareImage>
  //   </TechnologiesSquare>
  // ));
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

        <AnimatedTitle
          text="Who's this guy?"
          color="var(--additional-color)"
          size="var(--h2-font-size)"
          sizesmall="var(--h2-font-sizeMobile)"
          spacing="0.25em"
        />
        <AboutMeText>
          Hi, I’m Konrad, and I’m passionate about building things for the
          web.When I was a kid I was completely hooked to the world of computers
          and creating things so I found tutorials about C++ and managed to
          learn fundamentals of the language. In the years, I’ve graduated
          Aircraft Engineering at Silesian University of Technology - during
          that time I often used my experience in C++.During time spent at the
          airport and university I learned a lot about importance of
          standarization and complex systems such as an airplane, transport
          systems or design processes. When the chance occured after graduation
          I fully focused on my passion for coding by learning React and how
          systems in IT works. I was building games using JavaScript becouse i
          found them interesting.First time in a long time I find passion in my
          work and the beauty behind creating things. I’m now looking for a
          junior dev position or internship to finally kick start my career and
          learn among professionals.
        </AboutMeText>
      </AboutMeContainer>
      {/* ========================================= */}
      {/* ======================================== */}
      <MarqueeContainer as={motion.div} transition={{ delay: 2 }}>
        <AnimatedTechnologies fromRight={false} textDelay={1} />
        <AnimatedTechnologies fromRight={true} textDelay={1.5} />
        <AnimatedTechnologies fromRight={false} textDelay={2} />
      </MarqueeContainer>
    </AboutWrapper>
  );
};

export default AboutSection;
