import { Container, Item, List } from "./transact.styled";
import { TransactionItem } from "./transaction/transaction";
import PropTypes from "prop-types";

const Transaction = ({ dataTransaction }) => {
  return (
    <Container>
      <thead>
        <List>
          <Item>Type</Item>
          <Item>Amount</Item>
          <Item>Currency</Item>
        </List>
      </thead>
      <tbody>
        {dataTransaction.map(({ id, type, amount, currency }) => {
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </Container>
  );
};
Transaction.propTypes = {
  dataTransaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export { Transaction };
