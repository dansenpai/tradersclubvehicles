import React from 'react';
import {SelectInputWrapper, Option} from './select_input.styles';
import PropTypes from 'prop-types';

const SelectInput = (props) => {
  const {options} = props;
  if(!options.length) return null;

  return(
    <SelectInputWrapper>
      {options.map((option, index) => (
        <Option key={index} value={option.value}>{option.label}</Option>
      ))}
    </SelectInputWrapper>
  )
} 

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
}

export default React.memo(SelectInput);
