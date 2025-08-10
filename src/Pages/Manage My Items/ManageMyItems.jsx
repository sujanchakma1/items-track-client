import React, { Suspense } from "react";
import UseAuth from "../../Contexts/UseAuth";
import Loading from "../../Components/Loading/Loading";
import MyItemsTable from "./MyItemsTable";
import { Helmet } from "react-helmet-async";
import MyItemsApi from "../../Hook/MyItemsApi";


const ManageMyItems = () => {
  const { user } = UseAuth();
  const {myItemsPromise} = MyItemsApi()
  console.log("inside context",user.accessToken )
  return (
    <div className="space-y-10">
      <Helmet>
        <title>My Items | ItemTrack</title>
      </Helmet>
      <h2 className="text-5xl font-bold text-center">My Items</h2>
      <Suspense fallback={<Loading></Loading>}>
        <MyItemsTable
          myItemsPromise={myItemsPromise(user?.email)}
        ></MyItemsTable>
      </Suspense>
    </div>
  );
};

export default ManageMyItems;
