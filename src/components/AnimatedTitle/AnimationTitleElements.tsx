import { motion } from "framer-motion";
import styled from "styled-components";

interface titleProps {
  size: string;
  sizesmall: string;
  color: string;
  additional?: string;
  dark?: boolean;
}
interface spacing {
  spacing: string;
}

export const Title = styled.h1`
  color: white;
  margin: 2px;
  padding: 0;
`;
export const Word = styled(motion.span)<spacing>`
  display: inline-block;
  margin-right: ${({ spacing }) => spacing};
  white-space: nowrap;
  @media screen and (max-width: 980px) {
    margin-right: 0.25em;
  }
`;

export const Character = styled(motion.span)<titleProps>`
  display: inline-block;
  margin-right: -0.05em;
  cursor: default;
  color: ${(p) => p.color};
  font-size: ${(p) => p.size};
  line-height: 1;
  font-family: "Oswald", sans-serif;
  font-weight: 700;

  @media screen and (max-width: 990px) {
    font-size: ${(p) => p.sizesmall};
  }
  @media screen and (max-height: 680px) {
    font-size: ${(p) => p.sizesmall};
  }
`;
