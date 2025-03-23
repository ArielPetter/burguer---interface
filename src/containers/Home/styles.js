import { Link as ReactLink, Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Adiciona essa linha para garantir o layout em coluna */
  height: 100vh;
  width: 100vw;
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: rgba(31, 31, 31, 1);
  padding: 6vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  overflow: hidden;
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
  width: 25px;
  height: auto;
  object-fit: cover;

  display: flex;
  align-items: center;
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

export const ContainerOrders = styled.div`
  margin-left: 1vw;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    color: #ffffff;
    width: 48px;
    height: 10px;
    font-weight: 400;
    font-size: 14px;
    margin-right: 1vw;

    display: flex;
    align-items: center;
  }
`;

export const NotificationBooble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: orange;
  color: white;
  border-radius: 50%;

  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: 700;
  margin-left: -1rem;
  margin-bottom: 1.7rem;
`;

export const BackgroundHome = styled.div`
  position: relative;
  width: 100vw;

  img {
    width: 100%;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    top: 10vh;
    left: 70vw;
    transform: translate(0%, 0%);

    color: #ffffff;
    max-width: 435px;
    height: 20px;
    font-size: 90px;

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    font-family: 'Road Rage', cursive;
  }
`;

export const BackgroundMenu = styled.div`
  position: relative;
  width: 100vw;
  height: auto;

  img {
    width: 100vw;
    height: auto;
    object-fit: cover;
  }

  div {
    width: 100%;
  }

  .carousel-wrapper {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 100%;
  }
`;
