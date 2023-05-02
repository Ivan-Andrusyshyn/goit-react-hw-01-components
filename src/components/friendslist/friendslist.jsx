import { List } from "./friendslist.styled";
import { ItemFriend } from "./list/listitem";
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
export { FriendsList };
