import { Card, CardHeader } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Separator } from "~/components/ui/separator";
import { Theme, useTheme } from "remix-themes";

import tailwindLogoDarkLogo from "~/icons/tailwindcss-logotype-dark.svg";
import tailwindLogoWhiteLogo from "~/icons/tailwindcss-logotype-white.svg";

import nodeWhiteLogo from "~/icons/nodejs-light.svg";
import nodeDarkLogo from "~/icons/nodejs-dark.svg";

import remixDarkLogo from "~/icons/remix-dark.svg";
import remixWhiteLogo from "~/icons/remix-light.svg";

import shadcnDarkLogo from "~/icons/shadcn-dark.svg";
import shadcnWhiteLogo from "~/icons/shadcn-white.svg";

import reactLogo2 from "~/icons/reactjs-icon-2.svg";

export default function HomeMain() {
  const [theme] = useTheme();

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
            &quot;Software Engineer & MBA from Peru, <br /> I&apos;m passionate
            about technology, love to code and build new things.&quot;
          </blockquote>
        </div>
      </section>
      <Separator className="mx-auto w-28" />

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            {theme === Theme.DARK && (
              <img
                src={tailwindLogoWhiteLogo}
                alt="tailwind"
                className="w-44"
              />
            )}
            {theme === Theme.LIGHT && (
              <img src={tailwindLogoDarkLogo} alt="tailwind" className="w-44" />
            )}
          </CardHeader>
        </Card>
        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            {theme === Theme.DARK && (
              <img src={remixDarkLogo} alt="remix" className="w-40" />
            )}
            {theme === Theme.LIGHT && (
              <img src={remixWhiteLogo} alt="remix" className="w-40" />
            )}
          </CardHeader>
        </Card>
        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 flex flex-row items-center justify-center">
            {theme === Theme.DARK && (
              <img src={nodeWhiteLogo} alt="node" className="w-32" />
            )}
            {theme === Theme.LIGHT && (
              <img src={nodeDarkLogo} alt="node" className="w-32" />
            )}
          </CardHeader>
        </Card>

        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <img src={reactLogo2} alt="react" className="w-32" />
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card className="flex h-20 justify-center items-center">
          <CardHeader className="p-0 space-y-0">
            <a
              className="mr-6 flex items-center space-x-2 font-sans"
              href="https://ui.shadcn.com/"
            >
              {theme === Theme.DARK && (
                <img src={shadcnWhiteLogo} alt="shadcn" className="w-10" />
              )}
              {theme === Theme.LIGHT && (
                <img src={shadcnDarkLogo} alt="node" className="w-10" />
              )}

              <span className="font-bold text-lg">
                shadcn/ui
              </span>
            </a>
          </CardHeader>
        </Card>
      </div>

      <section className="w-full">
        <div className="p-4 border-l-2">
          <small className="text-base font-medium leading-none">
            2024-04-23
          </small>

          <p className="text-muted-foreground text-lg">
            This site is under construction
          </p>
          <Progress value={10} aria-label="" className="mt-2 h-2" />
        </div>
      </section>
    </main>
  );
}
