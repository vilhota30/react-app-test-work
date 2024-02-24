import { SearchForm, SearchInput, SearchButton } from './SearchInfo.styled';
import { FaSearchLocation } from "react-icons/fa";
import { useState } from 'react';

// export const SearchInfo = ({ onSearch }) => {

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(searchTerm);
//   };

//   return (
//     <SearchForm onSubmit={handleSubmit}>
//       <SearchInput
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <SearchButton type="submit">
//          <FaSearchLocation size="20px" color="white"/>
//       </SearchButton>
//     </SearchForm>
//   );
// };


export const SearchInfo = ({ onSearch, searchTerm }) => {
  const [searchTermLocal, setSearchTermLocal] = useState(searchTerm);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTermLocal(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTermLocal);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTermLocal}
        onChange={handleChange}
      />
      <SearchButton type="submit">
         <FaSearchLocation size="20px" color="white"/>
      </SearchButton>
    </SearchForm>
  );
};
