import { motion, useCycle } from "framer-motion";
import React, { useRef } from "react";
import { FaBars, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import {
  NavLogo,
  OutsideLinks,
  SingleOutsideLink,
  HeaderLogo,
} from "../Header/HeaderElements";
import {
  ClosingIcon,
  ContentWrapper,
  LogoWrap,
  MobileIcon,
  OutsideLinksMobile,
  SidebarLogo,
  SidebarMenu,
  SidebarWrapper,
  SideItem,
  SideLinks,
  SingleOutsideLinkMobile,
} from "./SidebarElements";

type NavMobileMenuProps = {
  toggle: () => void;
  isOpen: boolean;
};

const Sidebar = (props: NavMobileMenuProps) => {
  // animations
  const sidebarAnimations = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 95% 40px)`,
      transition: {
        type: "spring",
        duration: 0.3,
      },
    }),
    closed: {
      clipPath: "circle(0 at 95% 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  // end of animations
  return (
    <SidebarWrapper
      as={motion.div}
      initial={false}
      animate={props.isOpen ? "open" : "closed"}
    >
      <MobileIcon>
        <FaBars onClick={() => props.toggle()} />
      </MobileIcon>
      <ContentWrapper
        as={motion.div}
        variants={sidebarAnimations}
        onClick={() => props.toggle()}
      >
        <ClosingIcon></ClosingIcon>
        <SidebarLogo>
          <LogoWrap>
            <HeaderLogo src="https://i.imgur.com/V83tec7.png" />
          </LogoWrap>
        </SidebarLogo>
        <SidebarMenu>
          <SideItem>
            <SideLinks to="hero" onClick={() => props.toggle()}>
              Start Page
            </SideLinks>
          </SideItem>
          <SideItem>
            <SideLinks to="about" onClick={() => props.toggle()}>
              About Me
            </SideLinks>
          </SideItem>
          <SideItem>
            <SideLinks to="projects" onClick={() => props.toggle()}>
              My Portfolio
            </SideLinks>
          </SideItem>
          <SideItem>
            <SideLinks to="contact" onClick={() => props.toggle()}>
              Contact
            </SideLinks>
          </SideItem>
        </SidebarMenu>
        <OutsideLinksMobile>
          <SingleOutsideLinkMobile>
            <FaGithub />
          </SingleOutsideLinkMobile>
          <SingleOutsideLinkMobile>
            <FaLinkedin />
          </SingleOutsideLinkMobile>
          <SingleOutsideLinkMobile>
            <FaMoon />
          </SingleOutsideLinkMobile>
          <SingleOutsideLinkMobile>
            <FaSun />
          </SingleOutsideLinkMobile>
        </OutsideLinksMobile>
      </ContentWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
