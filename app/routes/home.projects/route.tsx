import { Link } from "@remix-run/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "~/components/ui/card";
import githubRepo from "~/images/github-repo.png";

export default function HomeProjects() {
  return (
    <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.16))] flex-1 gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 font-mono">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
        <Card>
          <CardContent className="p-0 rounded-lg">
            <Link
              to="https://github.com/poschuler/skill-test-shawandpartners"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubRepo}
                alt="github repo"
                className="rounded-t-md"
              />
            </Link>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2 py-6">
            <CardTitle>
              <Link
                to="https://github.com/poschuler/skill-test-shawandpartners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-muted-foreground"
              >
                Skill test solution
              </Link>
            </CardTitle>
            <CardDescription className="text-base">
              Full Stack skill test found on the internet, I made a solution
              with{" "}
              <Link
                to="https://remix.run/docs/en/main/guides/spa-mode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-muted-foreground"
              >
                Remix SPA
              </Link>{" "}
              and{" "}
              <Link
                to="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-muted-foreground"
              >
                Node.js
              </Link>
              , check the repo{" "}
              <Link
                to="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-muted-foreground"
              >
                here
              </Link>
            </CardDescription>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
