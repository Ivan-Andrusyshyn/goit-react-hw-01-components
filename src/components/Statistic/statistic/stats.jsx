import { StatTitle, StatItem } from "./stats.style";
import PropTypes from "prop-types";
import { ColorBg } from "components/root/style";
const Title = ({ title }) => {
  if (title) {
    return <StatTitle>{title}</StatTitle>;
  }
};
const ProcentItem = ({ id, label, percentage }) => {
  return (
    <StatItem key={id} ColorBg={MasterColorBg(label)}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatItem>
  );
};
const MasterColorBg = (label) => {
  return label === ".mp3"
    ? ColorBg.yellow
    : label === ".pdf"
    ? ColorBg.green
    : ColorBg.red;
};
Title.prototype = {
  title: PropTypes.string.isRequired,
};
ProcentItem.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export { ProcentItem, Title };
