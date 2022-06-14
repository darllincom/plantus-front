import { useContext } from "react"
import { LoginContext } from "../../context/auth-provider"
import Sidebar from "../../components/sidebar"
import WelcomeImg from '../../assets/welcome-img.png'

export default function Welcome() {
  const { user, handleLogout } = useContext(LoginContext)

  document.title = 'Plantus | Bem vindo!'

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
          <header className="mt-14 xl:mt-16">
            <h1 className="text-dark-green text-xl xl:text-2xl">Bem vindo à Plataforma Plantus</h1>
          </header>
          <section className="flex items-start content-center justify-center flex-row h-full">
            <div className="w-1/2 mt-44">
              <img src={WelcomeImg} className="w-5/6" alt="Folhas nas cores da Plantus" />
            </div>
            <div className="w-1/2 mt-44">
              <p className="text-lg font-light text-dark-gray xl:text-xl">
                Aguardando informações da gestão
                para a página inicial.
              </p>
              <br />
              <p className="text-lg font-light text-dark-gray xl:text-xl">
                Visualize as outras funcionalidades 
                no menu lateral da Plataforma Plantus!
              </p>
            </div>
          </section>
        </section>
        <aside className="h-screen px-2 py-10 bg-white w-3/12 right-0 top-0 shadow-md">
          <header className="flex w-full items-center justify-around">
            <img className="rounded-full w-10 xl:w-14" src={user?.image} alt="Avatar do Usuário" />
            <section>
              <p className="text-base-green text-xs xl:text-lg">{ user?.fullName }</p>
              <p className="text-xs xl:text-base">{user?.office}</p>
            </section>
            <button onClick={handleLogout} className="bg-light-green py-1 px-3 rounded-lg text-sm xl:text-base">Sair</button>
          </header>
        </aside>
      </main>
      <footer className="fixed bottom-0 right-0 w-10/12 h-12 bg-white">   
      </footer>
    </div>
  )
}