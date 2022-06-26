import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  width: 100%;
  background: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: var(--background-color);
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const SingleProject = styled.div`
  width: 20%;
  background: #1f4690;
  text-align: center;
  filter: brightness(50%);
  cursor: pointer;
  position: relative;
  transition: 0.3s all;
  &:hover {
    filter: brightness(100%);
  }
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
export const ProjectPhoto = styled.img`
  position: absolute;
  object-fit: cover;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
export const ProjectTitle = styled.h2`
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const Title = styled.h1`
  margin: 4rem 0 20px 0;
  font-family: var(--secondary-font);
  letter-spacing: 2px;
  color: #ffb703;
  padding-left: 7%;
  font-size: 5rem;
  font-weight: 800;
`;
export const PortfolioText = styled.p`
  margin-bottom: 6rem;
  width: 60rem;
  padding-left: 7%;
  font-family: var(--secondary-font);
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 1.6rem;
  color: var(--text-color);
`;
