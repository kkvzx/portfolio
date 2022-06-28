import React, { useState } from "react";
import { FaGreaterThan, FaToggleOn } from "react-icons/fa";
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
  const [exploreActive, setExploreActive] = useState(false);

  const toggle = () => {
    setExploreActive((prev) => !prev);
  };

  return (
    <HeroContainer id="hero">
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
        <ExploreButton
          active={exploreActive}
          onMouseEnter={() => toggle()}
          onMouseLeave={() => toggle()}
        >
          Explore!
        </ExploreButton>
        <Circle
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onMouseEnter={() => toggle()}
          onMouseLeave={() => toggle()}
        >
          <FaGreaterThan />
        </Circle>
      </FrontPage>
    </HeroContainer>
  );
};

export default Hero;
