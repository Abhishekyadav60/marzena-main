import { Star, Check } from "lucide-react";

/*Stars */
export function Stars({ rating }) {
  return (
    <div className="flex gap-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={`
            sm:w-[20px] sm:h-[20px]
            md:w-[22px] md:h-[22px]
            ${i < rating
              ? "fill-[#FFD04E] text-[#FFD04E]"
              : "text-[#FFD04E]"
            }
          `}
        />
      ))}
    </div>
  );
}

/*Avatar */
export function Avatar({ name, image }) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="w-7 h-7 sm:w-8 sm:h-8 mt-2 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs sm:text-sm">
      {name.charAt(0)}
    </div>
  );
}

/*Rating Bar */
export function RatingBar({ stars, count, total }) {
  const percent = total ? (count / total) * 100 : 0;

  return (
    <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
      
      <span className="text-lg sm:text-xl md:text-2xl w-6 sm:w-7">
        {stars}
        <span className="text-xl sm:text-2xl md:text-3xl text-[#FFD04E]">★</span>
      </span>

      <div className="flex-1 h-[6px] sm:h-2 mt-2 bg-gray-200 rounded">
        <div
          className="h-full bg-[#FFD04E] rounded"
          style={{ width: `${percent}%` }}
        />
      </div>

      <span className="text-sm sm:text-md text-gray-500">
        {count}
      </span>
    </div>
  );
}

/* Review Card */
export function ReviewCard({ review }) {
  return (
    <div className="border border-[#C1A58B] rounded-2xl p-4 sm:p-5 bg-white shadow-sm">
      
      <div className="flex justify-between mb-2 flex-wrap sm:flex-nowrap">
        
        <div className="flex items-center gap-2 flex-wrap">
          <Avatar name={review.name} image={review.image} />

          <span className="font-inter font-normal text-[16px] sm:text-[18px] md:text-[20.04px] leading-[150%]">
            {review.name}
          </span>

          {review.verified && (
            <span className="bg-green-500 rounded-full p-[2px] sm:p-1">
              <Check size={10} className="text-white" />
            </span>
          )}
        </div>

        <Stars rating={review.rating} />
      </div>

      <p className="text-[#666464] mb-2 font-medium text-[14px] sm:text-[15px] md:text-[17px] leading-[120%]">
        {review.text}
      </p>

      <p className="text-[#999494] mt-2 mb-2 font-medium text-[13px] sm:text-[14px] md:text-[16px] leading-[22px]">
        Posted on {review.date}
      </p>
    </div>
  );
}