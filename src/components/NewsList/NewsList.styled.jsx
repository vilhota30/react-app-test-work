import styled from "styled-components";
import { theme } from '../../utils/theme';
const { fonts, fontSizes, fontWeights, colors } = theme;

export const NewsListContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 24px;
`;

export const FilterModal = styled.div`
  width: 100%;
  z-index: 1100;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  border: 2px solid black;

  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px){
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
`;

export const FilterForms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  
  @media screen and (min-width: 768px){
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    
  }
`;

export const FilterCloseButton = styled.button`
  display: flex;
  width: 152px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: none;
  background-color: #fff;

  color: #54adff;
  font-family: ${fonts.bold}, sans-serif;
  font-size: ${fontSizes.m};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;

  @media screen and (max-width: 768px){
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
`;

export const FilterFormButton = styled.button`
  display: flex;
  justify-content: flex-start;
  padding: 4px 8px;
  align-items: center;
  width: 100%;
  gap: 10px;
  align-self: stretch;
  border: none;
  border-radius: 20px;
  background: #cce4fb;

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: Inter, sans-serif;
  font-size: ${fontSizes.s};
  font-style: normal;
  font-weight: ${fontWeights.normal};
  line-height: 130%; /* 18.2px */

  @media screen and (min-width: 768px){
    width: 120px;
    margin: 4px;
  }

`;

export const FilterForm = styled.form`
   display: flex;
   width: 136px;
   padding: 8px;
   flex-direction: column;
   align-items: flex-start;
   gap: 10px;

   border-radius: 20px;
   background: ${colors.blue_light};

   color: #54adff;
   font-feature-settings:
     'clig' off,
     'liga' off;
     font-family: ${fonts.normal}, sans-serif;
     font-size: ${fontSizes.s};
     font-style: normal;
     font-weight: ${fontWeights.normal};
     line-height: 130%; 
 `;

 export const HiddenRadio = styled.input`
    display: none;
 `;

 export const StyledFilterOption = styled.label`
   display: flex;
   align-items: center;
   column-gap: 12px;
   font-size: 12px;
 `;