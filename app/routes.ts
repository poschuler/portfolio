import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  route("/action/set-theme", "routes/action.set-theme.ts"),
  route("/cv.pdf", "routes/cv-pdf/_cv-pdf.tsx"),

  layout("routes/layouts/_layout.tsx", [
    route("/", "routes/home/_home.tsx"),
    route("/cv", "routes/cv/_cv.tsx"),
  ]),

  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
