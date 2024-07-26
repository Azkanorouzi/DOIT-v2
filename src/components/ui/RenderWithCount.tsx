import { ReactNode } from "react";

export const RenderWithCount = ({
  count,
  renderrer,
  max,
}: {
  count: number;
  renderrer: () => ReactNode;
  max: number;
}) => {
  return <>{Array.from({ length: count > max ? max : count }, renderrer)}</>;
};
