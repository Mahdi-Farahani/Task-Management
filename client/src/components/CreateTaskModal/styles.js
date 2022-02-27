import styled from 'styled-components';
import * as C from 'styles/colors';

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  backdrop-filter: blur(3px);
`;
export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgb(124 124 129 / 45%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  width: 50%;
  padding: 1.2rem;
  @media (max-width: 768px) {
    width: 85%;
  }
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  align-self: center;
  color: ${C.colorBlack};
  opacity: 0.7;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const TextArea = styled.textarea`
  font-size: 18px;
  box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 9%);
  width: 100%;
  height: 100px;
  border-radius: 11px;
  padding: 0.5rem;
  border: 1px solid ${C.colorGrey};
  margin-bottom: 15px;
  &::placeholder {
    opacity: 0.4;
    font-size: 12px;
  }
  &:focus {
    outline: 0;
  }
`;
export const TextInput = styled.input`
  font-size: 18px;
  box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 9%);
  width: 100%;
  border-radius: 11px;
  padding: 0.5rem;
  border: 1px solid ${C.colorGrey};
  margin-bottom: 15px;
  &::placeholder {
    opacity: 0.4;
    font-size: 12px;
  }
  &:focus {
    outline: 0;
  }
`;
export const BottomActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const TopActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;
