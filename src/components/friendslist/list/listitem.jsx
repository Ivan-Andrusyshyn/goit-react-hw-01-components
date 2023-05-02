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
  red: PropTypes.string.isRequired,
  green: PropTypes.string.isRequired,
};
ItemFriend.prototype = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { ItemFriend };
