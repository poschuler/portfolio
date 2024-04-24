// import { Link, Outlet } from "@remix-run/react";
import { Link } from "@remix-run/react";
//import { FileCode2, HomeIcon, Menu, Terminal } from "lucide-react";
import { FileCode2, HomeIcon, Terminal } from "lucide-react";
// import { Theme, useTheme } from "remix-themes";
import { Button } from "~/components/ui/button";
// import { ModeToggle } from "~/components/mode.toggle";
// import { Button } from "~/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

export async function loader() {
  return null;
}

export default function Home() {
  // const [theme, setTheme] = useTheme();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-end md:justify-normal">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 flex-grow">
          <Link
            to="/home"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            reloadDocument={true}
          >
            <Terminal className="h-6 w-6" />
            <span>poschuler</span>
          </Link>
          <div className="flex flex-grow justify-end items-center gap-6 text-lg font-semibold md:text-base">
            <Link
              to="/home"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <HomeIcon className="h-4 w-4" />
              <span>home</span>
            </Link>
            <Link
              to="/home/cv"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <FileCode2 className="h-4 w-4" />
              cv
            </Link>

            <Button
              variant="link"
              size="icon"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              // onClick={() =>
              //   setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
              // }
            >
              {/* {theme === Theme.LIGHT && <Moon className="h-5 w-5" />}

              {theme === Theme.DARK && <Sun className="h-5 w-5" />} */}
              test
            </Button>

            {/* <Button>Test</Button> */}
            {/* <ModeToggle /> */}
          </div>
        </nav>

        {/* <nav className="flex md:hidden gap-6 text-lg font-medium flex-grow">
          <Link
            to="/home"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            reloadDocument={true}
          >
            <Terminal className="h-6 w-6" />
            <span>poschuler</span>
          </Link>
          <div className="flex flex-grow justify-end items-center gap-6 text-lg font-semibold md:text-base">
            <ModeToggle className="flex md:hidden" />
          </div>
        </nav> */}

        {/* <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/home"
                className="flex items-center gap-2 text-lg font-semibold"
                reloadDocument={true}
              >
                <Terminal className="h-6 w-6" />
                <span>poschuler</span>
              </Link>
              <Link
                to="/home"
                className="flex items-center gap-2  text-muted-foreground hover:text-foreground"
                reloadDocument={true}
              >
                <HomeIcon className="h-4 w-4" />
                home
              </Link>
              <Link
                to="/home/cv"
                className="flex items-center gap-2  text-muted-foreground hover:text-foreground"
                reloadDocument={true}
              >
                <FileCode2 className="h-4 w-4" />
                cv
              </Link>
            </nav>
          </SheetContent>
        </Sheet> */}
      </header>
      {/* <Outlet /> */}
    </div>
  );
}
