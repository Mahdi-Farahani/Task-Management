import styled from 'styled-components';
import * as C from 'styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to top, #ffffff, #6dd5fa, #2980b9);
`;
export const Title = styled.h2`
  font-weight: 600;
  color: ${C.colorBlack};
  margin: 0;
`;
