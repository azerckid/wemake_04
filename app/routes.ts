import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("common/pages/home-page.tsx"),
    route("/profile", "features/users/pages/profile-page.tsx"),
] satisfies RouteConfig;
