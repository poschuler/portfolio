import { clsx } from "clsx";
import { type SeparatorProps, useSeparator } from "react-aria";

export function Separator(
  props: SeparatorProps & {
    className?: string;
  },
) {
  const { separatorProps } = useSeparator(props);
  return (
    <div
      {...separatorProps}
      className={clsx(
        "bg-red-500 shrink-0",
        "aria-[orientation=vertical]:h-full aria-[orientation=vertical]:w-px",
        "aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full",
        props.className,
      )}
    />
  );
}
