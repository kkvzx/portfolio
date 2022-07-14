import styled from "styled-components";
import { SingleProject } from "../projects/ProjectsElements";
interface props {
  left: boolean;
}

export const ResumeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
export const PersonalInfomrationContainer = styled.div`
  width: 35%;
  min-height: 260px;
  min-width: 335px;
  margin: 10px;
  background: var(--project-box-color);
  border-radius: 30px;
  color: var(--text-color);
  transition: 0.3s all;

  &:hover {
    border: 1px solid var(--additional-color);
    transform: scale(1.02);
  }
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

export const FirstContainer = styled(PersonalInfomrationContainer)`
  text-align: center;
  position: relative;
  margin-left: 6rem;
`;
export const NameH1 = styled.h1`
  color: var(--animated-logo-color);
  font-style: var(--secondary-font);
  width: 100%;
  font-size: 6rem;
  letter-spacing: -5px;
  position: absolute;
  bottom: 10%;
  right: 0%;
`;
export const Title = styled.h2`
  position: absolute;
  bottom: 15%;
  font-size: var(--h2-font-size);
  right: 4%;
  text-decoration: underline;
  text-decoration-color: var(--additional-color);
  color: var(--text-color);
`;

// SECOND DIV
export const SecondContainer = styled(PersonalInfomrationContainer)`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 3rem;
`;
export const IconSpan = styled.span`
  font-size: 1.2rem;
  margin-right: 2px;
  color: var(--animated-logo-color);
`;

export const StandardText = styled.p<props>`
  display: flex;
  width: 40%;
  margin: 1rem;
  align-items: center;
  justify-content: ${(p) => (p.left ? "flex-end" : "flex-start")};
  font-size: 1rem;
  color: var(--animated-logo-color);
  display: flex;
  position: relative;
`;

// Third div

export const ThirdDiv = styled(PersonalInfomrationContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem 6rem 1rem 2rem;
  margin-left: 6rem;
`;
export const SecondaryHeader = styled.h2`
  font-size: var(--h2-font-size);
  color: var(--animated-logo-color);
  margin-bottom: 1rem;
`;
export const NormalText = styled.p`
  color: var(--text-color);
`;

// fourthDiv
export const FourthDiv = styled(PersonalInfomrationContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem 6rem 1rem 2rem;
`;

// fifth div

export const FifthDiv = styled(ThirdDiv)`
  align-content: center;
  margin-left: 6rem;

  width: 25%;
`;
export const FifthUl = styled.ul`
  margin: 0;
`;
export const FifthLi = styled.li`
  margin: 1px;
`;

export const SixthDiv = styled(PersonalInfomrationContainer)`
  width: 45%;
  padding: 1rem 6rem 1rem 2rem;
`;

export const SeventhDiv = styled(ThirdDiv)`
  width: 71%;
`;

export const ExpContainer = styled.div`
  width: 2rem;
`;
