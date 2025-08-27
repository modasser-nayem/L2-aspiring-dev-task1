import { Router } from "express";
import { postRoutes } from "./post.routes";

const routers = Router();
const moduleRoutes: { path: string; route: Router }[] = [
  {
    path: "/posts",
    route: postRoutes,
  },
];

moduleRoutes.forEach((route) => routers.use(route.path, route.route));

export default routers;
