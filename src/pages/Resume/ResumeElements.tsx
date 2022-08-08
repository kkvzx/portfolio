import { AiOutlineFilePdf } from "react-icons/ai";
import styled from "styled-components";
import { SingleProject } from "../../components/projects/ProjectsElements";
interface props {
  left: boolean;
}

export const ResumeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 2rem 12rem 6rem 18rem;
  @media screen and (max-width: 1750px) {
    margin: 1rem 4rem 2rem 10rem;
  }
  @media screen and (max-width: 1275px) {
    margin: 1rem 4rem;
  }
  @media screen and (max-width: 475px) {
    margin: 2rem 1rem;
  }
`;
export const PersonalInfomrationContainer = styled.div`
  width: 40%;
  height: 18rem;
  background: var(--project-box-color);
  border-radius: 30px;
  color: var(--text-color);
  transition: 0.3s all;

  &:hover {
    box-shadow: 0 0 0.5em 0.1em var(--additional-color);
    transform: scale(1.02);
  }
`;
export const Bolder = styled.div`
  font-weight: 700;
  display: inline;
`;
export const FirstContainer = styled(PersonalInfomrationContainer)`
  width: 71%;
  text-align: center;
  position: relative;
  margin: 0;
  margin-right: 1%;
  margin-bottom: 1%;
  @media screen and (max-width: 1550px) {
    width: 60%;
    padding-left: 2rem;
    justify-content: center;
  }
  @media screen and (max-width: 1150px) {
    width: 100%;
    padding-left: 2rem;
    margin-right: 0;
  }
  @media screen and (max-width: 760px) {
    height: 12em;
  }
  @media screen and (max-width: 385px) {
    text-align: left;
    height: 8rem;
  }
`;
export const NameH1 = styled.h1`
  color: var(--animated-logo-color);
  font-style: var(--secondary-font);
  font-size: 6rem;
  letter-spacing: -5px;
  /* position: absolute; */
  @media screen and (max-width: 760px) {
    font-size: 3rem;
    letter-spacing: 0;
  }
  @media screen and (max-width: 385px) {
    font-size: 2rem;
  }
`;
export const Title = styled.h2`
  position: absolute;
  bottom: 7%;
  font-size: var(--h2-font-size);
  right: 10%;
  text-decoration: underline;
  text-decoration-color: var(--additional-color);
  color: var(--text-color);
  @media screen and (max-width: 760px) {
    font-size: var(--h2-font-sizeMobile);
    position: relative;
    text-align: right;
  }
  @media screen and (max-width: 385px) {
    font-size: 1rem;
    text-align: left;
    margin-left: 2rem;
  }
`;

// SECOND DIV
export const SecondContainer = styled(PersonalInfomrationContainer)`
  width: 27%;
  /* min-width: 353px; */
  height: 18rem;
  margin: 0;
  margin-left: 1%;
  margin-bottom: 1%;
  padding: 1rem 3rem;
  display: flex;
  font-size: var(--text-size);
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1550px) {
    width: 38%;
    padding-left: 2rem;
    justify-content: center;
  }
  @media screen and (max-width: 1150px) {
    margin-left: 0;
    margin-right: 1%;
    margin-top: 1%;
  }
  @media screen and (max-width: 1040px) {
    width: 100%;
    margin-right: 0;
  }
`;
export const IconSpan = styled.span`
  font-size: 1.2rem;
  margin-right: 2px;
  color: var(--animated-logo-color);
`;

export const StandardText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin: 4px;
  color: var(--animated-logo-color);
  font-family: var(--main-font);
  display: block;
`;
export const AddressTo = styled.a`
  color: var(--text-color);
  font-family: var(--main-font);
  text-decoration: none;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--additional-color);
    transition: transform 0.2s ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
// Third div

export const ThirdDiv = styled(PersonalInfomrationContainer)`
  width: 58%;
  margin: 1% 1% 1% 0;
  min-width: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem 6rem 1rem 2rem;
  @media screen and (max-width: 1150px) {
    width: 60%;
    margin-left: 1%;
    margin-right: 0;
  }
  @media screen and (max-width: 1060px) {
    width: 540px;
  }
  @media screen and (max-width: 1040px) {
    width: 100%;
    min-width: 100px;
    margin-left: 0;
  }
  @media screen and (max-width: 630px) {
    height: 25em;
  }
`;
export const SecondaryHeader = styled.h2`
  grid-column-start: -1;
  grid-column-end: 1;
  text-align: left;
  font-size: var(--h2-font-size);
  color: var(--animated-logo-color);
  margin-bottom: 1rem;
`;
export const NormalText = styled.p`
  color: var(--text-color);
  font-family: var(--main-font);
`;

// fourthDiv
export const FourthDiv = styled(PersonalInfomrationContainer)`
  width: 40%;
  margin: 1% 0 1% 1%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem 6rem 1rem 2rem;
  @media screen and (max-width: 1150px) {
    width: 50%;
    margin-right: 1%;
    margin-left: 0;
  }
  @media screen and (max-width: 1040px) {
    width: 100%;
    min-width: 100px;
    margin-right: 0;
  }
  @media screen and (max-width: 630px) {
    min-height: 320px;
    padding: 1rem 3rem 1rem 2rem;
  }
`;

// fifth div

export const FifthDiv = styled(FourthDiv)`
  align-content: center;
  width: 38%;
  margin: 1% 1% 1% 0;
  @media screen and (max-width: 1150px) {
    width: 48%;
    margin-left: 1%;
    margin-right: 0;
  }
  @media screen and (max-width: 1040px) {
    width: 100%;
    min-width: 100px;
  }
`;
export const FifthUl = styled.ul`
  margin: 0;
`;
export const FifthLi = styled.li`
  margin: 1px;
`;
// six
export const EducationDiv = styled(PersonalInfomrationContainer)`
  width: 60%;
  margin: 1% 0 1% 1%;
  padding: 1rem 6rem 1rem 2rem;
  @media screen and (max-width: 1150px) {
    width: 100%;
    margin-top: 1%;
    margin-left: 0;
  }
  @media screen and (max-width: 630px) {
    height: 25em;
  }
`;
// SEVENTH
export const SixthDiv = styled.div`
  width: 68%;
  border-radius: 30px;
  background: var(--project-box-color);
  display: grid;
  margin: 1% 1% 1% 0;
  grid-template-columns: auto auto auto;
  grid-template-rows: 5rem 18rem;
  padding: 1rem 2rem 1rem 2rem;
  &:hover {
    box-shadow: 0 0 0.5em 0.1em var(--additional-color);
    transform: scale(1.02);
  }
  @media screen and (max-width: 1360px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
  @media screen and (max-width: 930px) {
    grid-template-columns: auto;
    grid-template-rows: 4rem auto auto auto auto;
  }
`;

export const SeventhDiv = styled(ThirdDiv)`
  width: 100%;
  margin: 0;
  margin-top: 1%;
  @media screen and (max-width: 1360px) {
    width: 68%;
    margin-right: 0;
    margin-left: 1%;
    height: 23rem;
  }
  @media screen and (max-width: 1040px) {
    width: 100%;
    min-width: 100px;
    margin-left: 0;
  }
  @media screen and (max-width: 630px) {
    height: 32em;
  }
`;

export const ExpContainer = styled.div`
  width: 15rem;
  margin-right: 8px;
  @media screen and (max-width: 930px) {
    width: 100%;
  }
`;

export const Colored = styled.span`
  color: var(--additional-color);
`;
export const EightDiv = styled(PersonalInfomrationContainer)`
  width: 30%;
  height: 25rem;
  margin: 1% 0 1% 1%;
  padding: 1rem 0 1rem 2rem;
  @media screen and (max-width: 1360px) {
    margin-right: 1%;
    margin-left: 0;
    margin-top: 1%;
    height: 23rem;
  }
  @media screen and (max-width: 1040px) {
    width: 100%;
    min-width: 100px;
    margin-right: 0;
  }
  @media screen and (max-width: 630px) {
    height: 14em;
  }
`;

export const DownloadLink = styled.a`
  margin-top: 16px;
  font-size: 4rem;
  color: var(--text-color);
  &:visited {
    color: var(--text-color);
  }
`;
