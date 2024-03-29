import styled from "styled-components";

export const MainWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  justify-items: center;
  background: var(--background-color);
`;
export const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 8rem;
  @media screen and (max-width: 1275px) {
    padding-left: 0;
  }
`;
