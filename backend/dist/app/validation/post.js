"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostValidation = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createPostValidation = zod_1.default.object({
    title: zod_1.default
        .string({ required_error: "title is required" })
        .min(5, "title at leant 5 characters"),
    content: zod_1.default
        .string({ required_error: "content is required" })
        .min(5, "content at leant 5 characters"),
    author: zod_1.default
        .string({ required_error: "author is required" })
        .url({ message: "Invalid Url" }),
});
