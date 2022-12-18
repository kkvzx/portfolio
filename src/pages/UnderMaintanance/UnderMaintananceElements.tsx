import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const CommunicateContainer = styled.div`
  max-height: 600px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d4f78;
  border-radius: 16px;
  flex-direction: column;
  padding: 5% 10%;
  @media screen and (max-width: 675px) {
    min-height: 200px;
    padding: 0;
    width: 100%;
  }
`;
export const MainHeader = styled.h1`
  font-size: 2rem;
  color: white;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 675px) {
    font-size: 1.3rem;
  }
`;
export const HeaderText = styled.p`
  font-size: 1.6rem;
  margin: 0;
  color: white;
  @media screen and (max-width: 675px) {
    font-size: 1.1rem;
  }
`;
export const InlineText = styled.p`
  color: var(--additional-color);
  font-size: 1.6rem;
  margin: 0;
  @media screen and (max-width: 675px) {
    font-size: 1.1rem;
  }
`;
