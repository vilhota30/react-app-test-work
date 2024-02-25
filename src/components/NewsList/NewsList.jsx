import NewsListItem from '../../components/NewsItem/NewsItem';
import dataNews from '../../data/datanews';
import { SearchInfo } from "components/SearchInfo/SearchInfo";
import { useState } from "react";
import { nanoid } from "nanoid";
import CategoriesOption from "components/CategoriesOptionFilter/CategoriesOption";
import NewsCategorie from "components/FilterCategories/NewsCategorie";
import YearForm from "components/FilterCategories/YearCategorie";
import AuthorCategorie from "components/FilterCategories/AuthorCategorie";
import { NewsListContainer, FilterFormButton, FilterForms, FilterModal, FilterCloseButton } from "components/NewsList/NewsList.styled";
import icons from '../../images/icons/symbol-defs.svg';

 const NewsList = () => {
   const [filteredData, setFilteredData] = useState(dataNews);
   const [searchTerm, setSearchTerm] = useState('');
   
   const [isByNewsOpen, setIsByNewsOpen] = useState(false);
   const [isByYearOpen, setIsByYearOpen] = useState(false);
   const [isByAuthorOpen, setIsByAuthorOpen] = useState(false);
   const [isFiltersOpen, setIsFiltersOpen] = useState(false);

   const toggleNewsFilter = () => {
    if (isByNewsOpen) {
      setIsByNewsOpen(false);
    } else {
      setIsByNewsOpen(true);
    }
    };

    const toggleYearFilter = () => {
      if (isByYearOpen) {
        setIsByYearOpen(false);
      } else {
        setIsByYearOpen(true);
      }
    };

    const toggleAuthorFilter = () => {
      if (isByAuthorOpen) {
        setIsByAuthorOpen(false);
      } else {
        setIsByAuthorOpen(true);
      }
    };

    const toggleFilters = () => {
      if (isFiltersOpen) {
        setIsFiltersOpen(false);
      } else {
        setIsFiltersOpen(true);
      }
    };

    const handleCategoryChange = (category) => {
      if (category === 'all categories') {
        setFilteredData(dataNews);
      } else {
        const newData = dataNews.filter(item => item.description === category);
        setFilteredData(newData);
      }
    };

   const handleSearch = (searchTerm) => {
     setSearchTerm(searchTerm);
     const newData = dataNews.filter(item =>
       item.description.toLowerCase().includes(searchTerm.toLowerCase())
     );
     setFilteredData(newData);
   };

    const handleNewsChange = (selectedNews) => {
    const newData = selectedNews === 'all' ? dataNews : dataNews.filter(item => item.news === selectedNews);
    setFilteredData(newData);
    };

    const handleYearChange = (selectedYear) => {
      const newData = selectedYear === 'all' ? dataNews : dataNews.filter(item => item.year === selectedYear);
      setFilteredData(newData);
    };
    
    const handleAuthorChange = (selectedAuthor) => {
      const newData = selectedAuthor === 'all' ? dataNews : dataNews.filter(item => item.author === selectedAuthor);
      setFilteredData(newData);
    };
    

   return (
    <div>
      <FilterModal>
        <FilterCloseButton onClick={toggleFilters}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <use xlinkHref={`${icons}#chevron-up`} />
          </svg>
          Filters
        </FilterCloseButton>
        <FilterForms>
       {isByNewsOpen ? (
            <NewsCategorie
              onClick={toggleNewsFilter}
              onChange={handleNewsChange}
              initialValue={dataNews}
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

            {isByYearOpen ? (
            <YearForm
              onClick={toggleYearFilter}
              onChange={handleYearChange}
              initialValue={dataNews}
            />
          ) : (
            <FilterFormButton onClick={toggleYearFilter}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use xlinkHref={`${icons}#chevron-down`} />
              </svg>
              By date
            </FilterFormButton>
          )}

            {isByAuthorOpen ? (
            <AuthorCategorie
              onClick={toggleAuthorFilter}
              onChange={handleAuthorChange}
              initialValue={dataNews}
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
       <CategoriesOption onChange={handleCategoryChange} />
       <SearchInfo onSearch={handleSearch} searchTerm={searchTerm} />
       <NewsListContainer>
         {filteredData.map((filterData) => (
           <NewsListItem
             filterData={filterData}
             key={nanoid()}
             id={filterData._id}
           />
         ))}
       </NewsListContainer>
       </div>
   );

};

export default NewsList;


