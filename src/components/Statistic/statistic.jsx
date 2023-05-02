import { ProcentItem, Title } from "./statistic/stats";
import { StatList, StatWrrapper } from "./static.styled";
const Statistic = ({ dataStatic }) => {
  return (
    <StatWrrapper>
      <Title title={"Upload stats"} />
      <StatList>
        {dataStatic.map(({ id, percentage, label }) => {
          return <ProcentItem key={id} percentage={percentage} label={label} />;
        })}
      </StatList>
    </StatWrrapper>
  );
};
export { Statistic };
