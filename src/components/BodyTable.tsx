import React from "react";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

// dummy data type, replace with your actual data type

export default function BodyTable({ data }: { data: any[] }) {
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  function onDelete(id: any) {
    // Remove the item with the given id from the data array
    // Since data is a prop, you can't mutate it directly.
    // Ideally, the parent should handle deletion.
    // You can call a prop like onDelete if passed from parent.
    // For now, just alert as a placeholder.
    console.log(`Delete item with id: ${id}`);
  }

  return (
    <div className="w-full flex flex-col gap-2 mt-2 ">
      {data.map((item, index) => (
        <div
          key={item.id}
          onClick={() => setSelectedId(item.id)}
          className={`flex items-center bg-gray-800 text-white rounded-xl text-sm gap-4 hover:bg-gray-700 transition cursor-pointer ${
            selectedId === item.id ? "border-2 border-white" : ""
          }`}
        >
          <div className="w-[50px] border-r border-greyDDS px-4 py-3 flex justify-center items-center">
            {index + 1}
          </div>
          <div className="flex-1 border-r border-greyDDS px-4 py-3 flex justify-end items-center">
            {item.latitude}
          </div>
          <div className="flex-1 border-r border-greyDDS px-4 py-3 flex justify-end items-center">
            {item.longitude}
          </div>
          <div className="flex-1 border-r border-greyDDS px-4 py-3 flex justify-end items-center">
            {item.bearing}
          </div>
          <div className="flex-1 border-r border-greyDDS px-4 py-3 flex justify-end items-center">
            {item.range}
          </div>
          <div className="flex-1 border-r border-greyDDS px-4 py-3 flex justify-end items-center">
            {item.altitude}
          </div>
          <div className="flex-1 border-r border-greyDDS px-4 py-3 flex justify-end items-center">
            {item.speed}
          </div>
          <div className="flex-1 border-r border-greyDDS px-4 py-3 flex justify-end items-center">
            {item.course}
          </div>
          <div className="flex-1 border-r border-greyDDS px-4 py-3 flex justify-end items-center">
            {item.vertical}
          </div>
          <div className="flex-1  px-4 py-3 flex justify-center items-center">
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer p-2 "
              onClick={(e) => {
                e.stopPropagation(); // Prevent the row click event
                onDelete(item.id);
              }}
            >
              <FaRegTrashAlt className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
