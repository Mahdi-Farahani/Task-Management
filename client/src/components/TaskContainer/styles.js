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
  background: ${C.colorHeader};
  border-radius: 8px;
`;
