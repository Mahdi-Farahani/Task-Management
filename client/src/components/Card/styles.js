import styled from 'styled-components';
import * as C from 'styles/colors';

const handlePriorityColor = (status) => {
  switch (status) {
    case 'Low':
      return '#acadad';
    case 'Medium':
      return '#f7bb65';
    case 'High':
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
  background: #fff;
  box-shadow: 10px 10px 20px -10px rgb(0 0 0 / 13%);
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
export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
export const Data = styled.h4`
  align-self: center;
  font-size: 12px;
  opacity: 0.5;
  margin: 0;
`;
