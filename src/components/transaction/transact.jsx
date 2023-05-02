import { Container, Item, List } from "./transact.styled";
import { TransactionItem } from "./transaction/transaction";
import transacData from "./transactinfo/transactions.json";
console.log(transacData);
const Transaction = () => {
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
        {transacData.map(({ id, type, amount, currency }) => {
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
export { Transaction };
