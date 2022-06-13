import Sidebar from "../../components/sidebar"

export default function Welcome() {
  document.title = 'Plantus | Bem vindo!'

  return (
    <div 
      className="
        container relative
        flex items-start justify-between
        bg-dark-white 
        max-w-none mx-auto w-screen h-screen
      ">
      <Sidebar />
      <main 
        className="
          container relative max-w-none w-full mx-auto bg-white h-full">
        <header className="fixed h-16 w-full top-10 left-0">
          <h1 className="text-dark-green text-2xl">Bem vindo à Plataforma Plantus</h1>
        </header>
      </main>
    </div>
  )
}