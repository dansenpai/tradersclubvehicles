import React from 'react';
import {HomeWrapper, ContentWrapper, HomeTitle, RightText} from './home.styles.js';
import List from '../../components/list/list';

import { connect } from 'react-redux'

const Home = props => {
  const {searching, filteredVehicles} = props;

  return(
    <HomeWrapper>
      <ContentWrapper>
        {filteredVehicles.length < 1 && !searching ? (
          <HomeTitle>
            <RightText>Pesquisa de veículos</RightText>
            <RightText> do Traders Club</RightText>
          </HomeTitle>
        ): (
          <List
            searching={searching}
            options={filteredVehicles}
          />
        )}
      </ContentWrapper>
    </HomeWrapper>
  )
}

function mapStateToProps(state) {
  const { VehicleReducer } = state;

  return {
    searching: VehicleReducer.searching,
    filteredVehicles: VehicleReducer.filteredVehicles,
  }
}

export default connect(mapStateToProps)(React.memo(Home));
