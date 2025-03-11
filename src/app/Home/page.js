"use client";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Products from "../../constants/Products";
import NewArrivals from "../../constants/NewArrivals";
import CustomerReviews from "../../constants/CustomerReviews";
import LatestToys from "../../constants/LatestToys";
import ToyGallery from "../../constants/ToyGallery";
import PremiumToys from "../../constants/PremiumToys";

export default function HeroSection() {
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center pt-16"
        style={{ backgroundImage: "url('/images/three-teddy.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-black text-white py-3 px-6 flex justify-between items-center z-50">
          <h1 className="text-xl font-bold">Toys-Shop</h1>

          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-md w-48 sm:w-64 md:w-80 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600 transition">
              🔍
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Pick The Best Toy For Your Kid
          </h2>
          <p className="mt-4 text-lg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
          <button className="mt-6 bg-pink-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-600 transition">
            READ MORE
          </button>
        </div>
      </section>

      {/* Other Sections */}
      <Products />
      <NewArrivals />
      <CustomerReviews />
      <LatestToys />
      <ToyGallery />
      <PremiumToys />
    </>
  );
}
