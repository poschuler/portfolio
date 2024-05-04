import { useLoaderData } from "@remix-run/react";
import { Section } from "~/components/section";
import { loader } from "~/routes/home.cv/route";

export function Skills() {
  let { skills } = useLoaderData<typeof loader>();

  return (
    <Section title="Skills">
      <div className="flex flex-wrap gap-1">
        {skills.map((item) => (
          <div
            key={item.row}
            className="inline-flex items-center text-nowrap rounded-md border border-transparent bg-primary/80 px-2 py-0.5 font-mono text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            {item.name}
          </div>
        ))}
      </div>
    </Section>
  );
}
