"use client";
import { FaFacebookF, FaEnvelope, FaRss, FaVk } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-green-500 py-14 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Get In Touch Us</h2>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="#"
          className="p-3 bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition "
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="p-3 bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition "
        >
          <FaEnvelope />
        </a>
        <a
          href="#"
          className="p-3 bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition "
        >
          <FaRss />
        </a>
        <a
          href="#"
          className="p-3 bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
        >
          <FaVk />
        </a>
      </div>

      {/* Text */}
      <p className="text-black text-lg px-4 max-w-2xl mx-auto mb-6">
        velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse
        tincidunt velit sagittis vehicula. Duis posuere velit sagittis vehicula.
      </p>

      {/* Subscription Form */}
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-black bg-white w-80 outline-none"
        />
        <button className="bg-black text-white px-6 py-3 rounded-r-md hover:bg-gray-800 transition">
          SUBSCRIBE
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-10 bg-black text-white min-h-[100px] text-3xl">
        © 2018 Toys-Shop. All Rights Reserved | Design by
        <a href="#" className="text-pink-500">
          W3Layouts
        </a>
      </footer>
    </section>
  );
}
