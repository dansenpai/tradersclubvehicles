import styled from 'styled-components';

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding: 15px 10px;
  font-size: 25px;
  color: #fff;
  outline: none;
  margin-bottom: 40px;
  box-sizing: border-box;
`;
  
export const VehicleWrapper = styled.div`
  padding: 80px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActionsLeft = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const Column = styled.div`
  flex-basis: ${props => props.size || '100'}%;
`;

export const Snack = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 3px;
`;