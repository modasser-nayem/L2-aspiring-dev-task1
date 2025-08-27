import React from "react";

const Newsletter = () => {
   return (
      <section className="py-20 bg-gray-50 text-center">
         <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
         <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to get the latest posts directly in your
            inbox.
         </p>
         <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input
               type="email"
               placeholder="Enter your email"
               className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
               type="submit"
               className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg transition"
            >
               Subscribe
            </button>
         </form>
      </section>
   );
};

export default Newsletter;
