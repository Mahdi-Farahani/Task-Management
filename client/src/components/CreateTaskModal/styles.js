import styled from 'styled-components';
import * as C from 'styles/colors';
import {Button} from 'antd';

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  backdrop-filter: blur(2px);
`;
export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${C.colorWhite};
  border-radius: 8px;
  width: 50%;
  height: 50%;
  box-shadow: 10px 10px 20px -10px rgb(0 0 0 / 13%);
  padding: 0.7rem;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  align-self: center;
  color: ${C.colorBlack};
  margin: 5px 0px 15px 0px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 100%;
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
export const DropDown = styled.select`
  align-self: flex-start;
  font-size: 14px;
  box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 9%);
  width: 30%;
  border-radius: 11px;
  padding: 0.8rem;
  border: 1px solid ${C.colorGrey};
  margin-bottom: 15px;
  margin-left: -8px;
`;
export const AddButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  font-weight: 500;
  color: ${C.colorWhite};
  background-color: ${C.colorPrimary};
  border-radius: 8px;
  width: 30%;
  height: 40px;
  cursor: pointer;
  border: none;
  :hover {
    background-color: ${C.colorSecondary};
  }
`;
