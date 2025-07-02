import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbDetails } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router";
import UseAuth from "../../Contexts/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const LostFoundDetails = () => {
  const { user } = UseAuth();
  const [items, setItems] = useState("");
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const singleData = data.find((newData) => newData._id == id);
    setItems(singleData);
  }, [data, id]);
  const {
    thumbnail,
    description,
    title,
    _id,
    post_type,
    category,
    location,
    date,
    status,
  } = items;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const { recoveredLocation, recoveredDate, name, email, photoURL } =
      Object.fromEntries(formdata.entries());
    const status = "recovered";
    const recoveredData = {
      thumbnail,
      description,
      title,
      post_type,
      category,
      location,
      date,
      status,
      recoveredLocation,
      recoveredDate,
      name,
      email,
      photoURL,
    };
    const updateData = {
      _id,
      status,
    };
    console.log(recoveredData);
    axios
      .post(
        "https://where-is-it-server-ten.vercel.app/recovered",
        recoveredData,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          axios
            .patch(
              "https://where-is-it-server-ten.vercel.app/allItems",
              updateData,
              {
                headers: {
                  authorization: `Bearer ${user.accessToken}`,
                },
              }
            )
            .then((res) => {
              console.log(res.data);
              Swal.fire({
                title: "Successfully Recovered!",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
              });
              e.target.reset();
              document.getElementById("my_modal").close();
            });
        }
      });
  };
  const handleOpenModal = () => {
    if (status === "recovered") {
      Swal.fire({
        title: "Already Recovered!",
        icon: "info",
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    document.getElementById("my_modal").showModal();
  };

  return (
    <div className="card bg-base-200 shadow-md">
      <Helmet>
        <title>Items Details | ItemTrack</title>
      </Helmet>
      <figure>
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="w-full h-[550px] mask  rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <p>Category : {category}</p>
        <p>Location : {location}</p>
        <p>Date : {date}</p>
        <p>Status : {status}</p>
        <p>{description}</p>
        <div className="card-actions">
          <button
            onClick={handleOpenModal}
            className="btn btn-outline btn-primary w-full rounded-lg"
          >
            <TbDetails />
            {post_type == "Lost" ? "Found This!" : "This is Mine!"}
          </button>
        </div>
      </div>
      <dialog id="my_modal" className="modal">
        <div className="modal-box overflow-visible z-50">
          {" "}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit}>
            <label className="label">Recovered Location</label>
            <input
              type="text"
              name="recoveredLocation"
              className="input input-bordered w-full"
              placeholder="Recovered Location"
              required
            />
            <label className="label">Recovered Date</label>
            <input
              type="date"
              name="recoveredDate"
              className="input input-bordered w-full"
            />
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              className="input w-full"
              placeholder="Name"
              readOnly
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={user?.email}
              className="input w-full"
              placeholder="Email"
              readOnly
            />
            <label className="label">Photo URL</label>
            <input
              type="url"
              name="photoURL"
              value={user?.photoURL}
              className="input w-full"
              placeholder="Photo URL"
              readOnly
            />
            <button className="btn btn-neutral mt-4 w-full rounded-lg">Submit</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default LostFoundDetails;
