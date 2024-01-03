import styled from "styled-components";

export const Table1 = styled.table`
  border: 0px solid black; // 테두리는 검은색
  background-color: white; // 배경은 흰색
  width: 1000px; // 테이블의 너비를 설정, 필요에 따라 조정 가능
  height: 1000px; // 테이블의 높이를 설정, 필요에 따라 조정 가능
  box-shadow: 5px 5px 5px 5px gray;
`;

export const Td = styled.td`
  border-left: 0px solid black;
  width: 500px;
  height: 100%;
  box-shadow: -5px 5px 5px -2px gray;
`;