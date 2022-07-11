import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Title, Word, Character } from "./AnimationTitleElements";

interface titleProps {
  text: string;
  size: string;
  sizesmall: string;
  color: string;
  colorSwap?: boolean;
  spacing?: string;
}

export default function AnimatedTitle({
  text,
  size,
  color,
  sizesmall,
  spacing = "0.5em",
  colorSwap = false,
}: titleProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
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

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        type: "spring",
        stiffness: 500,
      },
    },
  };

  return (
    <Title aria-label={text} role="heading">
      {text.split(" ").map((word, index) => {
        return (
          <Word
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            spacing={spacing}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <Character
                  size={size}
                  sizesmall={sizesmall}
                  color={color}
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  whileHover={{
                    scale: 1.4,
                    color: "var(--additional-color)",

                    transition: {
                      duration: 0.01,
                    },
                  }}
                >
                  {character}
                </Character>
              );
            })}
          </Word>
        );
      })}
    </Title>
  );
}
