import { BookmarkCheck, PenLine } from "lucide-react";
import { Link, useLoaderData, type MetaFunction } from "react-router";
import { Theme, useTheme } from "remix-themes";
import { Card, CardHeader } from "~/components/ui/card";

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

import dotNetLogo from "~/icons/dotnet-logo.svg";
import cSharpLogo from "~/icons/c-sharp.svg";
import msSQLServerLogo from "~/icons/microsoft-sql-server-logo.svg";
import msSQLServerLogoWhite from "~/icons/sql-server-logo-white.png";
import { ClientOnly } from "remix-utils/client-only";
import { findAll, type ContentRowType } from "~/models/content.server";
// import { Separator } from "~/components/chekalo/Separator";


export async function loader() {
  const contentItems = await findAll();

  return { contentItems };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Paul Osorio Schuler | Software Engineer (Node.js, Azure) & MBA" },
    { name: "description", content: "Software Engineer specializing in highly-scalable backend systems. Expertise in Node.js, TypeScript, Azure, and Domain-Driven Design (DDD). View my full CV, blog and bookmarks." },
    { tagName: "link", rel: "canonical", href: "https://poschuler.com" },
    { name: "og:title", content: "Paul Osorio Schuler | Software Engineer (Node.js, Azure) & MBA" },
    { name: "og:description", content: "Software Engineer specializing in highly-scalable backend systems. Expertise in Node.js, TypeScript, Azure, and Domain-Driven Design (DDD)." },
    { name: "og:image", content: "https://avatars.githubusercontent.com/u/1238212?v=4" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://poschuler.com" },
  ];
};

export default function Home() {
  const [theme] = useTheme();
  const { contentItems } = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.16))] flex-1 gap-4 p-4 md:gap-8 md:p-10 font-mono bg-ui">
      <section className="w-full">
        <div className="mx-auto relative flex size-28 overflow-hidden rounded-full">
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

        <div className="max-w-[650px] mx-auto">
          <blockquote className="text-center mt-2 italic text-muted-foreground text-lg">
            &lt;&lt; Software Engineer & MBA from Peru | 12+ Years Experience &gt;&gt;
          </blockquote>
          <blockquote className="pt-1 text-center mt-2 italic text-muted-foreground text-lg">
            Currently working as Software Architect, focusing on building client-centric solutions that drive measurable business value.
          </blockquote>
        </div>
      </section>
      {/* <Separator className="mx-auto w-28" /> */}

      {/* <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
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
              <ClientOnly
                fallback={
                  <img src={nodeWhiteLogo} alt="node" className="w-32" />
                }
              >
                {() => (
                  <>
                    {theme === Theme.DARK && (
                      <img src={nodeWhiteLogo} alt="node" className="w-32" />
                    )}
                    {theme === Theme.LIGHT && (
                      <img src={nodeDarkLogo} alt="node" className="w-32" />
                    )}
                  </>
                )}
              </ClientOnly>
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
              <ClientOnly
                fallback={
                  <img
                    src={tailwindLogoWhiteLogo}
                    alt="tailwind"
                    className="w-44"
                  />
                }
              >
                {() => (
                  <>
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
                  </>
                )}
              </ClientOnly>
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
              <ClientOnly
                fallback={
                  <img src={remixDarkLogo} alt="remix.run" className="w-40" />
                }
              >
                {() => (
                  <>
                    {theme === Theme.DARK && (
                      <img
                        src={remixDarkLogo}
                        alt="remix.run"
                        className="w-40"
                      />
                    )}
                    {theme === Theme.LIGHT && (
                      <img
                        src={remixWhiteLogo}
                        alt="remix.run"
                        className="w-40"
                      />
                    )}
                  </>
                )}
              </ClientOnly>
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
              <img src={nestjsLogo} alt="nestJS" className="w-14" />
            </Link>
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <Link
              to="https://dotnet.microsoft.com/en-us/languages/csharp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cSharpLogo} alt="c#" className="w-12" />
            </Link>
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <Link
              to="https://dotnet.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dotNetLogo} alt="dotnet" className="w-12" />
            </Link>
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <Link
              to="https://www.microsoft.com/es-es/sql-server/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ClientOnly
                fallback={
                  <img
                    src={msSQLServerLogoWhite}
                    alt="mssqlserver"
                    className="w-[70px]"
                  />
                }
              >
                {() => (
                  <>
                    {theme === Theme.DARK && (
                      <img
                        src={msSQLServerLogoWhite}
                        alt="mssqlserver"
                        className="w-[70px]"
                      />
                    )}
                    {theme === Theme.LIGHT && (
                      <img
                        src={msSQLServerLogo}
                        alt="mssqlserver"
                        className="w-[70px]"
                      />
                    )}
                  </>
                )}
              </ClientOnly>
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
              <img src={postgresqlLogo} alt="postgreSQL" className="w-14" />
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
              <img src={mongoDbLogo} alt="mongodb" className="w-36" />
            </Link>
          </CardHeader>
        </Card>
      </div> */}
      <section className="pt-4 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto">
        {contentItems &&
          contentItems.map((item) => {
            return <ContentItem key={item.idContent} item={item} />;
          })}
      </section>
    </main>
  );
}

type ContentItemProps = {
  item: ContentRowType;
};

function ContentItem({ item }: ContentItemProps) {
  return (
    <div className="my-4 p-4 border-default border-l-2">
      <small className="text-base font-medium leading-none">
        {item.publishedStringDate}
      </small>

      <div className="flex gap-2 mt-2 text-low">
        {item.type === "link" &&
          <>
            <BookmarkCheck className="h-6 w-6" />
            <a className="text-low" href={item.externalUrl} target="_blank" rel="noreferrer">
              I read, "{item.title}" by {item.source}
            </a>
          </>
        }

        {item.type === "post" &&
          <>
            <PenLine className="h-6 w-6" />
            <a className="text-low" href={`/blog/${item.slug}`}>
              I wrote, {item.title}
            </a>
          </>
        }
      </div>
    </div>
  );
}
