import styled from "@emotion/styled";

const StatItem = styled.li`
  justify-content: center;
  background-color: ${(prop) => {
    return prop.ColorBg;
  }};
  border: 1px solid green;
  list-style: none;
  width: 98px;
  height: 60px;
  display: flex;
  text-align: center;
  align-items: center;
  color: green;
  flex-direction: column;
`;
export { StatItem };
