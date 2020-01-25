import React from 'react';
import {ListWrapper, ListItem, Bold, ItemLeft, ItemRight} from './list.styles.js';

const List = props => {
  const {options} = props;

  if(!options.length) return null;
  
  return(
    <ListWrapper>
      {options.map(option => (
        <ListItem>
          <ItemLeft>
            <Bold>{option.title}</Bold>
            <div>{option.subtitle}</div>
          </ItemLeft>

          <ItemRight>
            <Bold>{option.value}</Bold>
            <div>{option.year}</div>
          </ItemRight>
        </ListItem>
      ))}
    </ListWrapper>
  )
}

export default React.memo(List);
