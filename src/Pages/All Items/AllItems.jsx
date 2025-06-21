import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AllItemsCard from "./AllItemsCard";
import { Helmet } from "react-helmet-async";
import { IoIosSearch } from "react-icons/io";

const AllItems = () => {
  const data = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.location.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchText, data]);
  const itemsToRender = searchText ? filteredItems : data;
  return (
    <div className="space-y-10">
      <Helmet>
        <title>All Items | ItemTrack</title>
      </Helmet>
      <h2 className="text-5xl font-bold text-center">Lost & Found Items</h2>
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search by title or location....."
          className="border border-gray-500 px-4 py-2 rounded w-full"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span className="absolute right-3 top-1/2 transform text-gray-600 -translate-y-1/2">
          <IoIosSearch  size={24}/>
        </span>
        
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {itemsToRender.map((allItems) => (
          <AllItemsCard key={allItems._id} allItems={allItems}></AllItemsCard>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
