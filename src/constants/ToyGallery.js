import Image from "next/image";

const products = [
  {
    image: "/images/pink-teddy.jpeg",
    description:
      "Velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis vehicula.",
  },
  {
    image: "/images/Milky Deo.jpg",
    description:
      "Velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis vehicula.",
  },
  {
    image: "/images/Sam-Deo.jpg",
    description:
      "Velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis vehicula.",
  },
];

export default function ToyGallery() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex flex-col items-center">
            <Image
              src={products[0].image}
              alt="Toy Image"
              width={500}
              height={500}
              className=""
            />
            <p className="mt-4 text-gray-700 text-center leading-relaxed px-4">
              {products[0].description}
            </p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Next two images stacked in a column */}
        <div className="flex flex-col gap-8">
          {products.slice(1).map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={product.image}
                alt="Toy Image"
                width={300}
                height={300}
                className=""
              />
              <p className="mt-4 text-gray-700 text-center leading-relaxed px-4">
                {product.description}
              </p>
              <button className="mt-4 bg-black text-white px-6 py-2  font-semibold hover:bg-gray-800 transition duration-300">
                SHOP NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
