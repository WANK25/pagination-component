import React, { useState } from "react";
import ContohPagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10; //for display total number in pagination

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full h-screen p-6 bg-primary">
      <div className="flex justify-center items-center h-[500px]">
        <h1 className="text-xl font-bold mb-4 text-white">
          Current Page: {currentPage}
        </h1>
        {/* content */}
      </div>
      <ContohPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        siblingCount={1}
      />
    </div>
  );
}

export default App;
