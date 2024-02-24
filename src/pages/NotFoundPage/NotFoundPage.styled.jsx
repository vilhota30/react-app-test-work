import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const Title = styled.h2`
  margin-top: 40px;
  display: block;
  color: white;
  align-items: center;
  justify-content: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const Paragraf = styled.p`
  font-family: 'Manrope';
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
    margin-left: 10px;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  @media (min-width: 768px) {
    margin-top: 68px;
  }
  @media (min-width: 1280px) {
    margin-top: 18px;
  }
    :hover {
    background: ${(prop) => prop.theme.colors.darkblue};
  }
  :focus {
    background-color: ${(prop) => prop.theme.colors.darkblue};
  }
`;

export const Btn = styled.button`
  width: 248px;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 8px 28px;

  background-color: ${(prop) => prop.theme.colors.blue};
  border: none;
  border-radius: 40px;
  text-align: center;
  gap: 12px;

  :hover {
    background-color: ${(prop) => prop.theme.colors.blue};
  }

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: ${(prop) => prop.theme.colors.white};

  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
  svg {
    fill: #fdf7f2;
  }

`;

export const TextContainer = styled.div`
margin:0`;


