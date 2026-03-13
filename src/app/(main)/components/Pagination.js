"use client";

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center mt-10 mb-16">
      <div className="flex items-center gap-3 bg-[#FFF3E8] px-6 py-3  shadow">

        {/* Previous */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-3 py-1 rounded-md
            ${currentPage === 1 
              ? "text-black cursor-not-allowed" 
              : "bg-[#C3A080] text-black hover:bg-[#b39372]"
            }`}
        >
          ← Previous
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;

            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-md ${
                  currentPage === page
                    ? "bg-[#b39372] text-white"
                    : "text-gray-800"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-3 py-1 rounded-md
            ${currentPage === totalPages 
              ? "text-black cursor-not-allowed"
              : "bg-[#C3A080] text-black hover:bg-[#b39372]"
            }`}
        >
          Next →
        </button>

      </div>
    </div>
  );
}