import Nav from '../../components/Navigation/Nav';
import UserNav from '../../components/UserNav/UserNav';
import React from 'react';
import { Container, User } from './Header.styled';
import AuthNav from '../../components/AuthNav/AuthNav';
import { useWindowSize } from '../../components/hooks/useResize';
import { useAuth } from '../../components/hooks/useAuth';
import { Menu } from '../../components/Menu/Menu';
import { FaUserAlt } from "react-icons/fa";

const Header = ({ handleClick }) => {
    const size = useWindowSize();
    const { isLoggedIn, user } = useAuth();
  
    return (
      <Container>
        {/* <Logo size={size} /> */}
        {size[0] >= 768 && size[0] < 1200 && !isLoggedIn && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <AuthNav />
          </div>
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '22px',
          }}
        >
          {size[0] >= 768 && size[0] < 1200 && isLoggedIn && (
            <div>
              <User to="/user">
               <FaUserAlt />
                {user && <p>{user}</p>}
              </User>
            </div>
          )}
  
          {size[0] < 768 && isLoggedIn && (
            <div>
              <User to="/user">
              <FaUserAlt />
              </User>
            </div>
          )}
  
          {size[0] < 1200 && <Menu size={size} />}
        </div>
  
        {size[0] >= 1200 && (
          <>
            <div style={{ display: 'flex', gap: '40px' }}>
              <Nav />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {isLoggedIn ? <UserNav /> : <AuthNav />}
            </div>
          </>
        )}
      </Container>
    );
  };
  
export default Header;


