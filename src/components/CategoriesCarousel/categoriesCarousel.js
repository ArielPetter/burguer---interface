import styled from 'styled-components';

export const StyledH2 = styled.h2`
  color: rgba(151, 88, 166, 1);
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin: 70vh 0 10vh 0;
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

export const ContainerImagensCategories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;
