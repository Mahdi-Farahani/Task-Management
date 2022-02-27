import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin-top: 15px;
  padding: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
