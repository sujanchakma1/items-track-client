import React, { use, useState } from "react";
import ItemsNotRecovered from "../Shared/ItemsNotRecovered";
import { CiViewTable } from "react-icons/ci";
import { PiTextColumnsThin } from "react-icons/pi";
import RecoveredItemColumn from "./RecoveredItemColumn";

const RecoveredItemsTable = ({ myRecoveredPromise }) => {
  const myRecovered = use(myRecoveredPromise);
  const [layout, setLayout] = useState("column");

  const toggleLayout = (type) => {
    setLayout(type);
  };
  return (
    <div>
      {myRecovered.length == 0 ? (
        <ItemsNotRecovered></ItemsNotRecovered>
      ) : (
        <div className="overflow-x-auto">
          <div className="flex gap-5 justify-end my-10">
            <button
              onClick={() => toggleLayout("column")}
              className={`cursor-pointer ${
                layout === "column" ? "text-blue-500" : ""
              }`}
            >
              <PiTextColumnsThin size={36} />
            </button>
            <button
              onClick={() => toggleLayout("table")}
              className={`cursor-pointer ${
                layout === "table" ? "text-blue-500" : ""
              }`}
            >
              <CiViewTable size={32}/>
            </button>
          </div>
          {layout === "table" && (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Items</th>
                  <th>Description</th>
                  <th>Recovered Info</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myRecovered.map((items, index) => (
                  <tr key={items._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={items.thumbnail}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{items.title}</div>
                          <div className="text-sm opacity-50">
                            {items.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{items.description}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={items.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            {" "}
                            Recovered by{" "}
                            <span className="font-bold">{items.name}</span> !
                          </div>
                          <div>
                            Recovered in{" "}
                            <span className="text-sm opacity-50">
                              {items.recoveredLocation}
                            </span>
                          </div>
                          <div>
                            Recovered on{" "}
                            <span className="text-sm opacity-50">
                              {items.recoveredDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {layout === "column" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {myRecovered.map((recovered) => (
                <RecoveredItemColumn
                  key={recovered._id}
                  recovered={recovered}
                ></RecoveredItemColumn>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecoveredItemsTable;
