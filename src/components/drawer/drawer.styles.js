import styled from 'styled-components';
import AppColors from '../../theme/app_colors';

export const DrawerWrapper = styled.div`
  height: 100%;
  max-width: 500px;
  width: 100%;
  background: ${AppColors.drawer};
  position: fixed;
  left: 0;
  top: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Logo  = styled.img`
  height: 100px;
  width: 100px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 40px 0px;
`;