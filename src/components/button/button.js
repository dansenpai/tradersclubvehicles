import React from 'react';
import PropTypes from 'prop-types';
import {ButtonStyle} from './button.styles';

const Button = props => {
  return(
    <ButtonStyle onClick={props.onClick} type={props.type}>
      {props.children}
    </ButtonStyle>
  )
}

Button.propTypes = {
  type: PropTypes.string,
};

export default React.memo(Button);
