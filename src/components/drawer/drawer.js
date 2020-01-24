import React from 'react';
import {DrawerWrapper, LogoWrapper, Logo} from './drawer.styles';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo-tc.png'

const Drawer = () => {

  return(
    <DrawerWrapper>
      <LogoWrapper>
        <Link to="/">
          <Logo src={logo}/>
        </Link>
      </LogoWrapper>
    </DrawerWrapper>
  )
}

export default React.memo(Drawer);
