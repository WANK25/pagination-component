import React from "react";

export default function HeadTable() {
  return (
    <div className="w-full flex justify-centeritems-center bg-blackDDS text-white rounded-xl px-4 py-3 text-sm font-semibold gap-4">
      <div className="w-[50px] flex justify-center items-center">No</div>
      <div className="flex-1 flex justify-center items-center">Latitude</div>
      <div className="flex-1 flex justify-center items-center">Longitude</div>
      <div className="flex-1 flex justify-center items-center">Bearing</div>
      <div className="flex-1 flex justify-center items-center">Range</div>
      <div className="flex-1 flex justify-center items-center">Altitude</div>
      <div className="flex-1 flex justify-center items-center">Speed</div>
      <div className="flex-1 flex justify-center items-center">Course</div>
      <div className="flex-1 flex justify-center items-center">Vertical</div>
      <div className="flex-1 flex justify-center items-center">Action</div>
    </div>
  );
}
