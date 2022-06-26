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
    <AboutWrapper>
      <AboutTitle>About me</AboutTitle>
      <AboutMeContainer>
        <AboutMePhoto src={photo}></AboutMePhoto>
        <AboutMeHeader>Who's this guy?</AboutMeHeader>
        <AboutMeText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          est, reprehenderit et iste quo laboriosam dolore animi perferendis
          officia nemo.
        </AboutMeText>
      </AboutMeContainer>
      <Technologies>{htmlTechnologiesData}</Technologies>
    </AboutWrapper>
  );
};

export default AboutSection;
