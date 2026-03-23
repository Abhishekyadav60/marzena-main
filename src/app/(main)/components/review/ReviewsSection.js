"use client";

import { useState } from "react";
import { reviewsPageData } from "@/data/products";
import { ReviewCard, RatingBar } from "./ReviewUI";
import AddReviewModal from "./AddReviewModal";
import PrimaryButton from "@/app/(main)/components/PrimaryButton";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(reviewsPageData?.reviews);
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(false);

  const sorted = [...reviews].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const visibleReviews = showAll ? sorted : sorted.slice(0, 4);

  const total = reviews.length;

  const summary = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  };

  const handleAdd = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <div className="bg-[#FFFFFF] px-4 py-6 md:p-8">
      
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-6">

        {/* LEFT */}
        <div className="w-full md:w-auto">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold mb-4">
            {reviewsPageData.header}
          </h2>

          <div className="space-y-2 w-full sm:w-[380px] md:w-[430px]">
            {[5, 4, 3, 2, 1].map((star) => (
              <RatingBar
                key={star}
                stars={star}
                count={summary[star]}
                total={total}
                
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
          
          {/* BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="border border-[#EF9491] text-[#444444] cursor-pointer px-5 sm:px-6 md:px-7 py-2 rounded-xl text-base sm:text-lg md:text-xl w-full md:w-auto text-center"
          >
            Add Your Review
          </button>

          <div className="flex gap-3 mt-4 overflow-x-auto md:overflow-visible w-full">
            {reviewsPageData.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-32 h-36 sm:w-36 sm:h-40 md:w-44 md:h-44 object-cover object-[50%_5%] rounded flex-shrink-0"
              />
            ))}
          </div>

          <p className="text-base sm:text-lg md:text-xl">
            Sort by: <span className="text-red-400">Most Recent</span>
          </p>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="bg-[#FFFFFF] py-6 md:py-10">
        <div className="max-w-[1250px] mx-auto px-0 md:px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {visibleReviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>

          {!showAll && (
            <div className="flex justify-center mt-10 md:mt-14">
              <PrimaryButton
                variant="goldsoft"
                onClick={() => setShowAll(true)}
                className="bg-[#C1A58B] text-white text-sm px-8 md:px-10 py-2 rounded-md"
              >
                View More
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      <AddReviewModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
}