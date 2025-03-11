import Image from "next/image";

const products = [
  { name: "soft Toys", image: "/images/baby-toy.jpg" },
  { name: "soft Toys", image: "/images/key-toy.jpg" },
  { name: "soft Toys", image: "/images/play-toy.jpg" },
];

export default function NewArrivals() {
  return (
    <div className="text-center">
      {/* Section Title */}
      <h2 className="text-4xl text-black font-extrabold mb-8">New Arrivals</h2>
      <div className="bg-green-400 max-w-[40%] mx-auto py-16 px-16 flex justify-center">
        <div className="grid grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Product Image */}
              <div className=" p-4 rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </div>

              {/* Product Name */}
              <p className="mt-2 text-lg font-semibold text-black">
                {product.name}
              </p>

              {/* Shop Now Button */}
              <button className="mt-3 bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-600 transition duration-300">
                SHOP NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
