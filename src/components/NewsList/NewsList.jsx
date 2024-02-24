import { NewsListContainer } from "./NewsList.styled";
import NewsListItem from '../../components/NewsItem/NewsItem';
import dataNews from '../../data/datanews';
import { SearchInfo } from "components/SearchInfo/SearchInfo";
import { useState } from "react";
import { nanoid } from "nanoid";
import CategoriesOption from "components/CategoriesOptionFilter/CategoriesOption";

// const NewsList = ( ) => {
//   const [filteredData, setFilteredData] = useState(dataNews);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleCategoryChange = (category) => {
//     if (category === 'all categories') {
//       setFilteredData(dataNews);
//     } else {
//       const newData = dataNews.filter(item => item.description === category);
//       setFilteredData(newData);
//     }
//   };

//   const handleSearch = (searchTerm) => {
//     setSearchTerm(searchTerm);
//     const newData = dataNews.filter(item =>
//       item.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(newData);
//   };

//   return (
//     <>
//       <CategoriesOption onChange={handleCategoryChange} />
//       <SearchInfo onSearch={handleSearch} />
//       <NewsListContainer>
//         {filteredData.map((filterData) => (
//           <NewsListItem
//             filterData={filterData}
//             key={nanoid()}
//             id={filterData._id}
//           />
//         ))}
//       </NewsListContainer>
//     </>
//   );
// };


// const NewsList = ( ) => {
//   const [filteredData, setFilteredData] = useState(dataNews);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleCategoryChange = (category) => {
//     if (category === 'all categories') {
//       setFilteredData(dataNews);
//     } else {
//       const newData = dataNews.filter(item => item.description === category);
//       setFilteredData(newData);
//     }
//   };

//   const handleSearch = (searchTerm) => {
//     setSearchTerm(searchTerm);
//     const newData = dataNews.filter(item =>
//       item.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(newData);
//   };

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     handleSearch(value);
//   };

//   return (
//     <>
//       <CategoriesOption onChange={handleCategoryChange} />
//       <SearchInfo onSearch={handleChange} />
//       <NewsListContainer>
//         {filteredData.map((filterData) => (
//           <NewsListItem
//             filterData={filterData}
//             key={nanoid()}
//             id={filterData._id}
//           />
//         ))}
//       </NewsListContainer>
//     </>
//   );
// };


 const NewsList = () => {
   const [filteredData, setFilteredData] = useState(dataNews);
   const [searchTerm, setSearchTerm] = useState('');

    const handleCategoryChange = (category) => {
      if (category === 'all categories') {
        setFilteredData(dataNews);
      } else {
        const newData = dataNews.filter(item => item.description === category);
        setFilteredData(newData);
      }
    };

    // useEffect(() => {
    //    setFilteredData(dataNews); // Початкове відображення усіх новин
    //  }, [dataNews]);
  

   const handleSearch = (searchTerm) => {
     setSearchTerm(searchTerm);
     const newData = dataNews.filter(item =>
       item.description.toLowerCase().includes(searchTerm.toLowerCase())
     );
     setFilteredData(newData);
   };

//   const filterNews = (category, value) => {
//     let newData = dataNews;

//     switch (category) {
//         case 'year':
//             newData = newData.filter(item => item.year === value);
//             break;
//         case 'author':
//             newData = newData.filter(item => item.author === value);
//             break;
//         // case 'publication':
//         //     newData = newData.filter(item => item.publication === value);
//         //     break;
//         case 'news':
//             newData = newData.filter(item => item.news === value);
//             break;
//         default:
//             break;
//     }

//     setFilteredData(newData);
// };

  // const handleCategoryChange = (category, value) => {
  //   if (value === 'all') {
  //     // Показати всі новини
  //     setFilteredData(dataNews);
  //   } else {
  //     // Фільтрація за обраною категорією
  //     filterNews(category, value);
  //   }
  // };


   return (
     <>
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
     </>
   );
};

export default NewsList;

// const NewsList = ({ dataNews }) => {
//   const [filteredData, setFilteredData] = useState(dataNews);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleCategoryChange = (category) => {
//     if (category === 'all categories') {
//       setFilteredData(dataNews);
//     } else {
//       const newData = dataNews.filter(item => item.description === category);
//       setFilteredData(newData);
//     }
//   };

//   const handleSearch = (searchTerm) => {
//     setSearchTerm(searchTerm);
//     const newData = dataNews.filter(item =>
//       item.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(newData);
//   };

//   return (
//     <>
//       <CategoriesOption onChange={handleCategoryChange} />
//       <SearchInfo onSearch={handleSearch} searchTerm={searchTerm} />
//       <NewsListContainer>
//         {filteredData.map((filterData) => (
//           <NewsListItem
//             filterData={filterData}
//             key={nanoid()}
//             id={filterData._id}
//           />
//         ))}
//       </NewsListContainer>
//     </>
//   );
// };




