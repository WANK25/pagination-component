import React, { useState } from "react";
import ContohPagination from "./components/Pagination";
import Table from "./components/Table";
import { useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 20; // total items per page

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:10062");

    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);

        if (Array.isArray(message)) {
          setData(message);
        } else if (message.type === "update" && Array.isArray(message.data)) {
          setData((prev) => [...message.data, ...prev]);
        }
      } catch (err) {
        console.error("WebSocket parse error:", err);
      }
    };

    return () => socket.close();
  }, []);

  // Ambil data sesuai halaman
  const pagedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className="w-full h-screen p-6 bg-primary flex flex-col items-between justify-between">
      <Table data={pagedData} />
      <div className="flex justify-between items-center bg-blackDDS h-fit px-5 rounded-xl">
        <ContohPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          siblingCount={1}
        />
        <button className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
          Delete All
        </button>
      </div>
    </div>
  );
}

export default App;
