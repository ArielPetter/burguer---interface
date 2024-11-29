import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  font-size: 22px;
  font-weight: 400;
  border-radius: 5px;
  background-color: rgba(151, 88, 166, 1);
  color: #ffffff;
  border: 0;
  font-family: 'Poppins', sans-serif;
  transition:
    background-color 0.3s ease,
    border 0.4s ease;

  &:hover {
    background-color: #6f357c;
    border: 1px solid;
  }
`;
