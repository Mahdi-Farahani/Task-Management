import styled from 'styled-components';
import * as C from 'styles/colors';
import {Button} from 'antd';

export const ButtonComponent = styled(Button)`
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${C.colorSecondary};
  }
`;
