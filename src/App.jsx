import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layout/appLayout"
import HomePage from "./pages/HomePage"
import FilmsPage from "./pages/FilmsPage"
import FilmPage from "./pages/FilmPage"


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/films">
        <Route path="" element={FilmsPage}/>
        <Route path="/slug" element={FilmPage}/>
          <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
