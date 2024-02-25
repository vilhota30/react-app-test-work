import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, colors, radii } = theme;

export const NewsItem = styled.div`
  width: 288px;
  height: 280px;
  border-radius: 0px 0px 40px 40px;
  background: #fff;

  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const NewsItemHeader = styled.div`
  position: relative;
  width: 100%;
  height: 288px;

  &&:hover{
    transform: scale(1.10);
    z-index: 900;
    cursor: pointer;
    box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.6);
    border: 3px solid darkblue;

}
`;

export const NewsItemFooter = styled.div`
  padding: 20px;
`;

export const NewsItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 288px;
`;
export const Span = styled.span`
  display: flex;
  overflow-wrap: break-word;
`;

export const TitleHeader = styled.h3`
   padding-block: none;
   color: var(--, #111);
   font-family: ${fonts.bold}, sans-serif;
   font-size: 24px;
 `;

export const PetInfoOutput = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0px;

  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

export const PetInfoOutputItem = styled.div`
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: left;
  align-items: center;
  gap: 4px;

  color: #111;
  font-family: ${fonts.semiBold}, sans-serif;
  overflow-wrap: break-word;

  border-radius: 16px;
  background: ${colors.blue_light};

  overflow: hidden;
  color: var(--, #111);

  font-family: ${fonts.semiBold}, sans-serif;
  font-size: ${fontSizes.xs};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.48px;
`;

export const CategoryOutput = styled.div`
  position: absolute;
  top: 16px;
  left: 0;

  display: flex;
  width: 126px;
  height: 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: var(--, #111);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: ${fonts.medium}, sans-serif;
  font-size: ${fontSizes.s};
  font-style: normal;
  line-height: normal;

  border-radius: 0px 16px 16px 0px;
  background: var(--blue-light, ${colors.blue_light});
`;

export const AddButton = styled.button`
  position: absolute;
  top: 16px;
  right: 12px;
  color: darkblue;
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: ${radii.round};
  background: ${colors.blue_light};
  `;

export const RemoveButton = styled.button`
  position: absolute;
  top: 64px;
  right: 12px;
  color: darkblue;
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: ${radii.round};
  background: ${colors.blue_light};
`;