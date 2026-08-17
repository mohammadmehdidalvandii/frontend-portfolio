import { QueryProvider } from "./providers/QueryProvider";
import { ToasterProvider } from "./providers/ToasterProvider";
import { HelmetProvider } from "react-helmet-async";
import { MainLayout } from "@layouts/MainLayout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "@layouts/AdminLayout";
import Loading from "@components/modules/Loading/Loading";

const lazyPages = {
   Index : lazy(()=>import('@pages/Index/Index')),
   Projects : lazy(()=>import('@pages/Projects/Projects')),
   ProjectSingle : lazy(()=>import('@pages/Projects/ProjectSingle')),
   Certificates : lazy(()=>import('@pages/Certificates/Certificates')),
   About  : lazy(()=>import('@pages/About/About')),
   Contact : lazy(()=>import('@pages/Contact/Contact')),
   Admin : lazy(()=>import('@pages/Admin/Admin')),
   Login : lazy(()=>import('@pages/Login/Login')),
   NotFound : lazy(()=>import('@pages/NotFound/NotFound')),
}


function App() {
  return (
    <HelmetProvider>
      <QueryProvider>
        <BrowserRouter>
          <ToasterProvider />
          <Suspense fallback={<Loading/>}>
            <Routes>
              {/* All route */}
              <Route path="*" element={<lazyPages.NotFound/>} />
              <Route path="/Login" element={<lazyPages.Login/>}/>
              {/* Main page */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<lazyPages.Index/>}/>
                <Route path="projects" element={<lazyPages.Projects/>}/>
                <Route path="projects/:id" element={<lazyPages.ProjectSingle/>}/>
                <Route path="certificates" element={<lazyPages.Certificates/>}/>
                <Route path="about" element={<lazyPages.About/>}/>
                <Route path="contact" element={<lazyPages.Contact/>}/>
              </Route>
              {/* Admin Layout */}
              <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<lazyPages.Admin/>}/>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryProvider>
    </HelmetProvider>
  );
}

export default App;
