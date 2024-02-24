import { Link } from 'react-router-dom';
import Nav from '../../components/Navigation/Nav';
import AuthNav from '../../components/AuthNav/AuthNav';
import {
    NavContainer,
    MenuNavBtn,
    MenuNavBtnUser,
    Middle,
    User,
    LogoutBtn,
} from './Menu.styled';
import { CiLogout } from 'react-icons/ci';

export const MobileMenu = ({ isLoggedIn, user, toggleModal }) => {
    return (
      <>
        <Middle>
          {isLoggedIn ? (
            <MenuNavBtnUser user="true">
              <Link to="/user">
                {/* <img src={icon} alt="icon" /> */}
              </Link>
              <User>{user}</User>
            </MenuNavBtnUser>
          ) : (
            <MenuNavBtn>
              <AuthNav />
            </MenuNavBtn>
          )}
          <NavContainer>
            <Nav />
          </NavContainer>
        </Middle>
        {isLoggedIn && (
          <LogoutBtn onClick={() => toggleModal()}>
            Log Out
            <CiLogout />
          </LogoutBtn>
        )}
      </>
    );
};
