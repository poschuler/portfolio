import { createThemeSessionResolver } from "remix-themes";
import { createCookieSessionStorage } from "react-router";

const isProduction = process.env.DEPLOYMENT_ENV === "production";

if (typeof process.env.SESSION_THEME_SECRET !== "string") {
  throw new Error("Missing env: SESSION_THEME_SECRET");
}

const themeSessionStorage = createCookieSessionStorage({
  cookie: {
    name: "chekalo__theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    secrets: [process.env.SESSION_THEME_SECRET],
    ...(isProduction ? { domain: "chekalo.pe", secure: true } : {}),
  },
});

export const themeSessionResolver =
  createThemeSessionResolver(themeSessionStorage);
