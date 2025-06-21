import React, { Suspense } from "react";
import UseAuth from "../../Contexts/UseAuth";
import RecoveredItemsTable from "./RecoveredItemsTable";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet-async";
import MyRecoveredPromise from "../../Hook/MyRecoveredPromise";


const RecoveredItems = () => {
  const { user } = UseAuth();
  const {myRecoveredPromise} = MyRecoveredPromise()
  return (
    <div className="space-y-10">
      <Helmet>
        <title>Recovered Items | ItemTrack</title>
      </Helmet>
      <h2 className="text-5xl font-bold text-center">My Recovered Items</h2>
      <Suspense fallback={<Loading></Loading>}>
        <RecoveredItemsTable
          myRecoveredPromise={myRecoveredPromise(user?.email)}
        ></RecoveredItemsTable>
      </Suspense>
    </div>
  );
};

export default RecoveredItems;
