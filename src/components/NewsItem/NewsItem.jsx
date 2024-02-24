import { NewsItem, NewsItemHeader, NewsItemImage, Span, PetInfoOutput, PetInfoOutputItem, CategoryOutput } from "./NewsItem.styled";
import { IoNewspaperSharp } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { GiMaterialsScience } from "react-icons/gi";
import { BiArrowToRight } from "react-icons/bi";


const NewsListItem = ({ id, filterData }) => {

  if (!filterData || !filterData.img) {
    return null; 
  }

    return (
        <>
        <NewsItem>
      <NewsItemHeader>
        <NewsItemImage src={filterData.img} alt="" />
        <CategoryOutput><GiMaterialsScience size="20px" color="blue" />{filterData.description}</CategoryOutput>
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