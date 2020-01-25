import React from 'react';
import {SearchBarWrapper, Input} from './search_bar.styles';
import {Link} from 'react-router-dom';
import Button from '../button/button';

const SearchBar = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return(
    <SearchBarWrapper>
      <Input onChange={handleChange} placeholder="Pesquise por um veículo" />
      <Link to="vehicle-register">
        <Button>Cadastrar</Button>
      </Link>
    </SearchBarWrapper>
  )
}

export default React.memo(SearchBar);
