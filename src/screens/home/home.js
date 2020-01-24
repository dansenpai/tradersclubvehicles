import React from 'react';
import {HomeWrapper, ContentWrapper, HomeTitle, RightText} from './home.styles.js';

const Home = () => {
  return(
    <HomeWrapper>
      <ContentWrapper>
        <HomeTitle>
          <RightText>Pesquisa de veículos</RightText>
          <RightText> do Traders Club</RightText>
        </HomeTitle>
      </ContentWrapper>
    </HomeWrapper>
  )
}

export default React.memo(Home);
