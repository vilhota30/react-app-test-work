import { useEffect, useState } from 'react';
import icons from '../../images/icons/symbol-defs.svg';
import {
  FilterModal,
  FilterForms,
  FilterFormButton,
  FilterOpenButton,
  FilterCloseButton,
} from './FilterGroupCategories.styled';
import YearForm from './YearCategorie';
import NewsCategorie from './NewsCategorie';
// import NewsList from 'components/NewsList/NewsList';
import AuthorCategorie from './AuthorCategorie';


const FilterGroupCategories = ({ onChange, dataNews }) => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [isByYearOpen, setIsByYearOpen] = useState(false);
    const [isByNewsOpen, setIsByNewsOpen] = useState(false);
    const [isByAuthorOpen, setIsByAuthorOpen] = useState(false);
    const [year, setYear] = useState('anyYear');
    const [news, setNews] = useState('');
    const [author, setAuthor] = useState('');
    const [isHover, setIsHover] = useState(false);
  
    const showFilterIcon = () => {
      setIsHover(true);
    };
  
    const hideFilterIcon = () => {
      setIsHover(false);
    };
  
    const toggleFilters = () => {
      if (isFiltersOpen) {
        setIsFiltersOpen(false);
      } else {
        setIsFiltersOpen(true);
      }
    };
  
    const toggleYearFilter = () => {
      if (isByYearOpen) {
        setIsByYearOpen(false);
      } else {
        setIsByYearOpen(true);
      }
    };
  
     const toggleNewsFilter = () => {
       if (isByNewsOpen) {
         setIsByNewsOpen(false);
       } else {
         setIsByNewsOpen(true);
       }
     };

     const toggleAuthorFilter = () => {
        if (isByAuthorOpen) {
          setIsByAuthorOpen(false);
        } else {
          setIsByAuthorOpen(true);
        }
      };
  
    const selectYear = (YearData) => {
      setYear(YearData);
    };
  
    //   const selectNews = (newsData) => {
    //     setNews(newsData);
    // };

     const selectAuthor = (authorData) => {
        setAuthor(authorData);
      };

      const selectNews = (newsData) => {
        setNews(newsData);
        // onChange({ news: newsData }); // Викликати функцію зміни в NewsList
    };


    useEffect(() => {
      // onChange({ year, news, author });
    }, [year, news, author]);
  
    return !isFiltersOpen ? (
      <FilterOpenButton
        onClick={toggleFilters}
        onMouseOver={showFilterIcon}
        onMouseLeave={hideFilterIcon}
      >
        Filter
         <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke={isHover ? '#FEF9F9' : '#54adff'}
        >
          <use xlinkHref={`${icons}#filters-3`} />
        </svg>
      </FilterOpenButton>
    ) : (
      <FilterModal>
        <FilterCloseButton onClick={toggleFilters}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <use xlinkHref={`${icons}#chevron-up`} />
          </svg>
          Filters
        </FilterCloseButton>
        <FilterForms>
          {isByYearOpen ? (
            <YearForm
              onClick={toggleYearFilter}
              onChange={selectYear}
              initialValue={year}
            />
          ) : (
            <FilterFormButton onClick={toggleYearFilter}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use xlinkHref={`${icons}#chevron-down`} />
              </svg>
              By date
            </FilterFormButton>
          )}
  
           {isByNewsOpen ? (
            <NewsCategorie
              onClick={toggleNewsFilter}
              onChange={selectNews}
              initialValue={news}
            >
            </NewsCategorie>
          ) : (
            <FilterFormButton onClick={toggleNewsFilter}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use xlinkHref={`${icons}#chevron-down`} />
              </svg>
              By News
            </FilterFormButton>
          )} 

            {isByAuthorOpen ? (
            <AuthorCategorie
              onClick={toggleAuthorFilter}
              onChange={selectAuthor}
              initialValue={author}
            />
          ) : (
            <FilterFormButton onClick={toggleAuthorFilter}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use xlinkHref={`${icons}#chevron-down`} />
              </svg>
              By Author
            </FilterFormButton>
          )} 
        </FilterForms>
      </FilterModal>
    );
  };
  
export default FilterGroupCategories;