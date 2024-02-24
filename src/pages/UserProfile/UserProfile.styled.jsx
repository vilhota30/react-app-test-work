import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import mobphoto from '../../images/photos/background.jpg';
import deskphoto from '../../images/photos/backgrounddesk.jpg';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding-top: 40px;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    width: 768px;
    padding-top: 60px;
  }

  @media (min-width: 1280px) {
    display: flex;
    width: 1280px;
  }

  background-image: url(${deskphoto});
    background-size: 1100px;
    height: 480px;
    background-position: center;
    background-repeat: no-repeat; 

    @media (min-width: 586px) {
        align-items: normal;
        background-position: center;
        background-image: url(${mobphoto});
        background-size: 1100px;
        height: 480px;
    }
`;

export const Section = styled.section`
  padding-right: 40px;
  padding-left: 40px;
  margin-bottom: 46px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;

  // @media (min-width: 768px) {
  //   width: 768px;
  //   padding-top: 60px;
  // }

  // @media (min-width: 1280px) {
  //   display: flex;
  //   width: 1280px;
  // }
`;

export const H2 = styled.h2`
  font-size: 20px;
  color: white;
  font-weight: 500;
  letter-spacing: 0.8px;
  margin-bottom: 24px;
`;

export const UserCardWrapper = styled.form`
  position: relative;
  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 25px 8px;
  width: 280px;
  flex-shrink: 0;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 704px;
    height: 268px;
    padding-right: 76px;
    padding-bottom: 58px;
  }

  @media (min-width: 1280px) {
    width: 700px;
    padding-right: 0;
  }
`;

export const UserProfileImage = styled.div`
  position: relative;
  width: 182px;
  height: 182px;
  flex-shrink: 0;
  background-color: grey;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  border-radius: 40px;
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    width: 356px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.56px;
  width: 100px;
  padding: 4px;
`;

export const Span = styled.input`
  display: flex;
  font-size: 12px;
  letter-spacing: 0.48px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid var(--unnamed, #54adff);
  padding: 4px 10px;
  @media (min-width: 768px) {
    width: 255px;
    height: 30px;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  @media (min-width: 768px) {
    position: absolute;
    left: 20px;
    bottom: 14px;
  }
`;

export const EditProfileButton = styled.button`
  position: absolute;
  right: 10px;
  top: 14px;
  background-color: transparent;
  border: transparent;
  @media (min-width: 768px) {
    right: 20px;
  }
`;

export const SaveButton = styled.button`
  color: #fef9f9;
  display: block;
  margin: 0 auto;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.56px;
  width: 248px;
  max-height: 32px;
  padding: 6px 108px;
  border-radius: 40px;
  border-color: transparent;
  background: #54adff;
  @media (min-width: 768px) {
    position: absolute;
    left: 116px;
    bottom: 12px;
  }
`;
export const EditButton = styled.button`
  border: none;
  position: absolute;
  bottom: -36px;
  left: 40px;
  color: #111;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.83;
  letter-spacing: 0.48px;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const EditConfirm = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.48px;
`;
export const EditExit = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left:20px;
`;

export const FileWrapper = styled.div`
  width: 184px;
  height: 184px;
  background-color: #cce4fb;
  border-radius: 40px;
  position: absolute;
  cursor: pointer;
  bottom: 35px;
  left: -20px
`;

export const SvgIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const UserAvatar = styled.img`
 width: 99%;
  height: 99%;
  object-fit: cover;
  border-radius: 40px;
`;

export const InputFile = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 40px;
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  display: flex;
  font-size: 12px;
  letter-spacing: 0.48px;
  width: 188px;
  border-radius: 20px;
  border: 1px solid var(--unnamed, #54adff);
  padding: 4px 10px;

  @media (min-width: 768px) {
    width: 255px;
    height: 30px;
  }

  &:focus {
    border: 2px solid var(--blue-links, #54adff);
    outline: none;
    transition: border 0.3s ease-out;
  }


`;

export const LoaderWrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #c9c9c945;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  position: absolute;
  z-index:10
`;
