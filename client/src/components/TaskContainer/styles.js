import styled from 'styled-components';
import * as C from 'styles/colors';
import {Button} from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${C.colorGrey};
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 8px;
  margin: 10px;
  padding: 0.8rem;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  align-self: flex-start;
  color: ${C.colorBlack};
  margin-bottom: 5px;
`;
