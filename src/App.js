import { Card } from "components/cards/cardsList";
import { Statistic } from "components/Statistic/statistic";
import { FriendsList } from "components/friendslist/friendslist";
import { Transaction } from "components/transaction/transact";
// ==============Data
import dataStatic from "./components/datainfo/staticinfo/data.json";
import dataFriends from "./components/datainfo/friendinfo/friends.json";
import dataPersonCard from "./components/datainfo/personinfo/user.json";
import dataTransaction from "./components/datainfo/transactinfo/transactions.json";

function App() {
  return (
    <>
      <Card dataPersonCard={dataPersonCard} />
      <Statistic dataStatic={dataStatic} />
      <FriendsList dataFriends={dataFriends} />
      <Transaction dataTransaction={dataTransaction} />
    </>
  );
}

export { App };
