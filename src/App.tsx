import { QueryProvider } from "./providers/QueryProvider";
import { ToasterProvider } from "./providers/ToasterProvider";
import { HelmetProvider } from "react-helmet-async";
import { MainLayout } from "@layouts/MainLayout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "@layouts/AdminLayout";
import Loading from "@components/modules/Loading/Loading";


const Index = lazy(()=>import('@pages/Index/Index'));
const Projects = lazy(()=>import('@pages/Projects/Projects'))
const ProjectSingle = lazy(()=>import('@pages/Projects/ProjectSingle'));
const Certificates = lazy(()=>import('@pages/Certificates/Certificates'));
const About  = lazy(()=>import('@pages/About/About'));
const Contact = lazy(()=>import('@pages/Contact/Contact'));
const Admin = lazy(()=>import('@pages/Admin/Admin'));
const Login = lazy(()=>import('@pages/Login/Login'));
const NotFound = lazy(()=>import('@pages/NotFound/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <QueryProvider>
        <BrowserRouter>
          <ToasterProvider />
          <Suspense fallback={<Loading/>}>
            <Routes>
              {/* All route */}
              <Route path="*" element={<NotFound/>} />
              <Route path="/Login" element={<Login/>}/>
              {/* Main page */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Index/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path="projects/:id" element={<ProjectSingle/>}/>
                <Route path="certificates" element={<Certificates/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
              </Route>
              {/* Admin Layout */}
              <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<Admin/>}/>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryProvider>
    </HelmetProvider>
  );
}

export default App;
