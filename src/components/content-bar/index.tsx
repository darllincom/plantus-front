import { useContext } from "react"
import { LoginContext } from "../../context/auth-provider"

const { user, handleLogout } = useContext(LoginContext)

export default function ContentBar() {
  return (
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
  )
}