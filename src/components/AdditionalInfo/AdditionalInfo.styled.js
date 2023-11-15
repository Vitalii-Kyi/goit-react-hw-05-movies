import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 12px;
`;

export const SubTitle = styled.h3`
  margin-top: 24px;
`;

export const List = styled.ul`
  margin-top: 12px;
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  border: 1px solid gray;
  border-radius: 8px;
  width: 100%;
  color: gray;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 6px 12px;
  &:hover,
  :focus {
    color: #ffffff;
    background-color: #c90913;
  }
  &.active {
    color: #ffffff;
    background-color: #c90913;
  }
`;
