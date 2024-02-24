import { useState } from 'react';
import { OptionForm } from './CategoriesOption.styled';
import Option from './Option';

const CategoriesOption = ({ onChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all categories');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onChange(category);
  };

  return (
    <OptionForm>
      <Option>
        <input
          type="radio"
          name="categoryOption"
          value="all categories"
          checked={selectedCategory === 'all categories'}
          onChange={() => handleCategoryChange('all categories')}
        />
        all categories
      </Option>
      <Option>
        <input
          type="radio"
          name="categoryOption"
          value="technologies"
          checked={selectedCategory === 'technologies'}
          onChange={() => handleCategoryChange('technologies')}
        />
        technologies
      </Option>
      <Option>
        <input
          type="radio"
          name="categoryOption"
          value="neural network"
          checked={selectedCategory === 'neural network'}
          onChange={() => handleCategoryChange('neural network')}
        />
        neural network
      </Option>
      <Option>
        <input
          type="radio"
          name="categoryOption"
          value="chatGPT"
          checked={selectedCategory === 'chatGPT'}
          onChange={() => handleCategoryChange('chatGPT')}
        />
        chatGPT
      </Option>
      <Option>
        <input
          type="radio"
          name="categoryOption"
          value="innovations"
          checked={selectedCategory === 'innovations'}
          onChange={() => handleCategoryChange('innovations')}
        />
        innovations
      </Option>
      <Option>
        <input
          type="radio"
          name="categoryOption"
          value="progress"
          checked={selectedCategory === 'progress'}
          onChange={() => handleCategoryChange('progress')}
        />
        progress
      </Option>
    </OptionForm>
  );
};

  
export default CategoriesOption;