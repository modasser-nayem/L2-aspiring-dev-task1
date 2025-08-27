import { IPost } from "@/types";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }: { post: IPost }) => {
   return (
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
         <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
         <p className="text-gray-600 mb-4">{post.content.slice(0, 100)}...</p>
         <div className="flex items-center space-x-2 mb-4">
            <img
               src={post.author.picture}
               alt={post.author.name}
               className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-500">{post.author.name}</span>
         </div>
         <Link
            href={`/posts/${post._id}`}
            className="text-purple-600 hover:underline"
         >
            Read More
         </Link>
      </div>
   );
};

export default PostCard;
