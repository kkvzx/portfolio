import React from "react";
import { technologiesData } from "./TechnologiesData";
import { AiFillHtml5 } from "react-icons/ai";
import {
  AboutMeContainer,
  AboutMePhoto,
  AboutMeHeader,
  AboutMeText,
  AboutTitle,
  AboutWrapper,
  Technologies,
  TechnologiesSquare,
  SquareImage,
} from "./AboutElements";

const photo = require("../../img/photo.png");

const AboutSection = () => {
  const htmlTechnologiesData = technologiesData.map((singleObject) => (
    <TechnologiesSquare key={singleObject.id}>
      <SquareImage src={singleObject.photoPath}></SquareImage>
      {singleObject.name}
    </TechnologiesSquare>
  ));
  return (
    <AboutWrapper id="about">
      <AboutTitle>About me</AboutTitle>
      <AboutMeContainer>
        <AboutMePhoto src={photo}></AboutMePhoto>
        <AboutMeHeader>Who's this guy?</AboutMeHeader>
        <AboutMeText>
          Hello, I’m Konrad, and I’m passionate about building things for the
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
      <Technologies>{htmlTechnologiesData}</Technologies>
    </AboutWrapper>
  );
};

export default AboutSection;
