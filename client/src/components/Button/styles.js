import styled from 'styled-components';
import * as C from 'styles/colors';
import {Button} from 'antd';

export const ButtonComponent = styled(Button)`
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background-color: ${(props) =>
    props.btnmodel === 'secondary' ? C.colorBtnSecondary : C.colorPrimary};
  margin: 3px;
  &:hover {
    background-color: ${(props) =>
      props.btnmodel === 'secondary' ? '#e05168' : C.colorSecondary};
  }
`;
