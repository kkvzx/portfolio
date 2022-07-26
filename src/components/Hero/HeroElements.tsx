import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface Props {
  top?: number;
  bottom?: number;
  zindex?: number;
  left?: number;
  right?: number;
  width?: number;
}

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  color: white;
  overflow: hidden;
  background: transparent;
`;
export const HeroBg = styled.div`
  width: 110%;
  height: 75vh;
  margin-top: -3%;
  transform: rotateZ(-3deg);
  overflow: hidden;
  background: var(--linear-gradient-color);
  background-size: 400% 400%;
  animation: gradient 13s ease infinite;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding-left: 7%;
  @media screen and (max-width: 900px) {
    height: 75vh;
    @media screen and (max-height: 800px) {
      height: 80vh;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export const TitleContainer = styled.div`
  width: 40%;
  min-width: 520px;
  align-self: flex-start;
  margin-top: 12%;
  z-index: 9999;
  @media screen and (max-width: 900px) {
    padding-left: 2rem;
    margin-top: 30%;
    min-width: 400px;
  }
  @media screen and (max-height: 680px) {
    margin-top: 1rem;
  }
`;
export const TextContainer = styled.div`
  width: 80%;
  transform: rotateZ(3deg);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 3;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin: 4rem 0;
  }
`;
export const HeroHeading = styled.div`
  font-size: 2rem;
  margin-left: 7rem;
  z-index: 3;
  align-self: flex-start;
`;
export const Img = styled.img`
  width: 30rem;
  height: auto;
  z-index: 3;
  @media screen and (max-height: 1000px) {
    width: 22rem;
  }
  @media screen and (max-height: 700px) {
    width: 16rem;
  }

  @media screen and (max-width: 900px) {
    width: 21rem;
    margin-left: -40%;
  }
  @media screen and (max-width: 500px) {
    width: 15rem;
    margin-left: 0;
  }
`;
/*============clouds================ */
export const CloudsContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
`;

const Clouds = styled.img`
  position: absolute;
  width: 18rem;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    width: 5rem;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const CloudImg = styled(Clouds)<Props>`
  z-index: ${(p) => (p.zindex ? p.zindex : undefined)};
  top: ${(p) => (p.top ? p.top : undefined)}%;
  left: ${(p) => (p.left ? p.left : undefined)}%;
  right: ${(p) => (p.right ? p.right : undefined)}%;
  bottom: ${(p) => (p.bottom ? p.bottom : undefined)}%;
  width: ${(p) => (p.width ? p.width : undefined)}rem;
  @media screen and (max-width: 1550px) {
    width: 8rem;
  }
`;

/*============END OF clouds================ */

export const HeroSecondaryText = styled.p`
  color: white;
  font-size: var(--h2-font-size);
  font-weight: 200;
  letter-spacing: 1px;
  font-family: "Oswald", sans-serif;
  @media screen and (max-width: 900px) {
    font-size: var(--h2-font-sizeMobile);
  }
  @media screen and (max-height: 1050px) {
    font-size: var(--h2-font-sizeMobile);
  }
`;
export const FrontPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const Circle = styled(LinkS)`
  border-radius: 100%;
  font-size: 1.5rem;
  transform: rotateZ(90deg);
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 2rem;
  border: 2px solid var(--additional-color);
  color: var(--additional-color);
  cursor: pointer;
  transition: 0.3 all;
  &:hover {
    transform: scale(1.05) rotateZ(90deg);
  }
  @media screen and (max-width: 900px) {
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
export const SmallImg = styled.img`
  position: absolute;
  width: 15rem;
  bottom: 5rem;
  left: -300px;
`;

export const GitLink = styled(FaGithub)`
  font-size: var(--h2-font-size);
  color: var(--animated-logo-color);
  cursor: pointer;
  &:hover {
    color: var(--additional-color);
  }
`;
export const LinedLink = styled(FaLinkedin)`
  font-size: var(--h2-font-size);
  color: var(--animated-logo-color);
  cursor: pointer;
  &:hover {
    color: var(--additional-color);
  }
`;
export const PageLink = styled.a`
  :hover {
    fill: var(--additional-color);
  }
`;
