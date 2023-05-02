import styled from "@emotion/styled";

const Item = styled.li`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 60px;
  border: 1px solid
    ${(props) => {
      return props.isOnlineColor;
    }};
  padding: 5px 8px;
  border-radius: 10px;
`;
const Online = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => {
    return props.isOnlineColor;
  }};
`;
const Avatar = styled.img`
  border-radius: 10px;
`;
const NameFriend = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: black;
`;
export { Item, Online, Avatar, NameFriend };
