import Image from "next/image";

export default function LatestToys() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-black mb-6">Latest Toys</h2>

      {/* Image */}
      <div className="w-full flex justify-center">
        <Image
          src="/images/Sam-Deo.jpg"
          alt="Latest Toy"
          width={800}
          height={400}
          className="w-150 "
        />
      </div>

      {/* Description */}
      <p className="mt-2 text-gray-700 flex justify-self-start">
        Velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse
        tincidunt velit sagittis vehicula. Duis posuere velit sagittis vehicula.
        Duis posuere.
      </p>

      {/* Shop Now Button */}
      <button className="mt-2 bg-black flex justify-end text-white px-6 py-3 font-semibold hover:bg-gray-800 transition duration-300">
        SHOP NOW
      </button>
    </div>
  );
}
