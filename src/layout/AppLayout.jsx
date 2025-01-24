import { Outlet } from "react-router-dom"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

const AppLayout = () => {
    return(
        <>
        <AppHeader />
        <main className="container">
        <Outlet />
        </main>
        <AppFooter />
        </>
    )
}


export default AppLayout