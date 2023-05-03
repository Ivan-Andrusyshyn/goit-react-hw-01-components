import { Card } from "components/cards/cardsList";
import { Statistic } from "components/Statistic/statistic";
import { FriendsList } from "components/friendslist/friendslist";
import { Transaction } from "components/transaction/transact";
// ==============Data
import dataStatic from "./datainfo/staticinfo/data.json";
import dataFriends from "./datainfo/friendinfo/friends.json";
import dataPersonCard from "./datainfo/personinfo/user.json";
import dataTransaction from "./datainfo/transactinfo/transactions.json";

function App() {
  return (
    <>
      <Card dataPersonCard={dataPersonCard} />
      <Statistic dataStatic={dataStatic} title={"Upload stats"} />
      <FriendsList dataFriends={dataFriends} />
      <Transaction dataTransaction={dataTransaction} />
    </>
  );
}

export { App };
