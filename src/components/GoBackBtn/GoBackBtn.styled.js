import styled from 'styled-components';

export const Container = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 0 12px;
`;

export const Button = styled.div`
  display: flex;
  align-item: center;
  gap: 12px;
  border: 1px solid #000000;
  border-radius: 4px;
  width: 100px;
  margin: 12px;
  font-size: 16px;
  font-weight: 500;
  &:hover,
  :focus {
    background-color: tomato;
  }
`;
