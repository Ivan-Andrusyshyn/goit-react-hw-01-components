import PropTypes from "prop-types";
import { Item, Online, Avatar, NameFriend } from "./listitem.styled";
import { ColorBg } from "components/root/style";
const ItemFriend = ({ avatar, name, isOnline }) => {
  return (
    <Item isOnlineColor={ChooseColor({ isOnline })}>
      <Online isOnlineColor={ChooseColor({ isOnline })} />
      <Avatar src={avatar} alt={avatar} width="48" />
      <NameFriend>{name}</NameFriend>
    </Item>
  );
};
const ChooseColor = ({ isOnline }) => {
  return isOnline === true ? ColorBg.green : ColorBg.red;
};

ItemFriend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { ItemFriend };
