import styled from "@emotion/styled";

const StatTitle = styled.h2`
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  margin: 0;
  padding: 5px;
  width: 490px;
  background-color: #892be28a;
`;

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
export { StatTitle, StatItem };
