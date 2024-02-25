import { useState } from 'react';
import icons from '../../images/icons/symbol-defs.svg';
import { FilterForm, FilterFormButton } from 'components/NewsList/NewsList.styled';
import FilterOption from './FilterOption';

const AuthorCategorie = ({ onClick, onChange, initialValue }) => {

    const [authorData, setAuthorData] = useState(initialValue);

    const handleInput = (event) => {
      event.preventDefault();

      const newAuthorData = event.currentTarget.elements.authorOption.value;
      setAuthorData(newAuthorData);
      onChange(newAuthorData);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onClick();
    };
  
    return (
      <FilterForm onInput={handleInput} onSubmit={handleSubmit}>
        <FilterFormButton type="submit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <use xlinkHref={`${icons}#chevron-up`} />
          </svg>
          By Author
        </FilterFormButton>
        <FilterOption
          name="authorOption"
          value="Jeremy Bowen"
          checked={authorData === 'Jeremy Bowen'}
        >
          Jeremy Bowen
        </FilterOption>
        <FilterOption
          name="authorOption"
          value="Nicholas Kristof"
          checked={authorData === 'Nicholas Kristof'}
        >
          Nicholas Kristof
        </FilterOption>
        <FilterOption 
          name="authorOption"
          value="Polly Toynbee"
          checked={authorData === 'Polly Toynbee'}
          >
          Polly Toynbee
        </FilterOption>
        <FilterOption 
          name="authorOption"
          value="Emily Chang"
          checked={authorData === 'Emily Chang'}
          >
          Emily Chang
        </FilterOption>
      </FilterForm>
    );
  };
  
export default AuthorCategorie;