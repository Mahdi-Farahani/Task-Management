import React from 'react';
import styled from 'styled-components';
import {Spin} from 'antd';

const LoadingContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  bottom: 0px;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 100;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export default function SpinnerLoading() {
  return (
    <LoadingContainer>
      <Spin size='large' />
    </LoadingContainer>
  );
}
