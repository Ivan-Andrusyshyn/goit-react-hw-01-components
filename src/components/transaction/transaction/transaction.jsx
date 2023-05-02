import PropTypes from "prop-types";
import { List, Item } from "./transact.styled";
import { ColorBg } from "components/root/style";
const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <List ColorBg={MasterColorBg(type)} key={id}>
      <Item>{type}</Item>
      <Item>{amount}</Item>
      <Item>{currency}</Item>
    </List>
  );
};
const MasterColorBg = (type) => {
  return type === "invoice"
    ? ColorBg.yellow
    : type === "withdrawal"
    ? ColorBg.red
    : ColorBg.green;
};
TransactionItem.prototype = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
export { TransactionItem };
