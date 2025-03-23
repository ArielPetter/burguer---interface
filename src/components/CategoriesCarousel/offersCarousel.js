import styled from 'styled-components';

export const ContainerOffers = styled.div`
  max-width: 20rem;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 20rem;
  max-width: 20rem;
  object-fit: cover;
  border-radius: 0.5rem;

  /* Estilo específico para a imagem de 'Acompanhamentos' */
  &.starterImage {
    max-height: 232.72px; /* Definindo altura para 'Acompanhamentos' */
  }
`;
