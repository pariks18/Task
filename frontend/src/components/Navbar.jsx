import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="bg-white text-black shadow-lg ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center scroll-smooth">

       
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-black hover:text-gray-300 transition"
        >
          FLIPR
        </Link>

       
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <a href="#projects" className="hover:text-gray-400 transition">
           Projects
           </a>

          <a href="#clients" className="hover:text-gray-400 transition">
            Happy Clients
          </a>
          <a href="#Subscription" className="hover:text-gray-400 transition">
            Subscription
          </a>
          <a
            href="#contact"
            className="px-4 rounded-md h-6 bg-orange-300 text-black hover:bg-gray-200 transition"
          >
            Contact
          </a>

          <Link
            to="/admin"
            className="px-4 rounded-md h-6 bg-orange-300 text-black hover:bg-gray-200 transition"
          >
            Admin Panel
          </Link>

        </div>

       
       
      </div>

      
    </nav>
  );
}
