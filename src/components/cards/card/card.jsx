import PropTypes from "prop-types";
import { ColorBg } from "components/root/style";
import {
  ContainerCard,
  DescriptionCard,
  CardImg,
  CardTitle,
  CardMainInfo,
  CardListInfo,
  CardItemInfo,
} from "./card.styled";

const CardMain = ({
  avatar,
  location,
  stats,
  tag,
  username,
  likes,
  followers,
  views,
}) => {
  const Stats = Object.keys(stats);

  return (
    <ContainerCard>
      <DescriptionCard>
        <CardImg src={avatar} alt="User avatar" />
        <CardTitle>{username}</CardTitle>
        <CardMainInfo>{tag}</CardMainInfo>
        <CardMainInfo>{location}</CardMainInfo>
      </DescriptionCard>
      <CardListInfo>
        <CardItemInfo ColorBg={SocIndecate(likes)}>
          <span>{Stats[0]}</span>
          <span>{likes}</span>
        </CardItemInfo>
        <CardItemInfo ColorBg={SocIndecate(followers)}>
          <span>{Stats[1]}</span>
          <span>{followers}</span>
        </CardItemInfo>
        <CardItemInfo ColorBg={SocIndecate(views)}>
          <span>{Stats[2]}</span>
          <span>{views}</span>
        </CardItemInfo>
      </CardListInfo>
    </ContainerCard>
  );
};

const SocIndecate = (value) => {
  return value > 4000 ? ColorBg.green : ColorBg.yellow;
};
CardMain.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  stats: PropTypes.object.isRequired,
};
export { CardMain };
