import { Router } from "express";
import { postController } from "../controllers/post.controller";

const router = Router();

// test route
router.get("/test", postController.testController);

export const postRoutes = router;
