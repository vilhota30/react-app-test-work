import React from 'react';
import { StyledLink } from './Nav.styled';

const Nav = () => {
  return (
    <>
      <StyledLink to="/about_us">About us</StyledLink>

      <StyledLink to="/dashboard">Dashboard</StyledLink>

      <StyledLink to="/our_clients">Our clients</StyledLink>
    </>
  );
};

export default Nav;