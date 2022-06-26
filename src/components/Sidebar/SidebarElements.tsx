import styled from "styled-components";
import { NavItem, NavLinks, NavMenu } from "../Header/HeaderElements";
import { FaTimes } from "react-icons/fa";

export const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  width: 30%;
  height: 100%;
  background: #f9f3ee;

  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "`100%" : 0)};
  right: ${({ isOpen }) => (isOpen ? "`0" : "-100%")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5rem 0;
  align-items: center;
`;
export const ClosingIcon = styled(FaTimes)`
  color: black;
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 2rem;
  cursor: pointer;
`;

export const SidebarLogo = styled.h1`
  color: var(--text-color);
  text-transform: uppercase;
  margin: 20px;
`;

export const SidebarMenu = styled(NavMenu)`
  flex-direction: column;
  display: flex;
  width: 12rem;
  height: 15rem;
  align-content: center;
  justify-items: center;
  padding: 0;
`;
export const SideItem = styled(NavItem)``;
export const SideLinks = styled(NavLinks)`
  margin: 20px;
  height: 30px;
  color: black;
`;
