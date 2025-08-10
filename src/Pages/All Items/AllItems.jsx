import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AllItemsCard from "./AllItemsCard";
import { Helmet } from "react-helmet-async";
import { IoIosSearch } from "react-icons/io";

const AllItems = () => {
  const data = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [searchInput, setSearchInput] = useState(""); // temp input before clicking search
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterType, setFilterType] = useState("all"); // "lost", "found", "all"

  useEffect(() => {
    let filtered = data;

    // Filter by type
    if (filterType !== "all") {
      filtered = filtered.filter((item) => item.post_type === filterType);
    }

    // Filter by title or location
    if (searchText) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.location.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [searchText, filterType, data]);

  const itemsToRender =
    searchText || filterType !== "all" ? filteredItems : data;

  return (
    <div className="space-y-10">
      <Helmet>
        <title>All Items | ItemTrack</title>
      </Helmet>

      <h2 className="text-5xl font-bold text-center">Lost & Found Items</h2>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
        {/* Search Input */}
        <div className="flex gap-3 w-full">
          <input
            type="text"
            placeholder="Search by title or location..."
            className="input rounded w-full md:w-1/3"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="btn btn-primary rounded-full"
            onClick={() => setSearchText(searchInput)}
          >
            Search
          </button>
        </div>

        {/* Sorting Dropdown */}
        <select
          className="select w-full md:w-1/3"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>
      </div>

      {/* Items Grid */}
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {itemsToRender.map((allItems) => (
          <AllItemsCard key={allItems._id} allItems={allItems}></AllItemsCard>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
