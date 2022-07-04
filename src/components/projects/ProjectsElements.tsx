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
  padding-left: 6rem;
  flex-wrap: wrap;
  @media screen and (max-width: 900px) {
    padding-left: 2rem;
  }
`;
export const ReadMore = styled.a`
  font-size: var(--text-font-size);
  color: var(--additional-color);
  font-weight: 400;
  background: none;
  padding: 1px 5px;
  border-radius: 20px;
`;
export const SingleProject = styled.div`
  width: 18%;
  margin-right: 30px;
  margin: 0 30px 30px 0;
  border-radius: 30px;
  background: #1f4690;
  text-align: center;
  background: #0e5581;
  position: relative;
  transition: 0.3s all;

  &:after {
    content: "";
    display: block;
    padding-bottom: 150%;
  }
  &:hover ${ReadMore} {
    color: var(--text-color);
    background: var(--additional-color);
  }
  /* @media screen and (max-width: 900px) {
    width: 25%;
  }
  @media screen and (max-width: 380px) {
    width: 35%;
    font-size: 0.5rem;
  } */
`;
export const ProjectPhoto = styled.img`
  width: 100%;
  max-height: 250px;
  position: absolute;
  object-fit: cover;
  left: 0;
  top: 0;
  border-radius: 20px 20px 0 0;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
export const InfoSection = styled.div`
  width: 100%;
  position: absolute;
`;
export const ProjectInformation = styled.p`
  margin: 20px;
  font-size: var(--text-font-size);
  color: var(--text-color);
  font-weight: 200;
  letter-spacing: 1px;
`;

export const ProjectTitle = styled.h2`
  color: white;
  margin-top: 75%;
  width: 100%;
  font-size: var(--h2-font-size);
  /* position: absolute; */
`;

export const Title = styled.h1`
  margin-top: 4rem;
  font-family: var(--secondary-font);
  letter-spacing: 2px;
  color: #ffb703;
  padding-left: 6rem;
  font-size: var(--big-font-size);
  font-weight: 800;
  margin-bottom: 2rem;
  @media screen and (max-width: 900px) {
    font-size: var(--big-font-sizeMobile);
    padding-left: 2rem;
  }
`;
export const PortfolioText = styled.p`
  margin-bottom: 6rem;
  margin-top: 0;
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
