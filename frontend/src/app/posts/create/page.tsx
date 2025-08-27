"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { postApi } from "@/services";

const postSchema = z.object({
   title: z.string().min(3, "Title must be at least 3 characters"),
   content: z.string().min(10, "Content must be at least 10 characters"),
   author: z.object({
      name: z.string().min(2, "Author name must be at least 2 characters"),
      picture: z.string().url("Picture must be a valid URL"),
   }),
});

type PostFormData = z.infer<typeof postSchema>;

export default function CreatePost() {
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const [errorMsg, setErrorMsg] = useState("");

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<PostFormData>({
      resolver: zodResolver(postSchema),
   });

   const onSubmit = async (data: PostFormData) => {
      setLoading(true);
      setErrorMsg("");
      try {
         await postApi.createPost(data);
         setLoading(false);
         router.push("/posts"); // redirect to posts page
      } catch (err: any) {
         setLoading(false);
         setErrorMsg(err.response?.data?.message || "Something went wrong");
      }
   };

   return (
      <div className="min-h-screen bg-gray-50 py-16 px-4">
         <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
               Create a New Post
            </h1>

            {errorMsg && (
               <p className="text-red-500 mb-4 text-center font-medium">
                  {errorMsg}
               </p>
            )}

            <form
               onSubmit={handleSubmit(onSubmit)}
               className="space-y-6"
            >
               {/* Title */}
               <div>
                  <label className="block text-gray-700 font-medium mb-2">
                     Title
                  </label>
                  <input
                     type="text"
                     {...register("title")}
                     className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.title ? "border-red-500" : "border-gray-300"
                     }`}
                  />
                  {errors.title && (
                     <p className="text-red-500 mt-1">{errors.title.message}</p>
                  )}
               </div>

               {/* Content */}
               <div>
                  <label className="block text-gray-700 font-medium mb-2">
                     Content
                  </label>
                  <textarea
                     {...register("content")}
                     rows={6}
                     className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.content ? "border-red-500" : "border-gray-300"
                     }`}
                  />
                  {errors.content && (
                     <p className="text-red-500 mt-1">
                        {errors.content.message}
                     </p>
                  )}
               </div>

               {/* Author Name */}
               <div>
                  <label className="block text-gray-700 font-medium mb-2">
                     Author Name
                  </label>
                  <input
                     type="text"
                     {...register("author.name")}
                     className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.author?.name
                           ? "border-red-500"
                           : "border-gray-300"
                     }`}
                  />
                  {errors.author?.name && (
                     <p className="text-red-500 mt-1">
                        {errors.author.name.message}
                     </p>
                  )}
               </div>

               {/* Author Picture */}
               <div>
                  <label className="block text-gray-700 font-medium mb-2">
                     Author Picture URL
                  </label>
                  <input
                     type="text"
                     {...register("author.picture")}
                     className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.author?.picture
                           ? "border-red-500"
                           : "border-gray-300"
                     }`}
                  />
                  {errors.author?.picture && (
                     <p className="text-red-500 mt-1">
                        {errors.author.picture.message}
                     </p>
                  )}
               </div>

               {/* Submit */}
               <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
               >
                  {loading ? "Creating..." : "Create Post"}
               </button>
            </form>
         </div>
      </div>
   );
}
