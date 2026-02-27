import React, { useState } from "react";
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import g4 from "../assets/images/g4.jpg";
import g5 from "../assets/images/g5.jpg";
import g7 from "../assets/images/g7.jpg";
import g8 from "../assets/images/g8.jpg";
import g9 from "../assets/images/g9.jpg";
import walk from "../assets/images/walk.jpg";

const Gallery = () => {
  const images = [g1, g2, g3, g4, g5, g7, g8, g9, walk];
  const [currentIndex, setCurrentIndex] = useState(null);

  const closeModal = () => setCurrentIndex(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Our Gallery
        </h2>

        {/* Masonry Responsive Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-xl cursor-pointer group break-inside-avoid"
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={src}
                alt="Gallery"
                className="w-full rounded-3xl transition duration-700 group-hover:scale-110 group-hover:brightness-75"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="text-white text-xl font-semibold tracking-wide bg-black/40 px-6 py-2 rounded-full backdrop-blur-md">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full flex items-center justify-center">

            <img
              src={images[currentIndex]}
              alt="Preview"
              className="max-h-[85vh] rounded-2xl shadow-2xl transition duration-500"
            />

            {/* Close */}
            <button
              className="absolute top-6 right-6 bg-white/20 backdrop-blur-lg text-white text-2xl w-12 h-12 rounded-full hover:bg-white/40 transition"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Previous */}
            <button
              className="absolute left-4 text-white text-4xl hover:scale-125 transition"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* Next */}
            <button
              className="absolute right-4 text-white text-4xl hover:scale-125 transition"
              onClick={nextImage}
            >
              ›
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;