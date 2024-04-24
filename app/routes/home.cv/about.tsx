import { useLoaderData } from "@remix-run/react";
import { Section } from "~/components/section";
import { loader } from "~/routes/home.cv/route";

export function About() {
  const {
    basics: { summary },
  } = useLoaderData<typeof loader>();

  return (
    <Section title="About">
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        {summary}
      </p>
    </Section>
  );
}
