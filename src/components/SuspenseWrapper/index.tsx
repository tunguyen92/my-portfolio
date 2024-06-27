import { Suspense, lazy } from "react";
import Loader from "@/components/loader";

interface SuspenseWrapperProps {
  path: string;
}

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
  const LazyComponent = lazy(
    () => import(/* @vite-ignore */ `../../${props.path}`)
  );

  return (
    <Suspense fallback={<Loader />}>
      <LazyComponent />
    </Suspense>
  );
};

export default SuspenseWrapper;
