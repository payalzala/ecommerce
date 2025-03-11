import Image from "next/image";

const products = [
  {
    image: "/images/white-teddy.png",
    description:
      "Velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis vehicula.",
  },
  {
    image: "/images/white-teddy.png",
    description:
      "Velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis vehicula.",
  },
];

export default function PremiumToys() {
  return (
    <div className="bg-green-500 min-h-screen flex flex-col items-center justify-center py-12">
      {/* Section Title */}
      <h2 className="text-black text-4xl font-bold mb-12">Premium Toys</h2>

      {/* Toy Layout */}
      <div className="relative w-full max-w-6xl space-y-16">
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex items-center justify-center gap-8 md:gap-12 lg:gap-24 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-80 flex justify-center">
              <Image
                src={product.image}
                alt="Premium Toy"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="border border-white p-6 rounded-lg shadow-lg w-80 md:w-96 text-black text-center">
              <p className="text-sm md:text-base">{product.description}</p>
              <button className="mt-4 bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
