import { Link as ReactLink, Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  background-color: rgba(31, 31, 31, 1);
  padding: 30px;
  width: 100vw;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledLogoContainer = styled.div`
  padding: 0vw 5vw;
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  width: 42px;
  height: 11px;
  font-weight: 400;
  size: 14px;
  margin-left: 3vw;
  line-height: 81%;
  text-align: center;
`;

export const ContainerBar = styled.div`
  background-color: rgba(98, 94, 94, 1);
  width: 1px;
  height: 30px;
  margin-left: 3vw;
`;

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  margin-left: 0.5vw;
  color: #ffffff;

  span {
    color: rgba(151, 88, 166, 1);
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const StyledImg = styled.img`
  width: 23px;
  height: 21px;
  object-fit: cover;
`;

export const LinkSair = styled(ReactRouterLink)`
  text-decoration: none;
  color: red;
  width: 42px;
  height: 11px;
  font-weight: 400;
  size: 14px;
  margin-left: 0.5vw;
  line-height: 81%;
  text-decoration: none;

  &:hover {
    color: rgb(128, 2, 2);
  }

  &:active {
    color: rgb(90, 0, 0);
  }
`;
