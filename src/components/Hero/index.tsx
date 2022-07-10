import React, { useState } from "react";
import { FaGreaterThan, FaToggleOn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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
  TitleContainer,
} from "./HeroElements";
import { nanoid } from "nanoid";
import { clouds } from "./cloudsData";
import AnimatedTitle from "../AnimatedTitle";
const photo = require("../../img/photo.png");

interface props {
  title: string;
  // disabled?: boolean;
}

const Hero = () => {
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
  // ----------

  const BannerRowTop = ({ title }: props) => {
    return (
      <div className={"banner-row"}>
        <HeroMainText
          as={motion.h1}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
          className="row-col"
        >
          <AnimatedLetters title={title} />
        </HeroMainText>
      </div>
    );
  };
  const BannerRowBottom = ({ title }: props) => {
    return (
      <div className={"banner-row center"}>
        <HeroMainText
          as={motion.h1}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
          className="scroll"
        >
          <AnimatedLetters title={title} />
        </HeroMainText>
      </div>
    );
  };
  const BannerRowCenter = ({ title }: props) => {
    return (
      <HeroMainText
        as={motion.h1}
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      >
        <AnimatedLetters title={title} />
      </HeroMainText>
    );
  };

  // -----------

  // ========end of animations=============

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <TextContainer>
          <TitleContainer>
            <AnimatedTitle
              text="Hi,"
              color="white"
              size="var(--big-font-size)"
              sizesmall="var(--big-font-sizeMobile)"
              colorSwap={true}
            />
            <AnimatedTitle
              text="I'm Konrad"
              color="white"
              size="var(--big-font-size)"
              sizesmall="var(--big-font-sizeMobile)"
              colorSwap={true}
            />
            <AnimatedTitle
              text="Aircraft Engineer"
              color="white"
              size="var(--big-font-size)"
              sizesmall="var(--big-font-sizeMobile)"
              colorSwap={true}
            />
            <AnimatedTitle
              text="Who choosed a diffrent way"
              color="white"
              size="var(-text-size)"
              sizesmall="var(--text-font-sizeMobile)"
              colorSwap={true}
              spacing="0.25em"
            />
          </TitleContainer>

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
              />
            );
          })}
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
