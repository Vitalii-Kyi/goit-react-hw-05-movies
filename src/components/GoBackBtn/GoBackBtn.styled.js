import styled from 'styled-components';

export const Container = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 10px;
  border: 1px solid gray;
  border-radius: 8px;
  width: 100px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  color: gray;
  &:hover,
  :focus {
    background-color: #d5ead8;
  }
`;
