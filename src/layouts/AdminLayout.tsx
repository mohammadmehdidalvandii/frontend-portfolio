import Footer from "@components/modules/Footer/Footer"
import Navigation from "@components/modules/Navigation/Navigation"
import { getToken } from "@utils/auth";
import { showError } from "@utils/Toasts";
import { Outlet , Navigate} from "react-router-dom"

export default function AdminLayout() {
  const token = getToken();
    if(!token) {
      showError('Access denied. Please login first')
          return <Navigate to='/' replace/>
    }

  return (
    <div className="min-h-screen">
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
