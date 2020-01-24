import styled from 'styled-components';
import AppColors from '../../theme/app_colors';

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${AppColors.primary};
  padding: 40px 60px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-right: 20px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  color: #fff;
  padding: 15px;
  font-size: 25px;
`;
