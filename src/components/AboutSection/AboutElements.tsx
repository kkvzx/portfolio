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
`;
export const AboutTitle = styled.h1`
  grid-column-start: -1;
  grid-column-end: 1;
  justify-self: left;
  height: 6rem;
  font-size: 5rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: 2px;

  color: var(--additional-color);
`;
// export const ContentContainer = styled.div`
//   background: pink;
// `;
export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  width: 60%;
  padding: 0;
`;

export const Technologies = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  /* grid-template-rows: repeat(3, 300px); */
  grid-template-columns: repeat(3, 1fr);
  /* justify-items: center; */
  gap: 2%;
`;
export const TechnologiesSquare = styled.div`
  font-size: 1.5rem;
  aspect-ratio: 1/ 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--text-color);
`;
export const SquareImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  object-position: center;
`;

// TODO POPRAWIĆ RESPONSYWNOSĆ ELEMENTÓW i ZMIENIĆ OBRAZKI
