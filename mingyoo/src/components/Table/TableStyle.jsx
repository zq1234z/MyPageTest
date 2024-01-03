import styled from "styled-components";

export const Table1 = styled.table`
  border: 0px solid black; // 테두리는 검은색
  background-color: white; // 배경은 흰색
  width: 1000px; // 테이블의 너비를 설정, 필요에 따라 조정 가능
  height: 1000px; // 테이블의 높이를 설정, 필요에 따라 조정 가능
  box-shadow: 5px 5px 5px 5px gray;
  display: flex;
  justify-content: center; // 가로 방향으로 중앙 정렬
  align-items: center; // 세로 방향으로 중앙 정렬
`;

export const Td = styled.td`
  border-left: 0px solid black;
  width: 500px;
  height: 100%;
  box-shadow: -5px 5px 5px -2px gray;
  margin-left: 10%;
  flex-shrink: 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 가로 방향 중앙 정렬
  justify-content: center; // 세로 방향 중앙 정렬
`

export const Email = styled.div`
  color: rgba(0, 0, 0, 0.5);
`;