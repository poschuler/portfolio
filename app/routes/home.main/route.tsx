import { Card, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Theme, useTheme } from "remix-themes";
import { Link, useLoaderData } from "@remix-run/react";

import tailwindLogoDarkLogo from "~/icons/tailwindcss-logotype-dark.svg";
import tailwindLogoWhiteLogo from "~/icons/tailwindcss-logotype-white.svg";
import nodeWhiteLogo from "~/icons/nodejs-light.svg";
import nodeDarkLogo from "~/icons/nodejs-dark.svg";
import remixDarkLogo from "~/icons/remix-dark.svg";
import remixWhiteLogo from "~/icons/remix-light.svg";
//import shadcnDarkLogo from "~/icons/shadcn-dark.svg";
//import shadcnWhiteLogo from "~/icons/shadcn-white.svg";
import reactLogo2 from "~/icons/reactjs-icon-2.svg";
import tsLogo2 from "~/icons/ts-logo-512.svg";

//import cSharpLogo from "~/icons/c-sharp.svg";
import mongoDbLogo from "~/icons/MongoDB_Fores-Green.svg";
import postgresqlLogo from "~/icons/PostgreSQL_logo.3colors.svg";
//import sqlServerLogo from "~/icons/microsoft-sql-server-logo.svg";
import nestjsLogo from "~/icons/nestjs-icon.svg";

import { BookmarkCheck } from "lucide-react";
import { FeedRowType, findAllFeeds } from "~/models/feeds.server";

type LoaderData = {
  feeds: Array<FeedRowType>;
};

export async function loader() {
  let feeds = await findAllFeeds();

  return { feeds };
}

export default function HomeMain() {
  let [theme] = useTheme();
  let { feeds } = useLoaderData() as LoaderData;

  return (
    <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.16))] flex-1 gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 font-mono">
      <section className="w-full">
        <div className="mx-auto relative flex size-36 overflow-hidden rounded-full">
          <img
            src={"https://avatars.githubusercontent.com/u/1238212?v=4"}
            alt={"github avatar"}
            className="aspect-auto h-full w-full"
          />
        </div>

        <div className="text-center">
          <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl mt-8">
            Paul Osorio Schuler
          </h1>
        </div>

        <div className="max-w-[450px] mx-auto">
          <blockquote className="text-center mt-2 italic text-muted-foreground text-lg">
            &quot;Software Engineer & MBA from Peru&quot; <br /> I work as
            software developer, tech leader and solutions architect.
          </blockquote>
        </div>
      </section>
      <Separator className="mx-auto w-28" />

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <Link
              to="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tsLogo2} alt="typescript" className="w-12" />
            </Link>
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 flex flex-row items-center justify-center">
            <Link
              to="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {theme === Theme.DARK && (
                <img src={nodeWhiteLogo} alt="node" className="w-32" />
              )}
              {theme === Theme.LIGHT && (
                <img src={nodeDarkLogo} alt="node" className="w-32" />
              )}
            </Link>
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <Link
              to="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={reactLogo2} alt="react" className="w-32" />
            </Link>
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <Link
              to="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {theme === Theme.DARK && (
                <img
                  src={tailwindLogoWhiteLogo}
                  alt="tailwind"
                  className="w-44"
                />
              )}
              {theme === Theme.LIGHT && (
                <img
                  src={tailwindLogoDarkLogo}
                  alt="tailwind"
                  className="w-44"
                />
              )}
            </Link>
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <Link
              to="https://remix.run/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {theme === Theme.DARK && (
                <img src={remixDarkLogo} alt="remix.run" className="w-40" />
              )}
              {theme === Theme.LIGHT && (
                <img src={remixWhiteLogo} alt="remix.run" className="w-40" />
              )}
            </Link>
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <Link
              to="https://nestjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={nestjsLogo} alt="remix.run" className="w-14" />
            </Link>
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <Link
              to="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={postgresqlLogo} alt="react" className="w-14" />
            </Link>
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <Link
              to="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mongoDbLogo} alt="react" className="w-36" />
            </Link>
          </CardHeader>
        </Card>
      </div>

      <section className="w-full">
        {feeds &&
          feeds.map((feed) => {
            return <Feed key={feed.idFeed} feed={feed} />;
          })}
        {/* <div className="p-4 border-l-2">
          <small className="text-base font-medium leading-none">
            Date
          </small>

          <div className="flex gap-2 mt-2">
            <BookmarkCheck className="h-6 w-6" />
            <p className="text-muted-foreground">
              Text
              <Link
                to=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-muted-foreground"
              >
                Text
              </Link>{" "}
              Text
            </p>
          </div>
        </div>*/}
      </section>
    </main>
  );
}

type FeedProps = {
  feed: FeedRowType;
};

function Feed({ feed }: FeedProps) {
  return (
    <div className="p-4 border-l-2">
      <small className="text-base font-medium leading-none">
        {feed.stringDate}
      </small>

      <div className="flex gap-2 mt-2">
        <BookmarkCheck className="h-6 w-6" />
        <p
          className="text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: feed.content }}
        ></p>
      </div>
    </div>
  );
}
