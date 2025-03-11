import Image from "next/image";

const products = [
  { name: "Baby Toys", image: "/images/baby-toy.jpg" },
  { name: "Key Toys", image: "/images/key-toy.jpg" },
  { name: "Play Toys", image: "/images/play-toy.jpg" },
  { name: "Gift Toys", image: "/images/gift-toy.jpg" },
  { name: "Soft Toys", image: "/images/soft-toy.jpg" },
  { name: "Lite-Toys", image: "/images/lite-toy.jpg" },
];

export default function Products() {
  return (
    <div className="py-12 bg-white text-center relative">
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-8 text-black">Best Products</h2>

      {/* Discount Banner (Centered Over Grid) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
        <div className="bg-gray-800 bg-opacity-80 px-8 py-4 rounded-lg shadow-lg">
          <p className="text-white text-lg font-bold">
            GET UP TO{" "}
            <span className="text-red-500 mx-2 font-extrabold">70% OFF</span> ON
            SELECTED TOYS
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-x-16 gap-y-2">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Box with Image */}
              <div className="w-[140px] h-[140px] border border-gray-300 rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>

              {/* Title (Now Completely Outside the Box) */}
              <p className="mt-1 text-sm font-semibold text-gray-800 text-center">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
