import React, { useState } from "react";
import { FaGreaterThan, FaToggleOn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeroBg,
  HeroContainer,
  HeroMainText,
  TextContainer,
  Img,
  ExploreButton,
  FrontPage,
  Circle,
  CloudsContainer,
  CloudImg,
  TitleContainer,
  SmallImg,
} from "./HeroElements";
import { nanoid } from "nanoid";
import { clouds } from "./cloudsData";
import AnimatedTitle from "../AnimatedTitle";
const photo = require("../../img/photo.png");
const smallImg = require("../../img/flaming.png");
interface props {
  title: string;
  // disabled?: boolean;
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
  // banner animation
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  const letterAnimation = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };
  const AnimatedLetters = ({ title }: props) => (
    <motion.span variants={banner} initial="initial" animate="animate">
      {[...title].map((letter) => (
        <motion.span key={nanoid()} variants={letterAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );

  // ========end of animations=============

  return (
    <HeroContainer id="hero">
      <HeroBg darkMode={props.darkMode}>
        <TextContainer>
          <TitleContainer>
            <AnimatedTitle
              text="Hi,"
              color="var(--animated-logo-color)"
              size="var(--big-font-size)"
              sizesmall="var(--big-font-sizeMobile)"
              // colorSwap={false}
            />
            <AnimatedTitle
              text="I'm Konrad"
              color="var(--animated-logo-color)"
              size="var(--big-font-size)"
              sizesmall="var(--big-font-sizeMobile)"
              // colorSwap={false}
            />
            <AnimatedTitle
              text="Aircraft Engineer"
              color="var(--animated-logo-color)"
              size="var(--big-font-size)"
              sizesmall="var(--big-font-sizeMobile)"
              // colorSwap={false}
            />
            <AnimatedTitle
              text="Junior Front-End Developer"
              color="var(--animated-logo-color)"
              size="var(-text-size)"
              sizesmall="var(--text-font-sizeMobile)"
              // colorSwap={false}
              spacing="0.25em"
            />
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
        <ExploreButton
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Explore!
        </ExploreButton>
        <Circle
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <FaGreaterThan />
        </Circle>
      </FrontPage>
    </HeroContainer>
  );
};

export default Hero;
