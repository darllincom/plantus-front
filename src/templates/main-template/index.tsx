import Sidebar from "../../components/sidebar"
import Footer from "../../components/footer"
import Welcome from "../../layout/welcome"
import ContentBar from "../../components/content-bar"
import Perfil from "../../layout/perfil"
import { Route, Routes } from "react-router-dom"

export default function MainTemplate() {
  return (
    <div 
      className="
        container relative
        flex items-start justify-start flex-row
        bg-dark-white 
        max-w-none mx-auto min-h-screen
      ">
      <Sidebar />
      <main className="container fixed right-0 h-screen flex flex-row justify-between w-5/6 max-w-none xl:w-10/12">
        <section className="w-9/12 px-6">
          <Routes>
            <Route path="" element={<Welcome />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </section>
        <ContentBar />
      </main>
      <Footer />
    </div>
  )
}