import { cn } from "~/lib/utils";

type TypographyType = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyH1({ children, className = "" }: TypographyType) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        ...className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className = "" }: TypographyType) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        ...className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className = "" }: TypographyType) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        ...className,
      )}
    >
      {children}{" "}
    </h3>
  );
}

export function TypographyH4({ children, className = "" }: TypographyType) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        ...className,
      )}
    >
      {children}{" "}
    </h4>
  );
}

export function TypographyP({ children, className = "" }: TypographyType) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", ...className)}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({
  children,
  className = "",
}: TypographyType) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", ...className)}>
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode({
  children,
  className = "",
}: TypographyType) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        ...className,
      )}
    >
      {children}
    </code>
  );
}

export function TypographyLead({ children, className = "" }: TypographyType) {
  return (
    <p className={cn("text-xl text-muted-foreground", ...className)}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className = "" }: TypographyType) {
  return (
    <div className={cn("text-lg font-semibold", ...className)}>{children}</div>
  );
}

export function TypographySmall({ children, className = "" }: TypographyType) {
  return (
    <small className={cn("text-sm font-medium leading-none", ...className)}>
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className = "" }: TypographyType) {
  return (
    <p className={cn("text-sm text-muted-foreground", ...className)}>
      {children}
    </p>
  );
}

export function TypographyList() {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  );
}

export function TypographyTable() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King's Treasury
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People's happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
