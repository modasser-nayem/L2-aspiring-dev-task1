import Link from "next/link";
import React from "react";

const HeroSection = () => {
   return (
      <section className="bg-gradient-to-r from-purple-600 to-violet-700 text-white py-32 text-center">
         <h1 className="text-5xl font-bold mb-4">
            Share Your Thoughts. Inspire the World.
         </h1>
         <p className="text-xl mb-6">
            A modern blogging platform to create, read, and share stories.
         </p>
         <div className="space-x-4">
            <Link
               href="/posts/create"
               className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition"
            >
               Create a Post
            </Link>
            <Link
               href="/posts"
               className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition"
            >
               See Posts
            </Link>
         </div>
      </section>
   );
};

export default HeroSection;
