import { ProcentItem, Title } from "./statistic/stats";
import data from "./staticinfo/data.json";
import { StatList, StatWrrapper } from "./static.styled";
const Statistic = () => {
  return (
    <StatWrrapper>
      <Title title={"Upload stats"} />
      <StatList>
        {data.map(({ id, percentage, label }) => {
          return <ProcentItem key={id} percentage={percentage} label={label} />;
        })}
      </StatList>
    </StatWrrapper>
  );
};
export { Statistic };
