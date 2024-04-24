//import { Moon, Sun } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "remix-themes";
import { Button } from "./ui/button";
import { loader as rootLoader } from "~/root";
import { useRouteLoaderData } from "@remix-run/react";

export function ModeToggle() {
  const data = useRouteLoaderData<typeof rootLoader>("root");
  console.log(data.theme);
  const [, setTheme] = useTheme();

  return (
    <Button
      variant="link"
      size="icon"
      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      // onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
    >
      {data.theme === Theme.LIGHT && <Moon className="h-5 w-5" />}

      {data.theme === Theme.DARK && <Sun className="h-5 w-5" />}
    </Button>
  );
}
