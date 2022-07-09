import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

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
  background: #08324c;
`;
export const HeroBg = styled.div`
  width: 110%;
  height: 50vh;
  margin-top:-3%;
  transform: rotateZ(-3deg);
  overflow: hidden;
  background: linear-gradient(-45deg,#DFF6FF, #47B5FF, #1363DF, #06283D);
	background-size: 400% 400%;
	animation: gradient 13s ease infinite;
  display:flex;
  justify-content:space-between;
  position:relative;
  z-index:1;
  padding-left:7%;
  @media screen and (max-width: 900px) {
    height:75vh;
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
	};

`;
export const TextContainer = styled.div`
  width: 80%;
  transform: rotateZ(3deg);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 3;
`;
export const HeroHeading = styled.div`
  font-size: 2rem;
  margin-top: 10%;
  margin-left: 7rem;
  z-index: 3;
  align-self: flex-start;
`;
export const Img = styled.img`
  width: 26rem;
  height: auto;
  z-index: 3;
  @media screen and (max-height: 1000px) {
    width: 19rem;
  }
  @media screen and (max-height: 700px) {
    width: 16rem;
  }

  @media screen and (max-width: 900px) {
    width: 21rem;
  }
`;
/*============clouds================ */
const Clouds = styled.img`
  position: absolute;
  width: 18rem;
  z-index: 1;
`;

export const CloudImg = styled(Clouds)<Props>`
  z-index: ${(p) => (p.zindex ? p.zindex : undefined)};
  top: ${(p) => (p.top ? p.top : undefined)}%;
  left: ${(p) => (p.left ? p.left : undefined)}%;
  right: ${(p) => (p.right ? p.right : undefined)}%;
  bottom: ${(p) => (p.bottom ? p.bottom : undefined)}%;
  width: ${(p) => (p.width ? p.width : undefined)}rem;
`;

/*============END OF clouds================ */

export const HeroMainText = styled.h1`
  color: white;
  font-weight: 700;
  margin: 2px;
  font-family: "Oswald", sans-serif;
  padding: 0;
  line-height: 1;
  color: white;

  font-size: var(--big-font-size);
  @media screen and (max-width: 980px) {
    font-size: var(--big-font-sizeMobile);
  }
  @media screen and (max-height: 1050px) {
    font-size: var(--big-font-sizeMobile);
  }
`;
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
`;
export const ExploreButton = styled(LinkS)<{ active: boolean }>`
  padding: 20px 30px;
  overflow: hidden;
  background: linear-gradient(-45deg, #DFF6FF, #47B5FF, #1363DF, #06283D);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  border:none;
  border-radius:20px;
  font-weight:800;
  font-family: "Oswald", sans-serif;
  letter-spacing:1px;
  cursor:pointer;
  color:white;
  font-family:
  transition:all 2s ease-out;
  font-size:1.2rem;
  ${({ active }) =>
    active && "  transition:all 0.3s ease-out; font-size:1.6rem;"}

}
  @media screen and (max-width: 900px) {
    padding:10px 20px;
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
  margin-top: 15px;
  margin-bottom: 5rem;
  border: 2px solid var(--additional-color);
  color: var(--additional-color);
  cursor: pointer;
  @media screen and (max-width: 900px) {
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
