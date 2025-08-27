"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IPost } from "@/types";
import { postApi } from "@/services";
import Loading from "@/components/ui/loading";

export default function PostDetails() {
   const router = useRouter();
   const { id } = useParams();
   const [post, setPost] = useState<IPost | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (!id) return;
      postApi
         .getSinglePost(id as string)
         .then((res) => {
            console.log(res.data.data);
            if (res?.data?.data) {
               setPost(res.data.data);
            }
            setLoading(false);
         })
         .catch(() => setLoading(false));
   }, [id]);

   if (loading)
      return (
         <Loading
            fullScreen
            title="Loading"
         />
      );
   if (!post)
      return (
         <p className="text-center text-xl font-semibold py-20">
            Post not found
         </p>
      );

   return (
      <div className="min-h-screen py-16 px-4 bg-gray-50">
         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
               {post.title}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
               <img
                  src={post.author.picture}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
               />
               <div>
                  <p className="text-gray-700 font-semibold">
                     {post.author.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                     {new Date(post.createdAt).toLocaleDateString()}
                  </p>
               </div>
            </div>

            <p className="text-gray-700 text-lg whitespace-pre-line">
               {post.content}
            </p>

            <button
               onClick={() => router.back()}
               className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
               Go Back
            </button>
         </div>
      </div>
   );
}
