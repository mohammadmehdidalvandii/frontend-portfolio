import { QueryProvider } from "./providers/QueryProvider";
import { ToasterProvider } from "./providers/ToasterProvider";
import { HelmetProvider } from "react-helmet-async";
import { MainLayout } from "@layouts/MainLayout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(()=>import('@pages/index'));

function App() {
  return (
    <HelmetProvider>
      <QueryProvider>
        <BrowserRouter>
          <ToasterProvider />
          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              {/* Main page */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Index/>}/>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryProvider>
    </HelmetProvider>
  );
}

export default App;
