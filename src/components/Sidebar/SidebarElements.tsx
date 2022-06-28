import styled from "styled-components";
import { NavItem, NavLinks, NavLogo, NavMenu } from "../Header/HeaderElements";
import { FaTimes } from "react-icons/fa";

export const SidebarWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 9999;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1275px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: rgba(0, 0, 0, 0.3);
    font-size: 3rem;
    color: var(--text-color);
    cursor: pointer;
    transition: 0.3s all;
  }
`;

export const ContentWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--background-color);

  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "`100%" : 0)};
  right: ${({ isOpen }) => (isOpen ? "`0" : "-100%")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ClosingIcon = styled(FaTimes)`
  color: white;
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 3rem;
  cursor: pointer;
`;

export const SidebarLogo = styled(NavLogo)`
  color: var(--text-color);
  text-transform: uppercase;
  margin: 0;
`;

export const SidebarMenu = styled(NavMenu)`
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 15rem;
  align-content: center;
  justify-items: center;
  padding: 0;
`;
export const SideItem = styled(NavItem)``;
export const SideLinks = styled(NavLinks)`
  margin: 20px;
  height: 60px;
  margin: 0;
  color: var(--text-color);
`;
