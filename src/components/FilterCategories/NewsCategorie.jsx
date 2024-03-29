import { useState } from 'react';
import icons from '../../images/icons/symbol-defs.svg';
import { FilterForm, FilterFormButton } from 'components/NewsList/NewsList.styled';
import FilterOption from './FilterOption';


const NewsCategorie = ({ onClick, onChange, initialValue }) => {

    const [newsData, setNewsData] = useState(initialValue);

    const handleInput = (event) => {
      event.preventDefault();

      const newNewsData = event.currentTarget.elements.newsOption.value;
      setNewsData(newNewsData);
      onChange(newNewsData);
      console.log(newsData);
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
          By news
        </FilterFormButton>
        <FilterOption
          name="newsOption"
          value="BBC News"
          checked={newsData === 'BBC News'}
        >
          BBC News
        </FilterOption>
        <FilterOption
          name="newsOption"
          value="The New York Times"
          checked={newsData === 'The New York Times'}
        >
          The New York Times
        </FilterOption>
        <FilterOption 
          name="newsOption"
          value="The Guardian"
          checked={newsData === 'The Guardian'}
          >
          The Guardian
        </FilterOption>
        <FilterOption 
          name="newsOption"
          value="Bloomberg"
          checked={newsData === 'Bloomberg'}
          >
          Bloomberg
        </FilterOption>
      </FilterForm>
    );
  };
  
export default NewsCategorie;