import styled from "styled-components";
import {
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  OutsideLinks,
  SingleOutsideLink,
} from "../Header/HeaderElements";
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
    border-radius:100%;
    padding:14px;
    font-size: 3rem;
    color: var(--text-color);
    cursor: pointer;
    transition: 0.3s all;
`;

export const ContentWrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--dark-header-color);
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;

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
  color: var(--text-color);
  cursor: pointer;
`;

export const SidebarLogo = styled(NavLogo)`
  color: var(--text-color);
  text-transform: uppercase;
  background: var(--dark-logo-color);
  margin: 0;
`;
export const LogoWrap = styled.div`
  width: 20%;
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
  height: 80px;
  margin: 0;
  color: var(--text-color);
`;
export const SingleOutsideLinkMobile = styled(SingleOutsideLink)`
  font-size: 2rem;
  margin: 10px;
  color: var(--text-color);
`;

export const OutsideLinksMobile = styled(OutsideLinks)`
  width: 25%;
  height: 10%;
  background: var(--dark-header-color);
  @media screen and (max-width: 800px) {
    width: 250px;
  }
`;
