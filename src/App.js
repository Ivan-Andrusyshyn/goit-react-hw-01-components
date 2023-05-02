import { Card } from "components/cards/cardsList";
import { Statistic } from "components/Statistic/statistic";
import { FriendsList } from "components/friendslist/friendslist";
import { Transaction } from "components/transaction/transact";
function App() {
  return (
    <>
      <Card />
      <Statistic />
      <FriendsList />
      <Transaction />
    </>
  );
}

export { App };
