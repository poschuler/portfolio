import { useLoaderData } from "@remix-run/react";
import { Section } from "~/components/section";
import { loader } from "~/routes/home.cv/route";

export function Experience() {
  let { work } = useLoaderData<typeof loader>();

  return (
    <Section title="Work Experience">
      {work.map((item) => (
        <div key={item.row} className="rounded-lg bg-card text-card-foreground">
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                {item.name}
                <span className="inline-flex gap-x-1">
                  <div className="inline-flex items-center text-nowrap rounded-md border border-transparent bg-secondary px-2 py-0.5 align-middle font-mono text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    {item.location}
                  </div>
                </span>
              </h3>
              <div className="text-sm tabular-nums text-muted-foreground">
                {`${item.startDate} - ${item.endDate}`}
              </div>
            </div>
            <h4 className="font-mono text-sm leading-none">{item.position}</h4>
          </div>
          <div className="mt-2 text-pretty font-mono text-xs leading-5 text-muted-foreground">
            {item.summary}
          </div>
        </div>
      ))}
    </Section>
  );
}
