import { CardWrapper } from "./cards.styled";
import person from "./personinfo/user.json";
import { CardMain } from "./card/card";
const Card = () => {
  return (
    <CardWrapper>
      <CardMain
        tag={person.tag}
        avatar={person.avatar}
        stats={person.stats}
        location={person.location}
        username={person.username}
        followers={person.stats.followers}
        likes={person.stats.likes}
        views={person.stats.views}
      />
    </CardWrapper>
  );
};

export { Card };
