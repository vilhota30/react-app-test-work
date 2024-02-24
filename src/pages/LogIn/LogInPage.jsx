import React from 'react';
import Login from '../../components/LogIn/LogIn';
import { LoginFormWrapper, LoginPageWrapper } from './LogInPage.styled';

const LoginPage = () => {
    return (
     <LoginPageWrapper>
        <LoginFormWrapper>
          <Login />
        </LoginFormWrapper>
     </LoginPageWrapper>
    );
  };
  
export default LoginPage;