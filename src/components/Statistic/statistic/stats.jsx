import { StatItem } from "./stats.style";
import PropTypes from "prop-types";
import { ColorBg } from "components/root/style";
const ProcentItem = ({ label, percentage }) => {
  return (
    <StatItem ColorBg={MasterColorBg(label)}>
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

ProcentItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export { ProcentItem };
