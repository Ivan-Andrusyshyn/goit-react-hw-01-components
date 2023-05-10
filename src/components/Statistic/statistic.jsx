import { ProcentItem } from "./statistic/stats";
import { StatList, StatWrrapper, StatTitle } from "./static.styled";
import PropTypes from "prop-types";

const Statistic = ({ dataStatic, title }) => {
  return (
    <StatWrrapper>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {dataStatic.map(({ id, percentage, label }) => {
          return <ProcentItem key={id} percentage={percentage} label={label} />;
        })}
      </StatList>
    </StatWrrapper>
  );
};
Statistic.propTypes = {
  dataStatic: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
export { Statistic };
