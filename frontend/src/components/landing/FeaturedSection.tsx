"use client";

import { IPost } from "@/types";
import React, { useEffect, useState } from "react";
import PostCard from "../post/PostCard";
import { postApi } from "@/services";

const FeaturedSection = () => {
   const [posts, setPosts] = useState<IPost[]>([]);

   useEffect(() => {
      postApi.getAllPost().then((res) => {
         if (res?.data?.data) {
            setPosts(res.data.data.slice(0, 3));
         }
      });
   }, []);

   return (
      <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
               Latest Posts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
               {posts &&
                  posts.map((post) => (
                     <PostCard
                        key={post._id}
                        post={post}
                     />
                  ))}
            </div>
         </div>
      </section>
   );
};

export default FeaturedSection;
