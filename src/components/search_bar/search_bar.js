import React from 'react';
import {SearchBarWrapper, Input} from './search_bar.styles';
import {Link} from 'react-router-dom';
import Button from '../button/button';

const SearchBar = () => {

  return(
    <SearchBarWrapper>
      <Input placeholder="Pesquise por um veículo" />
      <Link to="vehicle-register">
        <Button>Cadastrar</Button>
      </Link>
    </SearchBarWrapper>
  )
}

export default React.memo(SearchBar);
