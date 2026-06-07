import { QueryProvider } from "./providers/QueryProvider";
import { ToasterProvider } from "./providers/ToasterProvider";
import { HelmetProvider } from "react-helmet-async";
import { MainLayout } from "@layouts/MainLayout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(()=>import('@pages/Index/Index'));
const Projects = lazy(()=>import('@pages/Projects/Projects'))
const ProjectSingle = lazy(()=>import('@pages/Projects/ProjectSingle'));
const Certificates = lazy(()=>import('@pages/Certificates/Certificates'));
const About  = lazy(()=>import('@pages/About/About'));

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
                <Route path="Projects" element={<Projects/>}/>
                <Route path="Projects/:id" element={<ProjectSingle/>}/>
                <Route path="Certificates" element={<Certificates/>}/>
                <Route path="About" element={<About/>}/>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryProvider>
    </HelmetProvider>
  );
}

export default App;
