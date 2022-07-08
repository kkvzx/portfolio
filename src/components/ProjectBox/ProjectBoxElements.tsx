import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import styled from "styled-components";
import { SingleOutsideLink } from "../Header/HeaderElements";
import { GithubLink, ReadMore } from "../projects/ProjectsElements";
import { keyframes } from "styled-components";

export const BoxWrapper = styled.div`
  width: 80%;
  height: 80%;
  position: fixed;
  background: rgb(6, 40, 61, 0.9);
  top: 10%;
  left: auto;
  border-radius: 40px;
  padding: 2rem 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s all;
  z-index: 6;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  @media screen and (max-width: 1400px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1250px) {
    padding: 0 7rem;
  }
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
  @media screen and (max-width: 800px) {
    height: 60%;
  }
`;
// export const PhotoContainer = styled.div`
//   max-width: 30rem;
//   min-width: 20rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   @media screen and (max-width: 1250px) {
//     min-width: 10rem;
//   }
//   @media screen and (max-width: 1000px) {
//     display: none;
//   }
// `;
// export const Photo = styled.img`
//   width: 100%;
//   object-fit: cover;
// `;
export const PhotoContainer = styled.div`
  width: 40%;
  position: relative;
  max-width: 30rem;
  min-width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const Photo = styled.img`
  width: 100%;
  background:"black"
  max-height: 30rem;
  border-radius: 10px;
`;

export const WindowForPhoto = styled.div<{ active: boolean }>`
  opacity: 0;
  transform: scale(1);
  transition: 2s all;

  ${({ active }) =>
    active &&
    `  
    transition: 2s all
    transform: scale(1.1);
    opacity:1;
    `};
`;

export const InformationContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 4rem;
  padding-right: 0
  display: flex;
  flex-direction: column;
  align-items: flex-start;
    @media screen and (max-width: 1400px) {
    width:100%;
  }

      @media screen and (max-width: 1000px) {
    width: 100%;
  }
    @media screen and (max-width: 100px) {
    width:100%;
    align-items:center;
    justify-content:center
  }
    @media screen and (max-width: 560px) {
    padding: 1rem;
  }
`;
export const ProjectTitle = styled.h1`
  color: var(--additional-color);
  font-size: 3.8rem;
  margin: 0;
  font-weight: 700;
  @media screen and (max-width: 1600px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 1300px) {
    font-size: 1.8rem;
  }
`;
export const TechnologiesUsed = styled.div``;
export const TechnologiesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const TechnologiesLi = styled.li`
  display: inline-block;
  background: var(--background-color);
  color: white;
  margin: 2px;
  padding: 2px 6px;
  font-weight: 200;
  letter-spacing: 1px;
`;
export const DifficultiesToOvercomeContainer = styled.div`
  margin-top: 20px;
`;
export const DifficultiesToOvercomeHeader = styled.h2`
  color: var(--additional-color);
  letter-spacing: 1px;
  font-size: 2rem;
  @media screen and (max-width: 1600px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1300px) {
    font-size: 1.3rem;
  }
`;
export const DifficultiesToOvercomeText = styled.p`
  color: var(--text-color);
  font-weight: 200;
  font-size: var(--text-size);
  letter-spacing: 1px;
  margin-bottom: 50px;
  @media screen and (max-width: 1600px) {
    font-size: var(--text-size-mobile);
  }
`;

export const GithubLinkInBox = styled(GithubLink)`
  margin: 0;
  font-size: var(--h2-font-size);
  transition: 0.3s all;
  &:hover {
    color: var(--additional-color);
    cursor: pointer;
  }
`;
export const SingleOutsideBoxLink = styled(SingleOutsideLink)`
  ${ReadMore} {
    float: left;
    margin-left: 10px;
    border: 2px solid var(--additional-color);
    box-shadow: inset 0 0 0 0 var(--additional-color);
    transition: ease-out 0.3s;
    font-size: var(--text-size);

    &:hover {
      box-shadow: inset 110px 0 0 var(--additional-color);
      color: black;
    }
  }
`;

export const LiveDemo = styled.div`
  width: 10rem;
  height: 10rem;
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`
  border: 2px solid var(--text-color);
  font-size: 3.3rem;
  color: white;
  border-radius: 100%;
  padding: 4px;
  cursor: pointer;
  margin-left: 50px;
  box-shadow: inset 0 0 0 0 var(--text-color);
  transition: 0.2s all;
  z-index: 999;
  position: absolute;
  top: 45%;
  left: 0;

  &:hover {
    box-shadow: inset -50px 0 0 var(--text-color);
    border: 2px solid black;
    color: black;
  }
  @media screen and (max-width: 1000px) {
    top: 65%;
  }
`;
export const RightArrow = styled(AiOutlineArrowRight)`
  border: 2px solid var(--text-color);
  font-size: 3.3rem;
  color: white;
  border-radius: 100%;
  cursor: pointer;
  margin-right: 50px;
  box-shadow: inset 0 0 0 0 var(--text-color);
  transition: 0.2s all;
  z-index: 999;
  position: absolute;
  top: 45%;
  right: 0;
  &:hover {
    box-shadow: inset 50px 0 0 var(--text-color);
    border: 2px solid black;
    color: black;
  }
  @media screen and (max-width: 1000px) {
    top: 65%;
  }
`;

export const RightArrowPhoto = styled(BsChevronCompactRight)`
  font-size: 8rem;
  cursor: pointer;
  color: rgba(114, 114, 144, 0.5);
  z-index: 999;
  position: absolute;
  top: 40%;
  right: -9%;

  &:active {
    color: rgba(114, 114, 144, 0.8);
  }
  @media screen and (max-width: 560px) {
    margin-left: 5px;
  }
`;
export const LeftArrowPhoto = styled(BsChevronCompactLeft)`
  font-size: 8rem;
  cursor: pointer;
  color: rgba(114, 114, 144, 0.5);
  z-index: 999;
  position: absolute;
  top: 40%;
  left: -9%;

  &:active {
    color: rgba(114, 114, 144, 0.8);
  }
  @media screen and (max-width: 560px) {
    margin-left: 5px;
  }
`;

export const PhotoCounter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  bottom: 0;
  left: 0;
`;
export const CircleDots = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 2;
  align-self: flex-end;
`;
export const SingleDot = styled.div<{ active: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  margin: 4px;
  background: rgb(114, 114, 144);
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;
