import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 100%;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 30px;
  cursor: pointer;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    border: 0.5px solid rgba(255,255,255,0.1);
  }
`;

export const Bold = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

export const ItemLeft = styled.div``;

export const ItemRight = styled.div`
  text-align: right;
`;

export const EmptyMessage = styled.span`
  color: #fff;
  font-size: 28px;
`