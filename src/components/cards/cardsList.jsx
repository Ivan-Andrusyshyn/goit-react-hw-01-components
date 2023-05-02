import { CardWrapper } from "./cards.styled";
import { CardMain } from "./card/card";
const Card = ({ dataPersonCard }) => {
  return (
    <CardWrapper>
      <CardMain
        tag={dataPersonCard.tag}
        avatar={dataPersonCard.avatar}
        stats={dataPersonCard.stats}
        location={dataPersonCard.location}
        username={dataPersonCard.username}
        followers={dataPersonCard.stats.followers}
        likes={dataPersonCard.stats.likes}
        views={dataPersonCard.stats.views}
      />
    </CardWrapper>
  );
};

export { Card };
