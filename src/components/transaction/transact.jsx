import { Container, Item, List, ContainWrapper } from "./transact.styled";
import { TransactionItem } from "./transaction/transaction";
const Transaction = ({ dataTransaction }) => {
  return (
    <ContainWrapper>
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
    </ContainWrapper>
  );
};
export { Transaction };
