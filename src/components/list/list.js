import React from 'react';
import {
  ListWrapper,
  ListItem,
  Bold,
  ItemLeft,
  ItemRight,
  EmptyMessage,
} from './list.styles.js';

const List = props => {
  const {options, searching} = props;
  if(!Array.isArray(options)) return null;

  const empty = searching && options.length === 0;
  
  return(
    <ListWrapper>
      {empty && <EmptyMessage>Nenhum resultado para sua busca</EmptyMessage>}

      {options.map((option, index) => (
        <ListItem key={index}>
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
