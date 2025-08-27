import z from "zod";

export const createPostValidation = z.object({
  title: z
    .string({ required_error: "title is required" })
    .min(5, "title at leant 5 characters"),
  content: z
    .string({ required_error: "content is required" })
    .min(5, "content at leant 5 characters"),
  author: z
    .string({ required_error: "author is required" })
    .url({ message: "Invalid Url" }),
});
