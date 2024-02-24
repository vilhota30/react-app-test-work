import styled from 'styled-components';
import AbstractImgDesktop from '../../images/photos/abstractphotodesktop.jpg';
import AbstractImgMobile from '../../images/photos/abstractphotomobile.jpg';

 export const LoginPageWrapper = styled.div`
   display: flex;
   justify-content: center;
   padding-top: 80px;
   height: 60vh;
   background-image: url(${AbstractImgDesktop});
    background-size: 1280px;
    height: 580px;
    background-position: center;
    background-repeat: no-repeat;
    // background-size: 100%;  

    @media (min-width: 586px) {
        align-items: normal;
        background-position: center;
        background-image: url(${AbstractImgMobile});
        background-size: 1280px;
        height: 580px;
    }

    @media (min-width: 1024px) {    
        background-size: 70%; 
        background-position: center;
    }
   `;

export const LoginFormWrapper = styled.div`
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