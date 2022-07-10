import { motion } from "framer-motion";
import styled from "styled-components";
import { PortfolioText } from "../projects/ProjectsElements";

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--background-color);
  color: var(--text-color);
  margin-top: 5rem;
  gap: 2rem;
  @media screen and (max-width: 900px) {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: auto;
    padding: 0;
  }
`;
export const AboutmeTitleContainer = styled.div`
  width: 100%;
  justify-self: left;
  height: 6rem;
  font-weight: 800;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 6rem;

  letter-spacing: 2px;
  user-select: none;
  @media screen and (max-width: 900px) {
    justify-self: center;
    font-size: var(--big-font-sizeMobile);
  }
`;

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding-left: 6rem;

  @media screen and (max-width: 900px) {
    align-items: center;
  }
`;
export const AboutMePhoto = styled.img`
  width: 30rem;
  margin-top: 2rem;
  @media screen and (max-width: 900px) {
    width: 14rem;
  }
`;
export const AboutMeHeader = styled.h1`
  font-size: var(--h2-font-size);
  color: var(--additional-color);
  margin-bottom: 0;
  @media screen and (max-width: 900px) {
    font-size: var(--h2-font-sizeMobile);
    margin: 0;
  }
`;
export const AboutMeText = styled(PortfolioText)`
  padding: 0 10rem;
  font-size: var(--text-size);
  font-family: var(--text-font);
  margin-bottom: 5rem;
  @media screen and (max-width: 900px) {
    font-size: var(--text-sizeMobile);
    padding: 0 2rem;
    width: 95%;
  }
`;

export const Technologies = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  @media screen and (max-width: 900px) {
    height: none;
    padding: 0 2rem;
  } */
`;
export const Slider = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  background: rgba(0, 0, 0, 0.3);
`;
export const TechnologiesSquare = styled(motion.div)`
  font-size: 1.5rem;
  min-width: 11rem;
  height: 5rem;
  margin-right: 4rem;
  margin-left: 6rem;

  /* aspect-ratio: 1/ 1; */
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--text-color);
  @media screen and (max-width: 900px) {
    font-size: var(--text-sizeMobile);
    margin: 0;
  }
`;
export const SquareImage = styled.img`
  width: 3rem;
  object-fit: contain;
  object-position: center;
  position: relative;
  transition: 0.3s all;

  @media screen and (max-width: 900px) {
    width: 40%;
  }
`;
