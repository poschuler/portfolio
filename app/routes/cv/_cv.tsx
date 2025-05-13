import { About } from "~/routes/cv/about";
import { Certificates } from "~/routes/cv/certificates";
import { Education } from "~/routes/cv/education";
import { Experience } from "~/routes/cv/experience";
import { Hero } from "~/routes/cv/hero";
import { Skills } from "~/routes/cv/skills";
import {
  basics,
  work,
  education,
  languages,
  skills,
  certificates,
} from "~/routes/cv/resume.json";
import { KeyboardManager } from "~/routes/cv/keyboard-manager";
import type { Route } from "./+types/_cv";

export async function loader() {
  return { basics, work, education, languages, skills, certificates };
}

export default function CV({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-ui p-4 md:gap-8 md:p-10">
      <section className="mx-auto w-full max-w-2xl space-y-8">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certificates />
      </section>
      <KeyboardManager />
    </main>
  );
}
