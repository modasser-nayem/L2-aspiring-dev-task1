"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const requestValidation_1 = __importDefault(require("../middlewares/requestValidation"));
const post_1 = require("../validation/post");
const router = (0, express_1.Router)();
// Create post
router.post("/", (0, requestValidation_1.default)(post_1.createPostValidation), post_controller_1.postController.createPost);
// get all post
router.get("/", post_controller_1.postController.getAllPost);
// get single post
router.get("/:id", post_controller_1.postController.getSinglePost);
exports.postRoutes = router;
