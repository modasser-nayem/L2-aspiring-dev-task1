"use client";

import { useEffect, useState } from "react";
import PostCard from "@/components/post/PostCard";
import { postApi } from "@/services";
import { IPost } from "@/types";

export default function AllPosts() {
   const [posts, setPosts] = useState<IPost[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      postApi
         .getAllPost()
         .then((res) => {
            if (res?.data?.data) {
               setPosts(res.data.data);
            }
            setLoading(false);
         })
         .catch(() => setLoading(false));
   }, []);

   if (loading) return <p className="text-center py-20">Loading posts...</p>;

   return (
      <div className="min-h-screen py-16 px-4 bg-gray-50">
         <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
               All Posts
            </h1>
            {posts.length === 0 && (
               <p className="text-center text-gray-600">No posts available</p>
            )}

            <div className="grid md:grid-cols-3 gap-8">
               {posts.map((post) => (
                  <PostCard
                     key={post._id}
                     post={post}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
