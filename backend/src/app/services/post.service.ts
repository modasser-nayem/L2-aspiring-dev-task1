import Post from "../db/model/post";
import AppError from "../errors/AppError";
import { ICreatePost } from "../interface/post";

const createPost = async (data: ICreatePost) => {
  const post = new Post(data);
  await post.save();

  return post;
};

const getAllPost = async () => {
  const posts = await Post.find().sort({ createdAt: "desc" });

  return posts;
};

const getSinglePost = async (postId: string) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new AppError(404, "Post not found!");
  }

  return post;
};

export const postService = {
  createPost,
  getAllPost,
  getSinglePost,
};
