import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  padding: 8px;
  font-family: inherit;
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
  text-decoration: none
  transition: color var(--duration) var(--cubic);

  &.active {
    color: darkslateblue;;
  }

  &:hover {
    color: darkslateblue;;
  }

  @media screen and (min-width: 768px){
    color: black;
    font-size: 48px;
    letter-spacing: 1.92px;
    margin-bottom: 60px;
  }

  
  @media screen and (min-width: 1200px) {
    color: white;
    font-size: 20px;
    letter-spacing: 0.8px;
    margin-bottom:0;
  }
`;
