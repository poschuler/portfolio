import { useHydrated } from "remix-utils/use-hydrated";

export function ProgressiveClientOnly({
  children,
  className = "",
  defaultShow = false,
}: {
  children: React.ReactNode | (() => React.ReactNode);
  className?: string;
  defaultShow?: boolean;
}) {
  const isHydrated = useHydrated();
  return (
    <div
      className={
        isHydrated
          ? className
          : defaultShow
          ? // Create these animations in CSS or your tailwind config
            "[animation:disappear_1000ms]"
          : "[animation:appear_1000ms]"
      }
    >
      {typeof children === "function" ? children() : children}
    </div>
  );
}
