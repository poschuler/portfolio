import { Link, useLoaderData } from "@remix-run/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "~/components/ui/card";
import { ProjectRowType, findAllProjects } from "~/models/projects.server";

type LoaderData = {
  projects: ProjectRowType[];
};

export async function loader() {
  let projects = await findAllProjects();
  return { projects };
}

export default function HomeProjects() {
  let { projects } = useLoaderData() as LoaderData;

  return (
    <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.16))] flex-1 gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 font-mono">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {projects &&
          projects.length > 0 &&
          projects.map((project) => {
            return <Project key={project.idProject} project={project} />;
          })}
      </div>
    </main>
  );
}

type ProjectProps = {
  project: ProjectRowType;
};

function Project({ project }: ProjectProps) {
  return (
    <Card>
      <CardContent className="p-0 rounded-lg h-72 md:h-48 lg:48 xl:h-56">
        <Link to={project.projectUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={project.imgUrl}
            alt="github repo"
            className="rounded-t-md object-cover h-full w-full"
          />
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 py-6">
        <CardTitle>
          <Link
            to={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-muted-foreground"
          >
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription
          className="text-sm xl:text-base"
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></CardDescription>
      </CardFooter>
    </Card>
  );
}
