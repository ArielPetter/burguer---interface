import CategoriesCarousel from '../../components/CategoriesCarousel/categoriesCarousel.jsx';
import OffersCarousel from '../../components/CategoriesCarousel/offersCarousel.jsx';
import { api } from '../../services/api.js';

import { useEffect, useState } from 'react';

import { LogoIcon } from '../../components/LogoIcon';
import iconPerson from '../../assets/user-icon.png';
import iconOrders from '../../assets/iconOrders.png';
import backgroundHome from '../../assets/backgroundHome.svg';
import backgroundMenu from '../../assets/backgroundCategoria.png';
import {
  Container,
  HeaderContainer,
  StyledLogoContainer,
  Link,
  ContainerBar,
  GreetingContainer,
  StyledLabel,
  StyledImageContainer,
  StyledImg,
  LinkSair,
  ContainerOrders,
  NotificationBooble,
  BackgroundHome,
  BackgroundMenu,
} from './styles';

export function Home() {
  const [userName, setUserName] = useState('');
  const [ordersCount, setOrdersCount] = useState();

  useEffect(() => {
    async function fetchOrders() {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          toast.error('Token inválido');
          return;
        }

        const response = await api.get('/orders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrdersCount(response.data.length);

        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.name) {
          setUserName(user.name);
        }
      } catch (error) {
        console.error('Erro ao buscar pedidos: ', error);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div>
      <Container>
        <HeaderContainer>
          <StyledLogoContainer>
            <LogoIcon />
          </StyledLogoContainer>
          <p className="LinkHome">
            <Link to="/home">Home</Link>
          </p>
          <ContainerBar />
          <p className="LinkEntrar">
            <Link to="/login">Entrar</Link>
          </p>
          <ContainerBar />
          <p className="LinkCadastrar">
            <Link to="/register">Cadastrar</Link>
          </p>
          <StyledImageContainer>
            <StyledImg src={iconPerson} alt="iconeUser" />
            <GreetingContainer>
              <StyledLabel>
                Olá, <span>{userName || 'Visitante'}</span>
              </StyledLabel>
              <LinkSair to="/login">Sair</LinkSair>
            </GreetingContainer>
            <ContainerOrders>
              <StyledImg src={iconOrders} alt="iconePedidos" />
              <NotificationBooble>{ordersCount}</NotificationBooble>
              <p>Pedidos</p>
            </ContainerOrders>
          </StyledImageContainer>
        </HeaderContainer>
        <BackgroundHome>
          <img src={backgroundHome} alt="backgroundHome" />
          <h1>Bem-Vindo!</h1>
        </BackgroundHome>
        <BackgroundMenu>
          <div className="carousel-wrapper">
            <CategoriesCarousel />
            <OffersCarousel />
          </div>
          <img src={backgroundMenu} alt="backgroundMenu" />
        </BackgroundMenu>
      </Container>
    </div>
  );
}
