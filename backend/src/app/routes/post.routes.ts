import { Router } from "express";
import { postController } from "../controllers/post.controller";
import requestValidate from "../middlewares/requestValidation";
import { createPostValidation } from "../validation/post";

const router = Router();

// Create post
router.post(
  "/",
  requestValidate(createPostValidation),
  postController.createPost,
);

// get all post
router.get("/", postController.getAllPost);

// get single post
router.get("/:id", postController.getSinglePost);

export const postRoutes = router;
