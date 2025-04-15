"use client"
import Link from "next/link";
import { useState } from "react";
import { FaTh, FaBars } from "react-icons/fa";

const ContentTop = () => {
  const [isVerified, setIsVerified] = useState(true);
  const [sortOption, setSortOption] = useState("Featured");
  const [view, setView] = useState("grid");

  return (
    <div className="flex flex-row sm:flex-row items-center justify-between p-4 border-b text-black bg-white">
    {/* Mobile View Labels */}
    <div className="flex items-center gap-4 sm:hidden">
      <span className="text-gray-700">All categories</span>
      <span className="text-gray-700">English</span>
    </div>
  
    {/* Everything else - Hidden on mobile */}
    <div className="hidden sm:flex items-center gap-4">
      {/* Items Count */}
      <p className="text-gray-700">
        <span className="font-semibold">12,911</span> items in{" "}
        <span className="font-bold">Mobile accessory</span>
      </p>
  
      {/* Verified Only Toggle */}
      <label className="flex ml-60 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isVerified}
          onChange={() => setIsVerified(!isVerified)}
          className="hidden"
        />
        <span
          className={`w-5 h-5 flex items-center justify-center rounded ${
            isVerified ? "bg-blue-500 text-white" : "border border-gray-400"
          }`}
        >
          ✔
        </span>
        <span className="ml-2 text-gray-700 text-sm sm:text-base">Verified only</span>
      </label>
  
      {/* Sorting Dropdown */}
      <select
        className="border px-3 py-1 rounded text-gray-700 text-sm sm:text-base"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="Featured">Featured</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
        <option value="Newest">Newest</option>
      </select>
  
      {/* View Toggle Buttons */}
      <div className="flex gap-2">
        <Link href="/gridview">
          <button
            className={`p-2 border rounded ${view === "grid" ? "bg-gray-200" : "bg-white"}`}
            onClick={() => setView("grid")}
          >
            <FaTh />
          </button>
        </Link>
        <Link href="/listview">
          <button
            className={`p-2 border rounded ${view === "list" ? "bg-gray-200" : "bg-white"}`}
            onClick={() => setView("list")}
          >
            <FaBars />
          </button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default ContentTop;
