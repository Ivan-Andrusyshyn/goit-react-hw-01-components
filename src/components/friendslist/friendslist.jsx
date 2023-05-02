import FriendsData from "./friendinfo/friends.json";
import { List } from "./friendslist.styled";
import { ItemFriend } from "./list/listitem";
const FriendsList = () => {
  return (
    <List>
      {FriendsData.map((el) => {
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
