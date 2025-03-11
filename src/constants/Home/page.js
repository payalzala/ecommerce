import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-gray-100 text-black text-sm py-2 flex justify-start px-10">
        <span className="flex items-center space-x-2">
          <FaPhoneAlt className="text-pink-500" />
          <span>+0000123 4565 32</span>
        </span>
        <span className="flex items-center space-x-2">
          <FaEnvelope className="text-pink-500" />
          <span>info@example.com</span>
        </span>
      </div>
      <Head>
        <title>Toys-Shop</title>
        <meta name="description" content="Best toys for kids" />
      </Head>

      {/* Navbar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center px-10">
        {/* Logo */}
        <h1 className="text-xl font-bold">Toys-Shop</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-pink-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-pink-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-pink-500">
              Services
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-pink-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search & Icons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-md text-black"
          />
          <button className="p-2 bg-gray-700 rounded">❤️</button>
          <button className="p-2 bg-gray-700 rounded">🛒</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[500px]">
        <div className="h-screen w-full bg-[url('/images/three-teddy.jpg')] bg-cover bg-center bg-no-repeat"></div>

        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-4xl font-bold">Pick The Best Toy For Your Kid</h2>
          <p className="mt-2 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="mt-4 px-6 py-2 bg-pink-500 rounded-md font-semibold">
            Read More
          </button>
        </div>
      </header>
      <div>
        {/* Products Section */}
        <Products /> {/* Using the Products component here */}
      </div>
    </div>
  );
}
