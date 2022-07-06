import styled from "styled-components";
import { PortfolioText } from "../projects/ProjectsElements";

export const AboutWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto auto;
  justify-items: center;
  align-items: flex-end;
  background: var(--background-color);
  color: var(--text-color);
  padding-left: 6rem;
  margin-top: 5rem;
  @media screen and (max-width: 900px) {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: auto;
    padding: 0;
  }
`;
export const AboutTitle = styled.h1`
  grid-column-start: -1;
  grid-column-end: 1;
  justify-self: left;
  height: 6rem;
  font-size: var(--big-font-size);
  font-weight: 800;
  margin: 0;
  letter-spacing: 2px;
  color: var(--additional-color);
  margin-bottom: 2rem;
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
  @media screen and (max-width: 900px) {
    align-items: center;
  }
`;
export const AboutMePhoto = styled.img`
  width: 367px;
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
  width: 70%;
  padding: 0;
  font-size: var(--text-size);
  font-family: var(--text-font);
  margin-bottom: 2rem;
  @media screen and (max-width: 900px) {
    font-size: var(--text-sizeMobile);
  }
`;

export const Technologies = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2%;
  position: relative;
  padding-right: 2rem;

  @media screen and (max-width: 900px) {
    height: none;
    padding: 0 2rem;
  }
`;
export const TechnologiesSquare = styled.div`
  font-size: 1.5rem;
  aspect-ratio: 1/ 1;
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
  width: 80%;
  object-fit: contain;
  object-position: center;
  position: relative;
  transition: 0.3s all;

  @media screen and (max-width: 900px) {
    width: 40%;
  }
`;

// TODO POPRAWIĆ RESPONSYWNOSĆ ELEMENTÓW i ZMIENIĆ OBRAZKI
