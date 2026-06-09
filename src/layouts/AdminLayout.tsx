import Footer from "@components/modules/Footer/Footer"
import Navigation from "@components/modules/Navigation/Navigation"
import { Outlet } from "react-router-dom"

export default function AdminLayout() {
  return (
    <div className="min-h-screen">
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
