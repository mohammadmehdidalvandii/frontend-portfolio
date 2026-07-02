import Footer from "@components/modules/Footer/Footer"
import Navigation from "@components/modules/Navigation/Navigation"
import { Outlet } from "react-router-dom"

export const MainLayout:React.FC  = ()=>{
    return(
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
    )
}