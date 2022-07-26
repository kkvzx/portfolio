import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeroBg,
  HeroContainer,
  TextContainer,
  Img,
  FrontPage,
  Circle,
  CloudsContainer,
  CloudImg,
  TitleContainer,
  LinedLink,
  GitLink,
  PageLink,
} from "./HeroElements";
import { nanoid } from "nanoid";
import { clouds } from "./cloudsData";
import AnimatedTitle from "../AnimatedTitle";
import {
  GithubLinkInBox,
  OutsideWrapper,
} from "../ProjectBox/ProjectBoxElements";
const photo = require("../../img/photo.png");
const smallImg = require("../../img/flaming.png");
interface props {
  title: string;
}
interface heroProps {
  darkMode: boolean;
}

const Hero = (props: heroProps) => {
  const [exploreActive, setExploreActive] = useState(false);

  const toggle = () => {
    setExploreActive((prev) => !prev);
  };
  // ===========start of animations============
  // clouds animation
  const variants = {
    hiddenL: { x: -2000 },
    hiddenR: { x: 2000 },
    showL: {
      x: [-10, 10, -10],
      y: [-5, 5, -5],
      transition: {
        repeat: Infinity,
        duration: 10,
        type: "spring",
        stiffness: 100,
      },
    },
    showR: {
      x: [10, -10, 10],
      y: [5, -5, 5],
      transition: {
        repeat: Infinity,
        duration: 10,
        type: "spring",
        stiffness: 200,
      },
    },
  };
  // The rest of animations is in AnimatedTitle function
  // ========end of animations=============

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <TextContainer>
          <TitleContainer>
            <AnimatedTitle
              text="Hi,"
              color="var(--animated-logo-color)"
              size="var(--big-font-size)"
              sizesmall="var(--big-font-sizeMobile)"
            />
            <AnimatedTitle
              text="I'm Konrad"
              color="var(--animated-logo-color)"
              size="var(--big-font-size)"
              sizesmall="var(--big-font-sizeMobile)"
            />

            <AnimatedTitle
              text="Junior Front-End Developer"
              color="var(--animated-logo-color)"
              size="var(-text-size)"
              sizesmall="var(--text-font-sizeMobile)"
              spacing="0.25em"
            />
            <OutsideWrapper>
              <PageLink href="https://github.com/kkvzx" target="_blank">
                <GitLink />
              </PageLink>
              <PageLink
                href="https://www.linkedin.com/in/konrad-kazusek-630b1716a/"
                target="_blank"
              >
                <LinedLink />
              </PageLink>
            </OutsideWrapper>
          </TitleContainer>

          <Img src={photo} alt="photo-png" />
          <CloudsContainer
            as={motion.div}
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
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
                  initial={
                    singleObj.direction === "left" ? "hiddenL" : "hiddenR"
                  }
                  animate={singleObj.direction === "left" ? "showL" : "showR"}
                />
              );
            })}
          </CloudsContainer>
        </TextContainer>
      </HeroBg>
      <FrontPage>
        <Circle to="about" spy={true} smooth={true} offset={0} duration={500}>
          <FaGreaterThan />
        </Circle>
      </FrontPage>
    </HeroContainer>
  );
};

export default Hero;
