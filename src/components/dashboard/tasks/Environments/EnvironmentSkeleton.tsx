import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function EnvironmentSkeleton() {
  return (
    <div className="flex gap-4">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton
          containerClassName="inline"
          count={1}
          className="rounded-r-full h-10 w-48"
          style={{ borderRadius: "0px 50px 50px 0px" }}
        />
      </SkeletonTheme>

      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton
          count={1}
          className="rounded-r-full h-10 w-10"
          style={{ borderRadius: "0px 50px 50px 0px" }}
          circle={true}
        />
      </SkeletonTheme>
    </div>
  );
}
