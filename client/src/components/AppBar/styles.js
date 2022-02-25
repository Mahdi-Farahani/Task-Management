import styled from 'styled-components';
import * as C from 'styles/colors';
import {Button} from 'antd';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
export const Title = styled.h2`
  font-weight: 600;
  color: ${C.colorBlack};
`;
export const AddButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${C.colorWhite};
  background-color: ${C.colorPrimary};
  border-radius: 8px;
  width: 10%;
  height: 40px;
  cursor: pointer;
  border: none;
  :hover {
    background-color: ${C.colorSecondary};
  }
`;
