import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1
}: PaginationProps) {
  const DOTS = "...";

  const generatePageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPageNumbers >= totalPages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 2;

    if (!showLeftDots && showRightDots) {
      for (let i = 1; i <= 3 + siblingCount * 2; i++) {
        pages.push(i);
      }
      pages.push(DOTS, totalPages);
    } else if (showLeftDots && !showRightDots) {
      pages.push(1, DOTS);
      for (let i = totalPages - 2 - siblingCount * 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (showLeftDots && showRightDots) {
      pages.push(1, DOTS);
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        pages.push(i);
      }
      pages.push(DOTS, totalPages);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className="flex justify-center mt-6">
      <nav className="inline-flex items-center space-x-1 bg-blackDDS p-3 rounded-xl">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 cursor-pointer rounded-l-md text-white opacity-70 hover:opacity-80 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            Previous
          </button>

        {pages.map((page, index) => {
          if (page === DOTS) {
            return (
              <span key={index} className="px-3 py-2 text-gray-500 select-none">
                {DOTS}
              </span>
            );
          }
          return (
            <button
              key={index}
              onClick={() => onPageChange(Number(page))}
              className={`px-3 py-2 rounded-md text-white cursor-pointer ${
                currentPage === page
                  ? "bg-greenDDS "
                  : "bg-transparent text-gray-700 hover:bg-greenDDS"
              }`}
            >
              {page}
            </button>
          );
        })}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages }
            className="px-3 py-2 rounded-l-md text-white cursor-pointer opacity-70 hover:opacity-80 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            Next
          </button>
      </nav>
    </div>
  );
};

