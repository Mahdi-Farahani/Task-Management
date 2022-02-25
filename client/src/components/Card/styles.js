import styled from 'styled-components';
import * as C from 'styles/colors';
import {Button} from 'antd';

const handlePriorityColor = (status) => {
  switch (status) {
    case 'low':
      return '#acadad';
    case 'medium':
      return '#dbb84d';
    case 'high':
      return '#f0293d';
    default:
      break;
  }
};

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${C.colorWhite};
  padding: 0.5rem;
  border-radius: 8px;
  margin-top: 6px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 10px 10px 20px -10px rgb(0 0 0 / 32%);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  border: 2px solid #fff;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  align-self: flex-start;
  color: ${C.colorBlack};
  margin-bottom: 15px;
`;
export const Description = styled.h2`
  font-weight: 400;
  font-size: 12px;
  align-self: flex-start;
  color: ${C.colorBlack};
  opacity: 0.8;
  margin-bottom: 5px;
`;
export const Priority = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  align-self: flex-start;
  color: ${C.colorBlack};
  background-color: ${(props) => handlePriorityColor(props.priority)};
  border-radius: 16px;
  padding: 0.2rem;
  margin: 10px 0px 10px 0px;
  width: 22%;
  color: ${C.colorWhite};
`;
export const AddButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  font-weight: 600;
  color: ${C.colorWhite};
  background-color: ${C.colorPrimary};
  border-radius: 8px;
  width: 30%;
  padding: 0.3rem;
  cursor: pointer;
  border: none;
  :hover {
    background-color: ${C.colorSecondary};
  }
`;
