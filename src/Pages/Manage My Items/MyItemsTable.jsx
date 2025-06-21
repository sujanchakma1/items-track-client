import axios from "axios";
import React, { use, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router";
import Swal from "sweetalert2";
import ItemsNotShare from "../../Components/Shared/ItemsNotShare";

const MyItemsTable = ({ myItemsPromise }) => {
  const initialItems = use(myItemsPromise);
  const [myItems, setAllItems] = useState(initialItems);
  // console.log(myItems);
  const handleDeleteItems = (id) => {
    Swal.fire({
      title: "Do you want to delete this Items?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://where-is-it-server-ten.vercel.app/allItems/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            const remainingItems = myItems.filter(
              (singleItems) => singleItems._id !== id
            );
            setAllItems(remainingItems);
            Swal.fire("Deleted!", "Your Items has been deleted.", "success");
          }
        });
      } else if (result.isDenied) {
        Swal.fire("Items was not deleted.", "", "info");
      }
    });
  };
  return (
    <div>
      {myItems.length == 0 ? <ItemsNotShare></ItemsNotShare> : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Items</th>
                <th>Description</th>
                <th>Post Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myItems.map((items, index) => (
                <tr key={items._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={items.thumbnail}
                            alt="Avatar"
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
                  <td>
                    {items.description}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {items.date}
                    </span>
                  </td>
                  <td>{items.post_type}</td>
                  <th className="flex">
                    <Link to={`/updateItems/${items._id}`}>
                      <button className="btn btn-ghost btn-xs">
                        <CiEdit size={18} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteItems(items._id)}
                      className="btn btn-ghost btn-xs font-bold text-xl"
                    >
                      <TiDelete size={24} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyItemsTable;
