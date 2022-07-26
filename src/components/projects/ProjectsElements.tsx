import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: transparent;
  position: relative;
  @media screen and (max-width: 1050px) {
    align-items: center;
    text-align: center;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 6rem;
  flex-wrap: wrap;
  @media screen and (max-width: 990px) {
    padding-left: 2rem;
    justify-content: center;
  }
`;
export const ReadMore = styled.a`
  font-size: 1.4rem;
  color: var(--text-color);
  font-weight: 400;
  background: none;
  padding: 1px 10px;
  border-radius: 20px;
  margin-right: 30px;
  float: right;
  transition: 0.3s all;
`;
export const GithubLink = styled(FaGithub)`
  float: left;
  margin-left: 30px;
  font-size: 2.5rem;
  color: black;
  color: var(--text-color);
  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;
export const SingleProject = styled.div`
  min-width: 18%;
  height: auto;
  margin: 0 20px 30px 0;
  border-radius: 20px;
  text-align: center;
  background: var(--project-box-singleContainer);
  position: relative;
  overflow: hidden;

  transition: 0.3s all;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    padding-bottom: 150%;
  }
  &:hover ${ReadMore} {
    text-decoration: underline;
    text-decoration-color: var(--additional-color);
  }

  &:hover {
    box-shadow: 0 0 0.5em 0.5em black;
    transform: scale(1.02);
  }

  @media screen and (max-width: 2010px) {
    min-width: 300px;
    min-height: 520px;
  }

  @media screen and (max-width: 380px) {
    font-size: 0.5rem;
  } ;
`;

export const ProjectPhoto = styled.img<{ ended: boolean }>`
  width: 100%;
  max-height: 250px;
  position: absolute;
  object-fit: cover;
  left: 0;
  object-position: center 5%;

  top: 0;
  border-radius: 20px 20px 0 0;
  ${({ ended }) =>
    !ended &&
    `
    filter:blur(8px);
    -webkit-filter:blur(8px);
    `};

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  @media screen and (max-width: 2010px) {
    height: 40%;
  }
`;
export const InfoSection = styled.div`
  width: 100%;
  padding: 0 2em;
  position: absolute;
  @media screen and (max-width: 990px) {
    padding: 0;
  }
`;
export const ProjectInformation = styled.p`
  margin: 10px;
  font-size: 1rem;
  color: var(--text-color);
  font-family: var(--main-font);
  font-weight: 400;
  @media screen and (max-width: 990px) {
    font-size: 1rem;
  }
`;

export const ProjectTitle = styled.h2`
  color: var(--text-color);
  margin-top: 260px;
  width: 100%;
  margin-bottom: 5px;
  font-size: var(--h2-font-size);
  -moz-user-select: none;
  @media screen and (max-width: 2000px) {
    margin-top: 230px;
  }
`;

export const PortfolioText = styled.p`
  margin-bottom: 6rem;
  margin-top: 0;
  padding: 0 40% 0 6rem;
  font-family: var(--main-font);
  font-weight: 400;
  font-size: var(--text-size);
  color: var(--text-color);
  user-select: none;
  @media screen and (max-width: 1050px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 990px) {
    font-size: var(--text-sizeMobile);
    margin-bottom: 2rem;
    padding: 0 5rem;
    text-align: left;
    padding-left: auto;
    margin-top: 0;
  }
`;
