import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BlendedCursor from "@/components/BlendedCursor";
import Loader from "@/components/Loader";
import ScrollTop from "@/components/ScrollTop";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import PageNotFound from "@/pages/not-found";

const LayoutLazy = lazy(() => import("@/components/layouts"));

function App() {
  return (
    <>
      <BlendedCursor />
      <ScrollTop />

      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutLazy />}>
              <Route index element={<Home />} />

              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
