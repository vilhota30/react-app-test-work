import { HiddenRadio, StyledFilterOption } from 'components/NewsList/NewsList.styled';
import icons from '../../images/icons/symbol-defs.svg';

const FilterOption = ({ name, value, checked, children }) => {
  return (
    <StyledFilterOption>
      <HiddenRadio type="radio" name={name} value={value} />
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <use xlinkHref={`${icons}#${checked ? 'check-round' : 'round'}`} />
      </svg>
      {children}
    </StyledFilterOption>
  );
};

export default FilterOption;
