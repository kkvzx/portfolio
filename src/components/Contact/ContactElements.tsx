import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 10rem;
  width: 100%;
  /* height: 100%; */
  background: var(--background-color);
  display: flex;
`;
export const FormSection = styled.div`
  width: 50%;
  min-width: 558px;
  padding-left: 6rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Forms = styled.form`
  width: 100%;
`;
export const Input = styled.input`
  width: 50%;
  padding: 12px;

  box-sizing: border-box;
  resize: vertical;
  margin: 0.6rem 0;
  &.left {
    margin-right: 1%;
    width: 49%;
  }
  &.right {
    width: 49%;
    margin-left: 1%;
  }
`;
export const InputSubject = styled.input`
  width: 50%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  margin: 0.6rem 0;
  width: 100%;
`;
export const InputMessage = styled.textarea`
  width: 100%;
  margin: 0.6rem 0;
  padding: 12px;

  box-sizing: border-box;
  resize: vertical;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
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
  box-shadow: inset 0 0 0 0 var(--additional-color);
  transition: ease-out 0.25s;

  &:hover {
    box-shadow: inset 220px 0 0 var(--additional-color);
    color: black;
  }
`;
export const MapSection = styled.div`
  width: 50%;
  height: 57rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const MapImg = styled.img`
  width: 57rem;
  height: 57rem;
  object-fit: cover;
`;

export const InfoDiv = styled.div`
  background: black;
  opacity: 0.85;
  position: absolute;
  top: 2rem;
  left: 4rem;
  padding: 10px 15px;
`;
export const InfoText = styled.p`
  color: var(--text-color);
  margin: 0;
  letter-spacing: 1px;
  &.email {
    color: var(--additional-color);
    margin-top: 2rem;
  }
`;
