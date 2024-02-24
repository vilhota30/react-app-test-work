import React from 'react';
import { AuthBtn } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <AuthBtn to="/login" login="true">Login</AuthBtn>
      <AuthBtn to="/register">Registration</AuthBtn>
    </>
  );
};

export default AuthNav;
