import styled from "styled-components";
import BlackanWhiteImgMobile from '../../images/photos/imgmobile.jpg';
import BlackanWhiteImgDesktop from '../../images/photos/imgdesktop.jpg';

export const RegistrationPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;

  background-image: url(${BlackanWhiteImgDesktop});
    background-size: 1280px;
    height: 580px;
    background-position: center;
    background-repeat: no-repeat; 

    @media (min-width: 586px) {
        align-items: normal;
        background-position: center;
        background-image: url(${BlackanWhiteImgMobile});
        background-size: 1280px;
        height: 780px;
    }
  }
  `;

export const RegistrationFormWrapper = styled.div`
  padding: 60px 75px;
  width: 608px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    padding: 40px 12px;
    max-width: 280px;

    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
  }
`;
