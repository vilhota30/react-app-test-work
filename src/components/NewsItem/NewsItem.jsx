import { NewsItem, NewsItemHeader, NewsItemImage, Span, PetInfoOutput, PetInfoOutputItem, CategoryOutput, AddButton, RemoveButton } from "./NewsItem.styled";
import { IoNewspaperSharp } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { GiMaterialsScience } from "react-icons/gi";
import { BiArrowToRight } from "react-icons/bi";
import icons from '../../images/icons/symbol-defs.svg';


const NewsListItem = ({ id, filterData, onAddToFavourite, onDelete, }) => {

  const handleAddToFavourite = (id) => {
    onAddToFavourite(id);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  if (!filterData || !filterData.img) {
    return null; 
  }

    return (
        <>
        <NewsItem>
      <NewsItemHeader>
        <NewsItemImage src={filterData.img} alt="" />
        <CategoryOutput><GiMaterialsScience size="20px" color="blue" />{filterData.description}</CategoryOutput>
        <AddButton onClick={() => handleAddToFavourite(filterData.id)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="blue"
            // fill={favourite ? '#54adff' : 'none'}
            >
              <use xlinkHref={`${icons}#heart`} />
            </svg>
          </AddButton>
          <RemoveButton onClick={() => handleDelete(filterData.id)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="blue">
              <use xlinkHref={`${icons}#trash-2`} />
            </svg>
          </RemoveButton>
        <PetInfoOutput>
          <PetInfoOutputItem>
            <Span>
            <IoNewspaperSharp color="blue" />
            </Span>
            <Span>{filterData.news}</Span>
          </PetInfoOutputItem>
          <PetInfoOutputItem>
            <Span>
            <TfiWrite color="blue" />
            </Span>
            <Span>{filterData.author}</Span>
          </PetInfoOutputItem>
          <PetInfoOutputItem>
            <Span>
             <BiArrowToRight color="blue" />
            </Span>
            <Span>{filterData.year}</Span>
          </PetInfoOutputItem>
        </PetInfoOutput>
      </NewsItemHeader>
    </NewsItem>
        </>
    )
}

export default NewsListItem;