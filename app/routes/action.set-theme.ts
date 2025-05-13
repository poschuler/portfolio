import { createThemeAction } from "remix-themes";

import { themeSessionResolver } from "~/sessions/theme-session.server";

export const action = createThemeAction(themeSessionResolver);
