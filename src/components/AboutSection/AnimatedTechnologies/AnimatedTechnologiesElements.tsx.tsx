import styled from "styled-components";

export const Marquee = styled.div`
  width: 100%;
  padding: 0 0;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  text-align: center;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
export const MarqueeH3 = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-color);
  margin: 0;
`;
export const MarqueeWrapper = styled.div`
  width: 100000px;
`;
export const MarqueeTitle = styled.div`
  margin-right: 20px;
  float: left;
`;

export const Stroke = styled.span`
  color: var(--additional-color);
`;
export const AddStroke = styled.span`
  color: transparent;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: var(--additional-color);
`;
