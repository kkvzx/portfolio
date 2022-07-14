import styled from "styled-components";
import { PortfolioText } from "../projects/ProjectsElements";

export const ContactWrapper = styled.div`
  margin-top: 10rem;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  @media screen and (max-width: 1050px) {
    text-align: center;
  }
`;
export const ContactTitleContainer = styled.div`
  justify-self: left;
  height: 6rem;
  padding-left: 6rem;
  margin: 0;
  letter-spacing: 2px;
  user-select: none;
  @media screen and (max-width: 1050px) {
    text-align: center;
    padding-left: 0rem;
    margin-bottom: 0rem;
    height: 4rem;
  }
`;
export const FormSection = styled.div`
  width: 100%;
  text-align: left;
  min-width: 558px;
  padding-right: 2rem;
  z-index: 1;

  @media screen and (max-width: 1050px) {
    padding-left: 2rem;
    min-width: 0;
    & > ${PortfolioText} {
      text-align: center;
    }
  }
`;
export const Forms = styled.form`
  width: 100%;
  padding: 0 6rem;
  margin-bottom: 5%;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0 2rem;
  }
`;
export const Input = styled.input`
  width: 50%;
  padding: 12px;
  height: 50px;
  background: var(--project-box-singleContainer);
  box-sizing: border-box;
  resize: vertical;
  /* margin: 8px 8px; */
  border: inset 2px solid var(--project-box-singleContainer);
  border-radius: 8px;
  caret-color: var(--additional-color);
  color: var(--text-color);
  font-size: 1rem;
  font-family: var(--main-font);

  box-shadow: inset 0 47px 0 0 var(--project-box-singleContainer);
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.35s;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: var(--background-color) 5000s ease-in-out 0s;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: var(--text-color) !important;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 47px 0 0 var(--project-box-singleContainer),
      inset 800px 0 0 0 var(--additional-color);
  }
  &:focus:invalid {
    box-shadow: inset 0 47px 0 0 var(--project-box-singleContainer),
      inset 1250px 0 0 0 red;
  }

  &.left {
    margin-right: 1%;
    width: 49%;
    @media screen and (max-width: 600px) {
      width: 100%;
      margin: 0;
      margin-bottom: 8px;
    }
  }
  &.right {
    width: 49%;
    margin-left: 1%;
    @media screen and (max-width: 600px) {
      width: 100%;
      margin: 0;
      margin-top: 8px;
    }
  }
  &::placeholder {
    color: var(--text-color);
  }
  &:focus::placeholder {
    color: var(--animated-logo-color);
  }
`;
export const InputSubject = styled.input`
  width: 100%;
  margin: 16px 0;
  padding: 12px;
  border: inset 2px solid var(--project-box-singleContainer);
  border-radius: 8px;
  font-family: var(--main-font);
  box-sizing: border-box;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  outline: none;
  caret-color: var(--additional-color);
  color: var(--text-color);
  font-size: 1rem;
  letter-spacing: 1px;
  background: var(--project-box-singleContainer);
  resize: none;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: var(--project-box-singleContainer) 5000s ease-in-out 0s;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: var(--text-color) !important;
  }

  box-shadow: inset 0 47px 0 0 var(--project-box-singleContainer);
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.35s;

  &:focus {
    outline: none;
    box-shadow: inset 0 47px 0 0 var(--project-box-singleContainer),
      inset 2500px 0 0 0 var(--additional-color);
  }
  &::placeholder {
    color: var(--text-color);
  }
  &:focus::placeholder {
    color: var(--animated-logo-color);
  }
`;
export const InputMessage = styled.textarea`
  width: 100%;
  margin: 8px 0;
  padding: 12px;
  border: inset 2px solid var(--project-box-singleContainer);
  border-radius: 8px;
  font-family: var(--main-font);
  box-sizing: border-box;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  outline: none;
  caret-color: var(--additional-color);
  color: var(--text-color);
  font-size: 1rem;
  letter-spacing: 1px;
  background: var(--project-box-singleContainer);
  resize: none;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: var(--project-box-singleContainer) 5000s ease-in-out 0s;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: var(--text-color) !important;
  }
  box-shadow: inset 0 97px 0 0 var(--project-box-singleContainer);
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.35s;

  &:focus {
    outline: none;
    box-shadow: inset 0 97px 0 0 var(--project-box-singleContainer),
      inset 2500px 0 0 0 var(--additional-color);
  }
  &::placeholder {
    color: var(--text-color);
  }
  &:focus::placeholder {
    color: var(--animated-logo-color);
  }
`;
export const InputButton = styled.input`
  background: none;
  width: 220px;
  border: 2px solid var(--additional-color);
  border-radius: 8px;
  color: var(--additional-color);
  padding: 15px 5px;
  letter-spacing: 3px;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  float: right;
  font-weight: 700;
  box-shadow: inset 0 0 0 0 var(--additional-color);
  transition: ease-out 0.25s;

  &:hover {
    box-shadow: inset 220px 0 0 var(--additional-color);
    color: var(--animated-header-color);
  }
`;

export const InfoDiv = styled.div`
  width: 100%;
  background: var(--dark-header-color);
  display: flex;
  justify-content: space-between;
  padding: 0 6rem;
  @media screen and (max-width: 1050px) {
    padding: 0 2rem;
    margin-top: 2rem;
  }
`;
export const InfoText = styled.p`
  color: white;

  margin: 0;
  letter-spacing: 1px;
  font-size: var(--text-size);
  color: var(--text-color);
  &.email {
    color: var(--additional-color);
    margin-top: 2rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: var(--text-sizeMobile);
  }
`;
export const InfoTextBig = styled(InfoText)`
  margin-bottom: 15px;
  font-size: var(--text-size);
`;
export const SingleInfo = styled.div`
  text-align: left;
  display: inline-block;
`;
