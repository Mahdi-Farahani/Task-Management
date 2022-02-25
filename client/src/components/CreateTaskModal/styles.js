import styled from 'styled-components';
import * as C from 'styles/colors';

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  backdrop-filter: blur(2px);
`;
export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${C.colorWhite};
  border-radius: 8px;
  width: 50%;
  height: 50%;
  box-shadow: 10px 10px 20px -10px rgb(0 0 0 / 13%);
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  align-self: flex-start;
  color: ${C.colorBlack};
  margin-bottom: 5px;
`;
