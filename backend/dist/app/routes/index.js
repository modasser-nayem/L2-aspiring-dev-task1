"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_routes_1 = require("./post.routes");
const routers = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/posts",
        route: post_routes_1.postRoutes,
    },
];
moduleRoutes.forEach((route) => routers.use(route.path, route.route));
exports.default = routers;
