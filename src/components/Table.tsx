import React from "react";
import HeadTable from "./HeadTable";
import BodyTable from "./BodyTable";
export default function Table({ data }: { data: any[] }) {
  return (
    <div className="w-full h-full overflow-x-auto">
      <HeadTable />
      <BodyTable data={data} />
    </div>
  );
}
