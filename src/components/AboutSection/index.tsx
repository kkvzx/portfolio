import React from "react";
import { technologiesData } from "./TechnologiesData";
import { AiFillHtml5 } from "react-icons/ai";
import {
  AboutMeContainer,
  AboutMePhoto,
  AboutMeHeader,
  AboutMeText,
  AboutWrapper,
  Technologies,
  TechnologiesSquare,
  SquareImage,
  AboutmeTitleContainer,
  Slider,
} from "./AboutElements";
import AnimatedTitle from "../AnimatedTitle";
import { motion } from "framer-motion";

const photo = require("../../img/photo2.png");

const AboutSection = () => {
  const htmlTechnologiesData = technologiesData.map((singleObject) => (
    <TechnologiesSquare
      key={singleObject.id}
      initial={{ x: -3300 }}
      animate={{ x: 2000 }}
      transition={{ duration: 40, repeat: Infinity, type: "mirror" }}
    >
      <SquareImage src={singleObject.photoPath}></SquareImage>
    </TechnologiesSquare>
  ));
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
      <Slider>{htmlTechnologiesData}</Slider>

      <AboutMeContainer>
        <AboutMePhoto src={photo}></AboutMePhoto>
        {/* <Technologies>{htmlTechnologiesData}</Technologies> */}

        <AnimatedTitle
          text="Who's this guy?"
          color="var(--additional-color)"
          size="var(--h2-font-size)"
          sizesmall="var(--h2-font-sizeMobile)"
          spacing="0.25em"
          // colorSwap={false}
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
    </AboutWrapper>
  );
};

export default AboutSection;
