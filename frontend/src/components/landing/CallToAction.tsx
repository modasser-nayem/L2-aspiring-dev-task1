import Link from "next/link";
import React from "react";

const CallToAction = () => {
   return (
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-700 text-white text-center">
         <h2 className="text-3xl font-bold mb-4">Ready to Share Your Story?</h2>
         <p className="mb-6 text-lg">
            Create your first post today and inspire others.
         </p>
         <Link
            href="/posts/create"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition"
         >
            Create a Post
         </Link>
      </section>
   );
};

export default CallToAction;
