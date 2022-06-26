import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import {
  HeroBg,
  HeroContainer,
  HeroMainText,
  TextContainer,
  Img,
  HeroHeading,
  HeroSecondaryText,
  ExploreButton,
  FrontPage,
  Circle,
} from "./HeroElements";
const photo = require("../../img/photo.png");

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <TextContainer>
          <HeroHeading>
            <HeroMainText>Hi,</HeroMainText>
            <HeroMainText>I'm Konrad</HeroMainText>
            <HeroMainText>Aircraft Engineer</HeroMainText>
            <HeroSecondaryText>
              Who choosed diffrent path and loves learning, creating and travels
            </HeroSecondaryText>
          </HeroHeading>
          <Img src={photo} alt="photo-png" />
        </TextContainer>
      </HeroBg>
      <FrontPage>
        <ExploreButton>Explore!</ExploreButton>
        <Circle>
          <FaGreaterThan />
        </Circle>
      </FrontPage>
    </HeroContainer>
  );
};

export default Hero;
