import {
  data,
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetchers,
  useLoaderData,
  useLocation,
  useNavigation,
  type MetaFunction,
} from "react-router";

import {
  ThemeProvider,
  useTheme,
  PreventFlashOnWrongTheme,
} from "remix-themes";

import { themeSessionResolver } from "~/sessions/theme-session.server";

import { getToast } from "remix-toast";

import type { Route } from "./+types/root";

import "./app.css";
import clsx from "clsx";

import { Toaster } from "./components/ui/toaster";
import { useToast } from "./components/ui/use-toast";
import { useServerLayoutEffect } from "./utils/use-server-layout-effect";
import favicon16 from "~/favicon/favicon-16x16.png";
import favicon32 from "~/favicon/favicon-32x32.png";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader({ request }: Route.LoaderArgs) {
  const { getTheme } = await themeSessionResolver(request);
  const { toast, headers } = await getToast(request);

  return data(
    {
      theme: getTheme(),
      toast,
    },
    {
      headers: {
        "Set-Cookie": [headers.get("Set-Cookie")].filter(Boolean).join(","),
      },
    }
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "poschuler" },
    { name: "poschuler website", content: "poschuler website" },
  ];
};

export default function AppWithProviders({ loaderData }: Route.ComponentProps) {
  const { theme: loaderTheme } = loaderData;

  return (
    <ThemeProvider
      specifiedTheme={loaderTheme}
      themeAction="/action/set-theme"
      disableTransitionOnThemeChange={true}
    >
      <App />
    </ThemeProvider>
  );
}

function App() {
  const { theme: loaderTheme, toast: loaderToast } =
    useLoaderData<typeof loader>();

  const [theme] = useTheme();
  const { toast } = useToast();

  useServerLayoutEffect(() => {
    if (loaderToast) {
      let title = "";
      switch (loaderToast.type) {
        case "info":
          title = "Info.";
          break;
        case "success":
          title = "Mensaje";
          break;
        case "error":
          title = "Error";
          break;
        case "warning":
          title = "Alerta";
          break;
      }

      toast({
        variant: loaderToast.type === "error" ? "destructive" : "default",
        title: title,
        description: loaderToast.message,
      });
    }
  }, [loaderToast]);

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href={favicon16} sizes="32x32" />
        <link rel="icon" type="image/png" href={favicon32} sizes="16x16" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(loaderTheme)} />
        <Links />
      </head>
      <body>
        <Outlet />
        <Toaster />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
