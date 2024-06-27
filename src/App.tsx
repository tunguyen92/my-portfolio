import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loader from "@/components/loader";
import PageNotFound from "@/pages/not-found";
import SuspenseWrapper from "./components/SuspenseWrapper";

const LayoutLazy = lazy(() => import("@/components/layouts"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutLazy />}>
            <Route index element={<SuspenseWrapper path="pages/home" />} />

            <Route
              path="about"
              element={<SuspenseWrapper path="pages/about" />}
            />
            <Route
              path="contact"
              element={<SuspenseWrapper path="pages/contact" />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
