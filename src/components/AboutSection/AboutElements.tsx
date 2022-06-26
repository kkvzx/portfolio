import styled from "styled-components";
import { PortfolioText } from "../projects/ProjectsElements";

export const AboutWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 50% 50%;
  justify-items: center;
  /* align-items: center; */
  background: var(--background-color);
  color: var(--text-color);
  padding-left: 7%;
`;
export const AboutTitle = styled.h1`
  grid-column-start: -1;
  grid-column-end: 1;
  justify-self: left;
  height: 6rem;
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--additional-color);
`;
// export const ContentContainer = styled.div`
//   background: pink;
// `;
export const AboutMeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
  padding: 0 15rem;
`;
export const AboutMePhoto = styled.img`
  width: 367px;
  height: 416px;
`;
export const AboutMeHeader = styled.h1`
  font-size: 2.6rem;
  color: var(--additional-color);
  margin-bottom: 0;
`;
export const AboutMeText = styled(PortfolioText)`
  width: 50rem;
`;

export const Technologies = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 300px);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 30px;
`;
export const TechnologiesSquare = styled.div`
  width: 100%;
  height: 16.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
`;
export const SquareImage = styled.img`
  height: 100%;
  margin-bottom: 5px;
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

// TODO POPRAWIĆ RESPONSYWNOSĆ ELEMENTÓW i ZMIENIĆ OBRAZKI
