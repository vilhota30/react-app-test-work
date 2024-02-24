import React from 'react';
import { User, Container, LogoutBtn, StyledLink } from './UserNav.styled';
import { CiLogout } from 'react-icons/ci';
import { FaUserCircle } from "react-icons/fa";
import Backdrop from 'components/Backdrop/Backdrop';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import useModal from 'components/hooks/useModal';
import { useAuth } from 'components/hooks/useAuth';

const UserNav = () => {
    const { user } = useAuth();
    const { toggleModal, showModal } = useModal(false);
  
    return (
      <Container>
        <LogoutBtn onClick={() => toggleModal()}>
          Log Out
          <CiLogout />
        </LogoutBtn>
        {user && (
          <StyledLink to="/user">
            <FaUserCircle />
            <User>{user}</User>
          </StyledLink>
        )}
        {showModal && (
          <Backdrop closeModal={toggleModal}>
            <ModalApproveAction closeModal={toggleModal} />
          </Backdrop>
        )}
      </Container>
    );
  };
  
export default UserNav;
