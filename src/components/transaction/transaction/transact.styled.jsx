import styled from "@emotion/styled";
const List = styled.tr`
  display: flex;
  background-color: ${(prop) => {
    return prop.ColorBg;
  }};
`;
const Item = styled.td`
  border: 1px solid black;
  width: 200px;
  text-align: center;
  padding: 5px 0;
`;
export { List, Item };
