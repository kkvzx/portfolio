import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

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
  width: 105%;
  height: 50vh;
  margin-top:-3%;
  transform: rotateZ(-3deg);
  overflow: hidden;
  background: linear-gradient(-45deg, #DFF6FF, #47B5FF, #1363DF, #06283D);
	background-size: 400% 400%;
	animation: gradient 13s ease infinite;
  display:flex;
  justify-content:space-between;
  z-index:1;
  padding-left:7%;
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
/* export const FirstContainer = styled.div`
  width: 100%;
  background: green;
  position: absolute;
  
`; */
export const TextContainer = styled.div`
  width: 80%;
  transform: rotateZ(3deg);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const HeroHeading = styled.div`
  font-size: 2rem;
  margin-top: 10%;
  align-self: flex-start;
`;
export const Img = styled.img`
  width: 21rem;
  /* height: 29.25rem; */
`;
export const HeroMainText = styled.h1`
  color: white;
  font-weight: 700;
  margin: 0;
  font-family: "Oswald", sans-serif;
`;
export const HeroSecondaryText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: 200;
  letter-spacing:1px;
  font-family: "Oswald", sans-serif;\
`;
export const FrontPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const ExploreButton = styled.button<{ active: boolean }>`
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
`;
