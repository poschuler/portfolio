import { Container } from "./container";
import { Loader, useDelayedVisible } from "./Loader";

export const PageLoader = () => {
  const visible = useDelayedVisible(400);
  return (
    <Container
      className="text-low flex flex-col items-center gap-4 py-10"
      style={{
        visibility: visible ? "visible" : "hidden",
      }}
    >
      <Loader delay={0} />
      Loading, please be patient...
    </Container>
  );
};
