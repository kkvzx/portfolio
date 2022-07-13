import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 10rem;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
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
    padding-left: 0rem;
    margin-bottom: 2rem;
    height: 4rem;
  }
`;
export const FormSection = styled.div`
  width: 50%;
  min-width: 558px;
  padding-right: 2rem;
  z-index: 1;

  @media screen and (max-width: 1050px) {
    padding-left: 2rem;
    width: 100%;
    min-width: 0;
  }
`;
export const Forms = styled.form`
  width: 50%;
  position: absolute;
  bottom: 5%;
  right: 10%;

  @media screen and (max-width: 900px) {
    width: 95%;
    position: static;
  }
`;
export const Input = styled.input`
  width: 50%;
  padding: 12px;
  background: var(--project-box-singleContainer);
  box-sizing: border-box;
  resize: vertical;
  margin: 0.6rem 0;
  border: 0;
  caret-color: var(--additional-color);
  color: var(--text-color);
  font-size: 1rem;
  letter-spacing: 1px;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: var(--background-color) 5000s ease-in-out 0s;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: var(--text-color) !important;
  }

  box-shadow: inset 0 45px 0 0 var(--project-box-singleContainer);
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.35s;

  &:focus {
    outline: none;
    box-shadow: inset 0 45px 0 0 var(--project-box-singleContainer),
      inset 800px 0 0 0 var(--additional-color);
  }
  &:focus:invalid {
    box-shadow: inset 0 45px 0 0 var(--project-box-singleContainer),
      inset 800px 0 0 0 red;
  }

  &.left {
    margin-right: 1%;
    width: 49%;
  }
  &.right {
    width: 49%;
    margin-left: 1%;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
export const InputSubject = styled.input`
  padding: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  margin: 0.6rem 0;
  width: 100%;
  border: 0;
  outline: none;
  background: var(--project-box-singleContainer);
  caret-color: var(--additional-color);
  color: var(--text-color);
  font-size: 1rem;
  letter-spacing: 1px;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: var(--project-box-singleContainer) 5000s ease-in-out 0s;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: var(--text-color) !important;
  }
  box-shadow: inset 0 45px 0 0 var(--project-box-singleContainer);
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.35s;

  &:focus {
    outline: none;
    box-shadow: inset 0 45px 0 0 var(--project-box-singleContainer),
      inset 1400px 0 0 0 var(--additional-color);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
export const InputMessage = styled.textarea`
  width: 100%;
  margin: 0.6rem 0;
  padding: 12px;
  border: 0;
  box-sizing: border-box;
  resize: vertical;
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
      inset 1400px 0 0 0 var(--additional-color);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
export const InputButton = styled.input`
  background: none;
  width: 220px;
  border: 2px solid var(--additional-color);
  color: var(--additional-color);
  padding: 10px 0;
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
export const MapSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1050px) {
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const MapImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const InfoDiv = styled.div`
  position: absolute;
  top: 3rem;
  left: 6rem;
  padding: 10px 15px;
  background: rgb(0, 0, 0, 0.4);
  @media screen and (max-width: 1050px) {
    left: 2rem;
  }
`;
export const InfoText = styled.p`
  color: white;
  margin: 0;
  letter-spacing: 1px;
  font-size: var(--text-size);
  font-weight: 700;
  &.email {
    color: var(--additional-color);
    margin-top: 2rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: var(--text-sizeMobile);
  }
`;
export const InfoTextBig = styled(InfoText)`
  font-size: 1.8rem;
  margin-bottom: 15px;
`;
