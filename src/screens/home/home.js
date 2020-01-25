import React from 'react';
import {HomeWrapper, ContentWrapper, HomeTitle, RightText} from './home.styles.js';
import List from '../../components/list/list';

const Home = () => {
  return(
    <HomeWrapper>
      <ContentWrapper>
        <HomeTitle>
          <RightText>Pesquisa de veículos</RightText>
          <RightText> do Traders Club</RightText>
        </HomeTitle>

        <List
          options={[]}
        />
      </ContentWrapper>
    </HomeWrapper>
  )
}

export default React.memo(Home);
