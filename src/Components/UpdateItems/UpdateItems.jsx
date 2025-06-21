import React, { useEffect, useState } from "react";
import UseAuth from "../../Contexts/UseAuth";
import { useLoaderData, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateItems = () => {
  const { user } = UseAuth();
  const [items, setItems] = useState("");
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const singleData = data.find((newData) => newData._id == id);
    setItems(singleData);
  }, [data, id]);
  const { thumbnail, description, title, post_type, category, location, date } =
    items;
  const handleUpdateItems = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());
    console.log(updateData);
    axios
      .put(`https://where-is-it-server-ten.vercel.app/updateItems/${id}`, updateData,{
        headers:{
          authorization: `Bearer ${user.accessToken}`
        }
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          toast.success("Item Updated Successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleUpdateItems}
        className="fieldset bg-base-200 max-w-md mx-auto my-10 border-base-300 rounded-box border p-4"
      >
        <Helmet>
          <title>Update Items | ItemTrack</title>
        </Helmet>
        <div className="text-center my-3">
          <h2 className="font-bold text-center text-3xl">Updated Items</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <legend className="fieldset-legend">Title</legend>
            <input
              type="text"
              name="title"
              defaultValue={title}
              required
              className="input w-full"
              placeholder="Title "
            />
          </div>
          <div>
            <legend className="fieldset-legend">Thumbnail</legend>
            <input
              type="url"
              name="thumbnail"
              defaultValue={thumbnail}
              required
              className="input w-full"
              placeholder="Thumbnail-URL"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Location</legend>
            <input
              type="text"
              name="location"
              defaultValue={location}
              className="input w-full"
              placeholder="Location "
            />
          </div>
          <div>
            <legend className="fieldset-legend">Date</legend>
            <input
              type="date"
              name="date"
              defaultValue={date}
              className="input w-full"
            />
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Post Type</legend>
            <select
              name="post_type"
              required
              defaultValue={post_type}
              className="select w-full"
            >
              <option disabled value="">
                Select a Type
              </option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Category</legend>
            <select
              name="category"
              required
              defaultValue={category}
              className="select w-full"
            >
              <option disabled value="">
                Select a category
              </option>
              <option value="Pets">Pets</option>
              <option value="Documents">Documents</option>
              <option value="Gadgets">Gadgets</option>
              <option value="etc.">etc.</option>
            </select>
          </fieldset>
        </div>
        <div>
          <legend className="fieldset-legend">Description</legend>
          <textarea
            placeholder="Description"
            defaultValue={description}
            required
            className="textarea textarea-xs w-full"
            name="description"
          ></textarea>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-xl">
            Contact Information
          </legend>
          <legend className="fieldset-legend">Email</legend>{" "}
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
            defaultValue={user?.email}
            readOnly
          />
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Name"
            defaultValue={user?.displayName}
            readOnly
          />
        </fieldset>

        <button className="btn btn-active btn-primary my-2">
          Updated Items
        </button>
      </form>
    </div>
  );
};

export default UpdateItems;
