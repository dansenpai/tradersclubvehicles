import React from 'react';
import {
  ListWrapper,
  ListItem,
  Bold,
  ItemLeft,
  ItemRight,
  EmptyMessage,
} from './list.styles.js';
import { Link } from 'react-router-dom';

const List = props => {
  const {options, searching} = props;
  if(!Array.isArray(options)) return null;

  const empty = searching && options.length === 0;
  
  return(
    <ListWrapper>
      {empty && <EmptyMessage>Nenhum resultado para sua busca</EmptyMessage>}

      {options.map((option, index) => (
        <Link to={`/vehicle-edit/${option.id}`} key={index}>
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
        </Link>
      ))}
    </ListWrapper>
  )
}

export default React.memo(List);
