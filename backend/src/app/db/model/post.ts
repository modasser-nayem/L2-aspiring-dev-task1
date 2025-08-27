import mongoose, { Schema, Document } from "mongoose";
import { IPost } from "../../interface/post";

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true },
);

const Post = mongoose.model<IPost>("Post", PostSchema);
export default Post;
