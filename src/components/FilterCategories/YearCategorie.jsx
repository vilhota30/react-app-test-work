import { useState } from 'react';
import icons from '../../images/icons/symbol-defs.svg';
import { FilterForm, FilterFormButton } from 'components/NewsList/NewsList.styled';
import FilterOption  from './FilterOption';

const YearForm = ({ onClick, onChange, initialValue }) => {
    const [yearData, setYearData] = useState(initialValue);

    const handleInput = (event) => {
      event.preventDefault();

      const newYearData = event.currentTarget.elements.yearOption.value;
      setYearData(newYearData);
      onChange(newYearData);
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
          By date
        </FilterFormButton>
        <FilterOption
          name="yearOption"
          value="2019"
          checked={yearData === '2019'}
        >
          2019
        </FilterOption>
        <FilterOption
          name="yearOption"
          value="2020"
          checked={yearData === '2020'}
        >
          2020
        </FilterOption>
        <FilterOption
          name="yearOption"
          value="2022"
          checked={yearData === '2022'}
        >
          2022
        </FilterOption>
        <FilterOption
          name="yearOption"
          value="2024"
          checked={yearData === '2024'}
        >
          2024
        </FilterOption>
      </FilterForm>
    );
  };
  
export default YearForm;
  
