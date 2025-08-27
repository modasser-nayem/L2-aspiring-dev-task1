"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const router = (0, express_1.Router)();
// test route
router.get("/test", post_controller_1.postController.testController);
exports.postRoutes = router;
