import styled from "styled-components";

export const BoxWrapper = styled.div`
  width: 80%;
  height: 80%;
  position: fixed;
  background: black;
  opacity: 0.9;
  top: 10%;
  left: auto;
  border-radius: 40px;
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all;
  z-index: 1;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
export const PhotoContainer = styled.div`
  width: 33%;
  height: 100%;
  background: green;
`;
export const Photo = styled.img``;
export const InformationContainer = styled.div`
  width: 67%;
  height: 100%;
  background: red;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ProjectTitle = styled.h1`
  color: var(--additional-color);
  font-size: 4rem;
  margin: 0;
  font-weight: 700;
`;
