import styled from "styled-components";

export const ResumeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
export const PersonalInfomrationContainer = styled.div`
  width: 40%;
  min-height: 260px;
  min-width: 335px;
  border: 2px solid red;
  margin: 5px;
  height: 20rem;
  background: green;
  color: var(--text-color);
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;
export const NameH1 = styled.h1`
  color: var(--animated-logo-color);
  font-size: var(--big-font-size);
`;
