import styled from "@emotion/styled";
const StatWrrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background-color: #80008073;
`;
const StatTitle = styled.h2`
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  margin: 0;
  padding: 5px;
  width: 490px;
  background-color: #892be28a;
`;
const StatList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
`;
export { StatWrrapper, StatList, StatTitle };
