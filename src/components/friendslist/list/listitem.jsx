import PropTypes from "prop-types";
import { Item, Online, Avatar, NameFriend } from "./listitem.styled";
import { ColorBg } from "components/root/style";
const ItemFriend = ({ avatar, id, name, isOnline }) => {
  return (
    <Item key={id}>
      <Online isOnlineColor={isOnline === true ? ColorBg.green : ColorBg.red} />
      <Avatar src={avatar} alt={avatar} width="48" />
      <NameFriend>{name}</NameFriend>
    </Item>
  );
};
ColorBg.prototype = {
  red: PropTypes.string,
  green: PropTypes.string,
};
ItemFriend.prototype = {
  avatar: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export { ItemFriend };
