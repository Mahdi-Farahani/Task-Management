import styled from 'styled-components';
import * as C from 'styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${C.colorGrey};
  width: 100%;
  height: calc(100vh - 11rem);
  border-radius: 8px;
  margin: 10px;
  padding: 0.8rem;
  background: linear-gradient(to top, #ffffff, #6dd5fa, #2980b9);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  align-self: flex-start;
  color: ${C.colorBlack};
  margin-bottom: 5px;
  padding: 0.5rem;
`;
export const Header = styled.div`
  border-radius: 8px;
  box-shadow: 10px 10px 20px -10px rgb(0 0 0 / 5%);
  backdrop-filter: blur(10px);
  background: rgb(166 194 247 / 30%);
  border: 1px solid rgb(255 255 255 / 50%);
  margin-bottom: 5px;
`;
