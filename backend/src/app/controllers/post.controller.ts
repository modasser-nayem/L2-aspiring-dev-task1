import { postService } from "../services/post.service";
import { asyncHandler } from "../utils/asyncHandler";
import sendResponse from "../utils/sendResponse";

const createPost = asyncHandler(async (req, res) => {
  const result = await postService.createPost(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Post Successfully Created",
    data: result,
  });
});

const getAllPost = asyncHandler(async (req, res) => {
  const result = await postService.getAllPost();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Successfully Retrieved all post",
    data: result,
  });
});

const getSinglePost = asyncHandler(async (req, res) => {
  const result = await postService.getSinglePost(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Post successfully Retrieved",
    data: result,
  });
});

export const postController = { createPost, getAllPost, getSinglePost };
