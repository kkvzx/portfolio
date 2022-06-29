import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: var(--background-color);
  position: relative;
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const SingleProject = styled.div`
  width: 20%;
  background: #1f4690;
  text-align: center;
  /* filter: brightness(50%); */
  cursor: pointer;
  position: relative;
  transition: 0.3s all;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  @media screen and (max-width: 900px) {
    width: 33.3%;
  }
  @media screen and (max-width: 380px) {
    width: 50%;
    font-size: 0.5rem;
  }
`;
export const ProjectPhoto = styled.img`
  position: absolute;
  object-fit: cover;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: brightness(10%);
  transition: 0.4s all;
  &:hover {
    filter: brightness(100%);
  }
`;
export const ProjectTitle = styled.h2`
  color: white;
  position: absolute;
  width: 100%;
`;
export const Title = styled.h1`
  margin: 4rem 0 20px 0;
  font-family: var(--secondary-font);
  letter-spacing: 2px;
  color: #ffb703;
  padding-left: 6rem;
  font-size: var(--big-font-size);
  font-weight: 800;
  @media screen and (max-width: 900px) {
    font-size: var(--big-font-sizeMobile);
    padding-left: 2rem;
  }
`;
export const PortfolioText = styled.p`
  margin-bottom: 6rem;
  padding: 0 30% 0 6rem;
  font-family: var(--secondary-font);
  font-weight: 200;
  letter-spacing: 1px;
  font-size: var(--text-size);
  color: var(--text-color);
  @media screen and (max-width: 900px) {
    font-size: var(--text-sizeMobile);
    margin-bottom: 2rem;
    padding-left: 2rem;
  }
`;
