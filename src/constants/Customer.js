"use client";

export default function Customer() {
  const reviews = [
    {
      name: "Milky Deo",
      image: "/images/profile1.jpg",
      review:
        "velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis vehicula. Duis posuere velit sagittis vehicula.",
      toyImage: "/images/Milky Deo.jpg",
    },
    {
      name: "Sam Deo",
      image: "/images/review1.jpg",
      review:
        "velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis vehicula. Duis posuere velit sagittis vehicula.",
      toyImage: "/images/Sam-Deo.jpeg",
    },
  ];

  return;
  <section
    className="py-6 bg-cover bg-center bg-no-repeat relative"
    style={{ backgroundImage: "url('/images/three-teddy.jpg')" }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="relative z-10 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Customers Review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white/50 p-6 text-center mx-4 md:mx-24 my-4 "
          >
            {/* Profile Info */}
            <div className="relative mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20  rounded-full mx-auto"
              />
              <h3 className="mt-2 text-xl font-semibold">{review.name}</h3>
              <p className="text-green-500 font-medium">Duis posuere</p>
            </div>

            {/* Toy Image */}
            <img
              src={review.toyImage}
              alt="Customer's toy"
              className="w-96 h-60 object-cover mb-4 "
            />

            {/* Review Text */}
            <p className="text-gray-700 italic text-lg">
              <span className="text-pink-600 text-2xl font-bold">“</span>
              {review.review}
              <span className="text-pink-600 text-2xl font-bold">”</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>;
}
