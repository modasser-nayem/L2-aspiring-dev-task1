import React from "react";

const CategorySection = () => {
   return (
      <section className="py-20 max-w-7xl mx-auto px-6">
         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Categories
         </h2>
         <div className="flex flex-wrap justify-center gap-4">
            {["Technology", "Lifestyle", "Travel", "Food", "Education"].map(
               (cat) => (
                  <div
                     key={cat}
                     className="px-6 py-3 bg-purple-100 text-purple-800 font-semibold rounded-full hover:bg-purple-200 cursor-pointer transition"
                  >
                     {cat}
                  </div>
               )
            )}
         </div>
      </section>
   );
};

export default CategorySection;
