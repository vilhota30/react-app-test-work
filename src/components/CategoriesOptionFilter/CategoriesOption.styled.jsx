import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, colors } = theme;

export const OptionForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  
  @media screen and (min-width: 767px){
  justify-content: center;
  align-items: center;
  }
`;

export const HiddenRadio = styled.input`
  display: none;
`;

export const UnCheckedOption = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 25px;
  padding: 8px 16px;

  border-radius: 40px;
  background: rgba(97, 67, 119, 0.22);

  color: ${colors.blue};
  font-family: ${fonts.medium}, sans-serif;
  font-size: ${fontSizes.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`;

export const CheckedOption = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 25px;
  padding: 8px 16px;

  border-radius: 40px;
  border-radius: 40px;
  background: ${colors.blue};

  color: #fef9f9;
  font-family: ${fonts.medium}, sans-serif;
  font-size: ${fontSizes.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`;
