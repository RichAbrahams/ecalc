import styled from 'styled-components';

export const TD = styled.td`
  border: 1px solid black;
  text-align: left;
  padding: 3px;
`;

export const TH = styled.th`
  border: 1px solid black;
  padding: 3px;
`;

export const TABLE = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  & nth-child(even) {background-color: #f2f2f2;}
`;

