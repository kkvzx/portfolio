import React, { useState } from "react";
import { FaGreaterThan, FaToggleOn } from "react-icons/fa";
import { motion } from "framer-motion";
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
  CloudImg,
} from "./HeroElements";
import { nanoid } from "nanoid";
import { clouds } from "./cloudsData";
const photo = require("../../img/photo.png");

const Hero = () => {
  const [exploreActive, setExploreActive] = useState(false);

  const toggle = () => {
    setExploreActive((prev) => !prev);
  };
  // animation
  const variants = {
    hiddenL: { x: -1000 },
    hiddenR: { x: 1000 },
    showL: {
      x: [-10, 10, -10],
      y: [-5, 5, -5],
      transition: { repeat: Infinity, duration: 10, type: "spring" },
    },
    showR: {
      x: [10, -10, 10],
      y: [5, -5, 5],
      transition: { repeat: Infinity, duration: 10, type: "spring" },
    },
    transition: {
      duration: 5,
      type: "spring",
    },
  };

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <TextContainer>
          <HeroHeading>
            <HeroMainText>Hi,</HeroMainText>
            <HeroMainText>I'm Konrad</HeroMainText>
            <HeroMainText>Aircraft Engineer</HeroMainText>
            <HeroSecondaryText>Who choosed diffrent path.</HeroSecondaryText>
          </HeroHeading>
          <Img src={photo} alt="photo-png" />
          {clouds.map((singleObj) => {
            return (
              <CloudImg
                key={nanoid()}
                alt={"cloud-png"}
                src={singleObj.link}
                top={singleObj.top}
                bottom={singleObj.bottom}
                left={singleObj.left}
                right={singleObj.right}
                width={singleObj.width}
                as={motion.img}
                variants={variants}
                initial={singleObj.direction === "left" ? "hiddenL" : "hiddenR"}
                animate={singleObj.direction === "left" ? "showL" : "showR"}
                whileHover={{ scale: 1.1 }}
              />
            );
          })}
        </TextContainer>
      </HeroBg>
      <FrontPage>
        <ExploreButton
          active={exploreActive}
          onMouseEnter={() => toggle()}
          onMouseLeave={() => toggle()}
          to="projects"
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
        >
          Explore!
        </ExploreButton>
        <Circle
          to="projects"
          spy={true}
          smooth={true}
          offset={70}
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
