import { Moon, Sun, SunMoon } from "lucide-react";
import { Theme, useTheme } from "remix-themes";
import { ClientOnly } from "remix-utils/client-only";
import { Button } from "./ui/button";
import clsx from "clsx";

export function ModeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <ClientOnly fallback={<StaticModeToggle />}>
      {() => (
        <Button
          variant="link"
          size="icon"
          className={clsx(
            "flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground",
            className ? className : ""
          )}
          onClick={toggleTheme}
        >
          {theme === Theme.LIGHT && <Moon className="h-5 w-5" />}

          {theme === Theme.DARK && <Sun className="h-5 w-5" />}
        </Button>
      )}
    </ClientOnly>
  );
}

function StaticModeToggle() {
  return (
    <Button
      variant="link"
      size="icon"
      className={clsx(
        "flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      )}
    >
      <SunMoon className="h-5 w-5" />
    </Button>
  );
}
