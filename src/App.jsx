import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layout/appLayout"
import HomePage from "./pages/HomePage"
import FilmsPage from "./pages/FilmsPage"


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Films" element={<FilmsPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
