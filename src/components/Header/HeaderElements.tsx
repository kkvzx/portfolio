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

  /* @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(1);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #656565;
  } */
`;
// ==================First element===================
export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  height: 15rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
export const LogoWrapper = styled(LinkR)`
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;

  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 37%;
    right: 30px;
    /* transform: translate(-100%, 60%); */
    font-size: 2rem;
    color: var(--text-color);
    cursor: pointer;
    transition: 0.3s all;
  }
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

  @media screen and (max-width: 768px) {
    display: none;
  }
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
  border-top: 1px solid #656565;
  border-bottom: 1px solid #656565;
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
  width: 100%;
  height: 15rem;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  color: var(--text-color);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SingleOutsideLink = styled.div`
  margin: 3px;
  height: 30px;
  cursor: pointer;
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
    transition: transform 0.2s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
