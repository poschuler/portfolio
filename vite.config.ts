import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vercelPreset } from "@vercel/remix/vite";
import { remixDevTools } from "remix-development-tools";

installGlobals();

export default defineConfig({
  plugins: [remixDevTools(),
    remix({
      presets: [vercelPreset()],
    }),
    tsconfigPaths(),
  ],
  server: {
    open: true,
  },
});
