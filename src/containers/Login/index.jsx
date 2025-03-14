import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../../services/api';
import { Button } from '../../components/Button';
import logo from '../../assets/Logo-login.svg';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles';

export function Login() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter ao menos 6 caracteres')
        .required('Digite sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await toast.promise(
        api.post('./session', {
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando dados',
          success: {
            render() {
              setTimeout(() => {
                navigate('/home');
              }, 2000);
              return 'Seja Bem-vindo';
            },
          },
        },
      );
      const { token, name, id, admin } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({ name, id, admin }));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('Email ou senha incorretos');
      } else {
        toast.error('Falha no sistema. Tente novamente');
      }
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="logo-login" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br></br>
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>

        <p>
          Não possui conta? <Link to="/register">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
