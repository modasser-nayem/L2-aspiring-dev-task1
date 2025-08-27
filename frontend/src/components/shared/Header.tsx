"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
   const [open, setOpen] = useState(false);

   const navLinks = [
      { name: "Home", href: "/" },
      { name: "Create Post", href: "/posts/create" },
      { name: "Posts", href: "/posts" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
   ];

   return (
      <header className="bg-gradient-to-r from-purple-600 to-violet-700 text-white shadow-lg sticky top-0 z-50">
         <nav className="container mx-auto flex justify-between items-center p-4">
            {/* Logo */}
            <h1 className="text-2xl font-extrabold tracking-wide">
               <Link href="/">✨ Blogger</Link>
            </h1>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 font-medium">
               {navLinks.map((link) => (
                  <Link
                     key={link.href}
                     href={link.href}
                     className="hover:text-yellow-300 transition"
                  >
                     {link.name}
                  </Link>
               ))}
            </div>

            {/* Mobile Menu Button */}
            <button
               className="md:hidden"
               onClick={() => setOpen(!open)}
            >
               {open ? <X size={28} /> : <Menu size={28} />}
            </button>
         </nav>

         {/* Mobile Nav */}
         {open && (
            <div className="md:hidden bg-violet-700 text-white text-lg flex flex-col items-center space-y-4 py-4">
               {navLinks.map((link) => (
                  <Link
                     key={link.href}
                     href={link.href}
                     onClick={() => setOpen(false)}
                     className="w-full text-center py-2 hover:bg-purple-500 rounded transition"
                  >
                     {link.name}
                  </Link>
               ))}
            </div>
         )}
      </header>
   );
}
