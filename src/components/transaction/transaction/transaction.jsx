import PropTypes from "prop-types";
import { List, Item } from "./transact.styled";
import { ColorBg } from "components/root/style";
const TransactionItem = ({ type, amount, currency }) => {
  return (
    <List ColorBg={MasterColorBg(type)}>
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
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export { TransactionItem };
