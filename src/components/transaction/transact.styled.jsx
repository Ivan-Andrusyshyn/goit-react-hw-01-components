import styled from "@emotion/styled";
const Container = styled.table`
  color: white;
  margin: 0 auto;
`;
const List = styled.tr`
  display: flex;
`;
const Item = styled.th`
  border: 1px solid black;
  width: 200px;
  text-align: center;
  background-color: palegreen;
  padding: 12px 0;
`;
const ContainWrapper = styled.div`
  background-color: #ff000055;
`;
export { Container, Item, List, ContainWrapper };
