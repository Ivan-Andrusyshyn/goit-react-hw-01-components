import { List } from "./friendslist.styled";
import { ItemFriend } from "./list/listitem";
import PropTypes from "prop-types";

const FriendsList = ({ dataFriends }) => {
  return (
    <List>
      {dataFriends.map((el) => {
        return (
          <ItemFriend
            key={el.id}
            avatar={el.avatar}
            isOnline={el.isOnline}
            name={el.name}
          />
        );
      })}
    </List>
  );
};
FriendsList.propTypes = {
  dataFriends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
export { FriendsList };
