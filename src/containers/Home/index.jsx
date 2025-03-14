import { useEffect, useState } from 'react';

import { LogoIcon } from '../../components/LogoIcon';
import iconPerson from '../../assets/user-icon.png';
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
} from './styles';

export function Home() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.name) {
      setUserName(user.name);
    }
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
          </StyledImageContainer>
        </HeaderContainer>
      </Container>
    </div>
  );
}
