import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

// Main container
export const HeaderWrapper = styled.div`
  height: 100vh;
  width: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #06283d;
  position: fixed;
  z-index: 999;
  @media screen and (max-width: 1275px) {
    display: none;
  }
`;
// ==================First element===================
export const NavLogo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: var(--text-color);
  height: 10rem;
  width: 100%;
  background: #041926;

  /* @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  } */
`;

export const HeaderLogo = styled.img`
  margin: 0 5%;
  width: 90%;
`;

// ===============Second element===============
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0;

  /* @media screen and (max-width: 1275px) {
    display: none;
  } */
`;
export const NavItem = styled.li`
  width: 100%;
`;
export const NavLinks = styled(LinkS)`
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 200;
  position: relative;
  height: 60px;
  border-top: 1px solid #414141;
  border-bottom: 1px solid #414141;
  font-family: "Oswald", sans-serif;
  letter-spacing: 1px;
  font-size: 1.2rem;
  &.active {
    .border-bottom: 3px solid violet;
  }
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

// ===========Third element=================
export const OutsideLinks = styled.div`
  width: 8rem;
  height: 10rem;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  color: var(--text-color);
  @media screen and (max-width: 1275px) {
    background: #041926;
  }
`;
export const SingleOutsideLink = styled.div`
  margin: 3px;
  height: 10rem;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 var(--additional-color);
  transition: ease-out 0.25s;

  &:hover {
    box-shadow: inset 0 -10rem 0 0 var(--additional-color);
    color: black;
  }
`;
// box-shadow: inset 0 0 0 0 var(--additional-color);
// transition: ease-out 0.25s;

// &:hover {
//   box-shadow: inset 220px 0 0 var(--additional-color);
//   color: black;
// }
