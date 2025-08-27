import mongoose, { Schema, Document } from "mongoose";
import { IPost } from "../../interface/post";

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    name: {
      type: String,
      required: true,
    },
    picture: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model<IPost>("Post", PostSchema);
export default Post;
