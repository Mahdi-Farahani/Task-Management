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
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgb(124 124 129 / 13%);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 14px;
  align-self: flex-start;
  color: ${C.colorBlack};
`;
export const Description = styled.h2`
  font-weight: 400;
  font-size: 14px;
  align-self: flex-start;
  color: ${C.colorBlack};
  opacity: 0.8;
  margin-bottom: 5px;
  border-radius: 8px;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: auto;
  padding: 0.2rem;
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
  width: 25%;
  color: ${C.colorWhite};
  margin-top: 8px;
`;
export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Date = styled.h4`
  align-self: center;
  font-size: 12px;
  opacity: 0.5;
  margin: 0;
`;
export const TopActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;
