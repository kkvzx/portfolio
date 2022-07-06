import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 10rem;
  width: 100%;
  background: var(--background-color);
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;
export const FormSection = styled.div`
  width: 50%;
  min-width: 558px;
  padding-left: 6rem;
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
    width: 90%;
    left: 5%;
  }
  @media screen and (max-width: 900px) {
    position: static;
    width: 95%;
  }
`;
export const Input = styled.input`
  width: 50%;
  padding: 12px;
  background: #0e5581;
  box-sizing: border-box;
  resize: vertical;
  margin: 0.6rem 0;
  border: 0;
  caret-color: var(--additional-color);
  color: var(--text-color);
  font-size: 1rem;
  letter-spacing: 1px;

  box-shadow: inset 0 45px 0 0 #0e5581;
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.35s;

  &:focus {
    outline: none;
    box-shadow: inset 0 45px 0 0 #0e5581,
      inset 550px 0 0 0 var(--additional-color);
  }
  &:focus:invalid {
    box-shadow: inset 0 45px 0 0 #0e5581, inset 550px 0 0 0 red;
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
  width: 50%;
  padding: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  margin: 0.6rem 0;
  width: 100%;
  border: 0;
  outline: none;
  background: #0e5581;
  caret-color: var(--additional-color);
  color: var(--text-color);
  font-size: 1rem;
  letter-spacing: 1px;

  box-shadow: inset 0 45px 0 0 #0e5581;
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.35s;

  &:focus {
    outline: none;
    box-shadow: inset 0 45px 0 0 #0e5581,
      inset 1100px 0 0 0 var(--additional-color);
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
  background: #0e5581;
  resize: none;

  box-shadow: inset 0 97px 0 0 #0e5581;
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.35s;

  &:focus {
    outline: none;
    box-shadow: inset 0 97px 0 0 #0e5581,
      inset 1100px 0 0 0 var(--additional-color);
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
    color: black;
  }
`;
export const MapSection = styled.div`
  width: 100%;
  /* height: 57rem; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;

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
  height: auto;
  object-fit: cover;
`;

export const InfoDiv = styled.div`
  background: black;
  opacity: 0.85;
  position: absolute;
  top: 2%;
  left: 4rem;
  padding: 10px 15px;
`;
export const InfoText = styled.p`
  color: var(--text-color);
  margin: 0;
  letter-spacing: 1px;
  font-size: var(--text-size);
  &.email {
    color: var(--additional-color);
    margin-top: 2rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: var(--text-sizeMobile);
  }
`;
