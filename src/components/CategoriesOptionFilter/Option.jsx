import { HiddenRadio, CheckedOption, UnCheckedOption } from './CategoriesOption.styled';
  
const Option = ({ name, value, checked, defaultChecked, children }) => {
    return checked ? (
      <CheckedOption>
        <HiddenRadio
          type="radio"
          name={name}
          value={value}
          defaultChecked={defaultChecked}
        />
        {children}
      </CheckedOption>
    ) : (
      <UnCheckedOption>
        <HiddenRadio type="radio" name={name} value={value} />
        {children}
      </UnCheckedOption>
    );
};
  
export default Option;

  