import { json } from "@remix-run/node";
import { About } from "~/routes/home.cv/about";
import { Certificates } from "~/routes/home.cv/certificates";
import { Education } from "~/routes/home.cv/education";
import { Experience } from "~/routes/home.cv/experience";
import { Hero } from "~/routes/home.cv/hero";
import { Skills } from "~/routes/home.cv/skills";
import {
  basics,
  work,
  education,
  languages,
  skills,
  certificates,
} from "~/routes/home.cv/resume.json";
import { KeyboardManager } from "~/routes/home.cv/keyboard-manager";

export async function loader() {
  return json({ basics, work, education, languages, skills, certificates });
}

export default function App() {
  return (
    <main className="flex h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <section className="mx-auto w-full max-w-2xl space-y-8">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certificates />
        {/*<Projects />*/}
      </section>
      <KeyboardManager />
    </main>
  );
}
