import React from 'react';
import {SelectInputWrapper, Option} from './select_input.styles';
import PropTypes from 'prop-types';

const SelectInput = (props) => {
  const {options, placeholder, name, onChange, selected} = props;
  if(!options.length) return null;
  return(
    <SelectInputWrapper
      name={name} 
      onChange={onChange}
      value={selected}
    >
      <Option value="">{placeholder}</Option>
      {options.map((option, index) => (
        <Option
          key={index}
          value={option.name}
        >
          {option.name}
        </Option>
      ))}
    </SelectInputWrapper>
  )
} 

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
}

export default React.memo(SelectInput);
