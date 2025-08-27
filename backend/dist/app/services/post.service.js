"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postService = void 0;
const post_1 = __importDefault(require("../db/model/post"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const createPost = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const post = new post_1.default(data);
    yield post.save();
    return post;
});
const getAllPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_1.default.find().sort({ createdAt: "desc" });
    return posts;
});
const getSinglePost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_1.default.findById(postId);
    if (!post) {
        throw new AppError_1.default(404, "Post not found!");
    }
    return post;
});
exports.postService = {
    createPost,
    getAllPost,
    getSinglePost,
};
