import styled from 'styled-components';

import Backgroundleftlogin from '../../assets/background-left-login.svg';
import Backgroundrightlogin from '../../assets/background-right-login.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${Backgroundleftlogin}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  background: url('${Backgroundrightlogin}');
  background-color: #1e1e1e;

  p {
    color: white;
    height: 27px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 18px;
  }

  a {
    text-decoration: underline;
  }
`;

export const Title = styled.h2`
  /* width: 368px;
  height: 80px; */
  font-family: 'Parkinsans', sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 40px;
  color: #9758a6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    color: white;
    height: 27px;
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
    padding-top: 5px;
  }
`;
