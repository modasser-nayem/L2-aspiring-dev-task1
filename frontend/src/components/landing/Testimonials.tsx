import React from "react";

const Testimonials = () => {
   const testimonials = [
      {
         name: "Alice Johnson",
         content:
            "This blog platform is amazing! I can easily share my thoughts and get feedback.",
      },
      {
         name: "Mark Smith",
         content:
            "I love discovering new posts here. The interface is clean and user-friendly!",
      },
      {
         name: "Sophia Lee",
         content:
            "Creating posts has never been easier. Great experience for writers and readers alike.",
      },
   ];

   return (
      <section className="py-20 max-w-7xl mx-auto px-6 bg-white">
         <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            What Our Users Say
         </h2>
         <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
               <div
                  key={idx}
                  className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition"
               >
                  <p className="text-gray-700 mb-4">"{t.content}"</p>
                  <h4 className="text-gray-900 font-semibold">- {t.name}</h4>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Testimonials;
