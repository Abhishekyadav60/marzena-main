"use client";

import { useState } from "react";
import { Star, X } from "lucide-react";
import PrimaryButton from "@/app/(main)/components/PrimaryButton"

export default function AddReviewModal({ open, onClose, onAdd }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!rating || !text) return;

    onAdd({
      id: Date.now(),
      name: "You",
      image: "",
      verified: true,
      rating,
      text,
      date: new Date().toLocaleDateString("en-US"),
    });

    onClose();
    setRating(0);
    setText("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-[400px]">
        <button
        onClick={onClose}
        className="absolute right-4 text-black top-4">
          <X size={20} />
          </button>

        <h2 className="mb-4 font-semibold">Add Review</h2>

        <div className="flex gap-2 mb-4">
          {[1,2,3,4,5].map((star) => (
            <Star
              key={star}
              size={26}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
              className={`cursor-pointer ${
                star <= (hover || rating)
                  ? "fill-[#FFD04E] text-[#FFD04E]"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <textarea
          className="border border-[#C1A58B] w-full p-2 mb-4 rounded"
          placeholder="Write review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
         <PrimaryButton variant="goldSoft" 
         onClick={handleSubmit} 
         className="bg-[#C1A58B] px-4 py-2 text-white rounded w-full">
             Submit
          </PrimaryButton>
      </div>
    </div>
  );
}





// "use client";

// import { useState } from "react";
// import { Star, X } from "lucide-react";

// export default function AddReviewModal({ open, onClose, onAdd }) {
//   const [rating, setRating] = useState(0);
//   const [text, setText] = useState("");

//   if (!open) return null;

//   const handleSubmit = () => {
//     if (!rating || !text) return;

//     onAdd({
//       id: Date.now(),
//       rating,
//       text,
//       date: new Date().toLocaleDateString("en-US", {
//         month: "long",
//         day: "numeric",
//         year: "numeric",
//       }),
//     });

//     setRating(0);
//     setText("");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

//       <div className="bg-white p-6 rounded-xl w-[400px] relative">

//         {/* ❌ Close */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4"
//         >
//           <X size={20} />
//         </button>

//         <h2 className="text-lg font-semibold mb-4">
//           Add Your Review
//         </h2>

//         {/* ⭐ Rating */}
//         <div className="flex gap-2 mb-4">
//           {[1,2,3,4,5].map((star) => (
//             <Star
//               key={star}
//               size={26}
//               onClick={() => setRating(star)}
//               className={`cursor-pointer ${
//                 star <= rating
//                   ? "fill-[#C4A484] text-[#C4A484]"
//                   : "text-gray-300"
//               }`}
//             />
//           ))}
//         </div>

//         {/* ✍️ Text */}
//         <textarea
//           placeholder="Write your review..."
//           className="border w-full p-2 rounded mb-4"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         {/* 🚀 Submit */}
//         <button
//           onClick={handleSubmit}
//           className="bg-[#C4A484] text-white px-4 py-2 rounded w-full"
//         >
//           Submit Review
//         </button>
//       </div>
//     </div>
//   );
// }