import styled from "@emotion/styled";
import { ColorBg } from "components/root/style";
const ContainerCard = styled.div`
  background-color: #ffffff;
  border: 2px solid green;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 285px;
  border-radius: 10px;
`;
const DescriptionCard = styled.div`
  padding: 20px 40px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  p {
    margin: 0;
  }
`;
const CardImg = styled.img`
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  border-radius: 50%;
`;
const CardMainInfo = styled.p`
  font-size: 14px;
  color: black;
`;
const CardListInfo = styled.ul`
  display: flex;
  justify-content: center;
  background-color: gray;
  padding: 0;
`;
const CardTitle = styled.h2`
  color: gray;
  margin: 0;
`;
const CardItemInfo = styled.li`
  border-radius: 10px;
  width: 82px;
  height: 55px;
  border: 1px solid green;
  list-style: none;
  justify-content: center;
  background-color: ${(prop) => {
    return prop.ColorBg;
  }};
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  text-align: center;
`;
export {
  ContainerCard,
  DescriptionCard,
  CardImg,
  CardTitle,
  CardMainInfo,
  CardListInfo,
  CardItemInfo,
};
