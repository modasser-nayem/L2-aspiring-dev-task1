import { Document } from "mongoose";
import z from "zod";
import { createPostValidation } from "../validation/post";

export interface IPost extends Document {
  title: string;
  content: string;
  author: { name: string; picture: string };
  createdAt: Date;
}

export type ICreatePost = z.infer<typeof createPostValidation>;
