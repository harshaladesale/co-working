import { useEffect, useState } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetch reviews
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/reviews`)
      .then((res) => setReviews(res.data));
  }, []);

  // Auto slider (every 3 seconds)
  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  if (reviews.length === 0) {
    return <p className="text-center">Loading reviews...</p>;
  }

  const { name, rating, comment } = reviews[index];

  return (
    <div className="flex flex-col items-center justify-center min-h-[350px]">
      <h3 className="text-xl font-bold mt-4 mb-2">Customer Reviews</h3>

      {/* Review Card */}
      <div className="w-[400px] p-6 bg-white shadow-xl rounded-lg text-center transition-all duration-500">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-yellow-500 text-lg">⭐ {rating}</p>
        <p className="text-gray-600 mt-3">{comment}</p>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2 mt-4">
        {reviews.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer text-2xl ${
              index === i ? "text-black" : "text-gray-400"
            }`}
          >
            ●
          </span>
        ))}
      </div>

      <p className="mt-2 text-sm text-gray-500">
        {index + 1} / {reviews.length}
      </p>
    </div>
  );
};

export default Reviews;
