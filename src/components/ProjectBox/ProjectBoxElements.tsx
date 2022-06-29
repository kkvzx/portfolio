import styled from "styled-components";

export const BoxWrapper = styled.div`
  width: 80%;
  height: 80%;
  position: fixed;
  background: rgb(6, 40, 61, 0.9);
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
  max-width: 30rem;
  min-width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const SkipButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
`;
export const SkipBtn = styled.div`
  height: 100%;
  width: 50%;
  transition: 0.2s all;
  &.left:hover {
    box-shadow: inset 40px 0 25px -25px black;
  }

  &.right:hover {
    box-shadow: inset -40px 0 25px -25px black;
  }
`;

export const InformationContainer = styled.div`
  width: 60%;
  height: 100%;
  /* background: red; */
  padding: 4rem;
  padding-right: 0
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
export const TechnologiesUsed = styled.div``;
export const TechnologiesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const TechnologiesLi = styled.li`
  display: inline-block;
  background: var(--background-color);
  color: white;
  margin: 2px;
  padding: 2px 6px;
  font-weight: 200;
  letter-spacing: 1px;
`;
export const DifficultiesToOvercomeContainer = styled.div`
  margin-top: 20px;
`;
export const DifficultiesToOvercomeHeader = styled.h2`
  color: var(--additional-color);
  letter-spacing: 1px;
`;
export const DifficultiesToOvercomeText = styled.p`
  color: var(--text-color);
  font-weight: 200;
  font-size: var(--text-size);
  letter-spacing: 1px;
`;
