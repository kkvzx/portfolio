import { motion } from "framer-motion";
import styled from "styled-components";
import { PortfolioText } from "../projects/ProjectsElements";

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: transparent;
  color: var(--text-color);
  margin: 8rem 0;
  @media screen and (max-width: 900px) {
    padding: 2rem;
  }
`;
export const AboutmeTitleContainer = styled.div`
  width: 100%;
  height: 6rem;
  font-weight: 800;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 6rem;
  z-index: 1;

  user-select: none;
  @media screen and (max-width: 1050px) {
    justify-content: ;
    padding-left: 0;
  }
  @media screen and (max-width: 900px) {
    padding-left: 0;
    justify-content: center;
    font-size: var(--big-font-sizeMobile);
  }
`;

export const AboutMeContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 8rem;

  @media screen and (max-width: 900px) {
    align-items: center;
    padding-left: 0;
  }
`;
export const AboutMePhoto = styled.img`
  width: 30rem;
  @media screen and (max-width: 900px) {
    width: 23rem;
  }
`;

export const AboutMeText = styled(PortfolioText)`
  width: 70rem;
  text-align: left;
  padding: 0;
  margin-bottom: 1em;
  font-size: var(--text-size);

  font-family: var(--main-font);
  @media screen and (max-width: 1400px) {
    padding: 0 6rem;
  }
  @media screen and (max-width: 990px) {
    font-size: var(--text-sizeMobile);
    width: 80%;
    padding: 0 2rem;
  }
`;

export const MarqueeContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 0;
  top: 10rem;
`;
