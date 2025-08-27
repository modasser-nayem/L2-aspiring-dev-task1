import { api } from "@/lib/axios";
import { IPost, SuccessResponse } from "@/types";

type CreatePost = {
   title: string;
   content: string;
   author: {
      picture: string;
      name: string;
   };
};

export const postApi = {
   createPost: (data: CreatePost) =>
      api.post<SuccessResponse<IPost>, any>("/posts", data),

   getAllPost: () => api.get<SuccessResponse<IPost[]>, any>("/posts"),

   getSinglePost: (postId: string) =>
      api.get<SuccessResponse<IPost>, any>(`/posts/${postId}`),
};
