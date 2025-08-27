import { postService } from "../services/post.service";
import { asyncHandler } from "../utils/asyncHandler";
import sendResponse from "../utils/sendResponse";

const testController = asyncHandler(async (req, res) => {
  const result = await postService.testService();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Successfully Working",
    data: result,
  });
});

export const postController = { testController };
