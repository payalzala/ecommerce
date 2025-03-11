import Image from "next/image";

const reviews = [
  {
    name: "Milky Deo",
    role: "Doll Power",
    profile: "/images/profile1.jpg",
    image: "/images/Sam-Deo.jpg",
    review:
      "Velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis vehicula.",
  },
  {
    name: "Sam Deo",
    role: "Doll Power",
    profile: "/images/t3.jpg",
    image: "/images/Milky Deo.jpg",
    review:
      "Velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis vehicula.",
  },
];

export default function CustomerReviews() {
  return (
    <div
      className="bg-cover bg-center py-16 px-8 mx-auto max-w-5xl rounded-lg"
      style={{ backgroundImage: "url('/images/three-teddy.jpg')" }}
    >
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-white text-center mb-10">
        Customers Review
      </h2>

      {/* Review Grid */}
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-200 py-3  px-2.5 flex flex-col items-start"
            >
              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <Image
                  src={review.profile}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-green-400 flex justify-end"
                />
                <div>
                  <h3 className="text-lg font-bold">{review.name}</h3>
                  <p className="text-green-500 text-sm">{review.role}</p>
                </div>
              </div>

              {/* Review Image */}
              <div className="mt-4">
                <Image
                  src={review.image}
                  alt="Customer Review"
                  width={200}
                  height={200}
                  className="py-3"
                />
              </div>

              {/* Review Text */}
              <p className="mt-1 text-gray-700 text-center italic">
                <span className="text-red-500">“</span>
                {review.review}
                <span className="text-red-500">”</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
