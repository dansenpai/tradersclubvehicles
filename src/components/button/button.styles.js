import styled from 'styled-components';

export const ButtonStyle = styled.button`
  border: none;
  background: ${props => props.type === 'TRANSPARENT' ? 'transparent' : '#fff'};
  border-radius: 3px;
  ${props => props.type === 'TRANSPARENT' ? 
    `border: 1px solid #fff;
     color: #fff;` : ''
  };
  padding: 15px 20px;
  font-size: 25px;
  outline: none;
  cursor: pointer;
  margin-right: 15px;
`;