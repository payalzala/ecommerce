import Features from "../../constants/Features";
import Customer from "../../constants/Customer";
import Image from "next/image";
import ContactSection from "@/constants/ContactSection";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-center p-6">
      <h1 className="text-4xl font-bold">About Us</h1>
      <h2 className="text-xl text-pink-600 font-semibold mt-2">
        WELCOME TO OUR STORE
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse
        tincidunt velit sagittis vehicula. Duis posuere velit sagittis vehicula.
        Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis
        vehicula. Duis posuere
      </p>
      <div className="flex justify-center mt-5 w-[70%] h-[600px]">
        <Image
          src="/images/Sam-Deo.jpeg"
          alt="Smiling stuffed toy"
          width={900}
          height={600}
        />
      </div>

      {/* Features Section */}
      <Features />
      <Customer />
      <ContactSection />
    </div>
  );
}
