import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts } = theme;

const SearchForm = styled.form`
  margin-top: 40px;
  margin-inline: auto;
  margin-bottom: 43px;
  max-width: 608px;
  height: 44px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

const SearchInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 6px;
  background: none;
  outline: none;
  border: transparent;

  color: black;
  font-family: ${fonts.regular}, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;

  ::placeholder {
    color: blue;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.8px;
  }
`;

const SearchButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 6px;
  background: darkblue;
`;

export { SearchForm, SearchInput, SearchButton };
