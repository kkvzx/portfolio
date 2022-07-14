import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { technologiesData } from "../TechnologiesData";
import {
  Marquee,
  MarqueeH3,
  MarqueeTitle,
  MarqueeWrapper,
  AddStroke,
} from "./AnimatedTechnologiesElements.tsx";

const AnimatedTechnologies = ({
  fromRight = true,
  textDelay,
}: {
  fromRight?: boolean;
  textDelay: number;
}) => {
  // data mapping
  const htmlTechnologies = technologiesData.map((singleObj, index) => {
    if (index % 2 === 0) {
      return index != technologiesData.length - 1
        ? singleObj.name + " /"
        : singleObj.name;
    } else {
      return index != technologiesData.length - 1 ? (
        <AddStroke>{singleObj.name + " /"}</AddStroke>
      ) : (
        <AddStroke>{singleObj.name}</AddStroke>
      );
    }
  });

  // ---------start of animations----------------
  const wrapperVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "linear", delay: textDelay },
    },
    hidden: { opacity: 1, x: fromRight ? "99%" : "-100%" },
  };
  const itemsVariants = {
    visible: {
      x: fromRight === true ? -7000 : "0",
      transition: {
        duration: 120,
        ease: "linear",
        repeat: Infinity,
        delay: textDelay,
      },
    },
    hidden: { x: fromRight === true ? 0 : -4500 },
  };

  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  // ---------end of animations----------------

  return (
    <Marquee
      as={motion.div}
      ref={ref}
      variants={wrapperVariants}
      initial="hidden"
      animate={ctrls}
    >
      <MarqueeH3>
        <MarqueeWrapper
          as={motion.div}
          ref={ref}
          variants={itemsVariants}
          initial="hidden"
          animate={ctrls}
        >
          <MarqueeTitle>{htmlTechnologies}</MarqueeTitle>
          <MarqueeTitle>{htmlTechnologies}</MarqueeTitle>
          <MarqueeTitle>{htmlTechnologies}</MarqueeTitle>
        </MarqueeWrapper>
      </MarqueeH3>
    </Marquee>
  );
};

export default AnimatedTechnologies;
