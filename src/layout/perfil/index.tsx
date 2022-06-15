import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../components/loader"
import { LoginContext } from "../../context/auth-provider"
import { User } from "../../models/user"
import { UserRepository } from "../../repositories/user-repository"

export default function Perfil() {
  const [ userProfile, setUserProfile ] = useState<User>()
  const [ isLoading, setLoading ] = useState(false)
  const { user } = useContext(LoginContext)
  
  const { id } = useParams()

  async function handleFetchUserByID(userID: string) {
    const resp = await UserRepository.fetchProfile(userID)

    setUserProfile(resp.data)
  }

  useEffect(() => {
    setLoading(true)
    handleFetchUserByID(id!)

    setLoading(false)
  }, [ id ])

  document.title = 'Plantus | Perfil'

  return (
    <div className="w-full">
      <header className="mt-14 xl:mt-16">
        <h1 className="text-dark-green text-xl xl:text-2xl">Perfil do Usuário</h1>
      </header>
      { isLoading ? (
        <Loader />
      ) : (
        <section className="w-full">
          <div className="w-full h-80 p-2 flex align-baseline flex-row items-center justify-between">
            <div className="h-full w-52 rounded-2xl bg-dark-green flex items-center content-start justify-start flex-col py-4">
              <img src={userProfile?.image} alt="Imagem do usuário" className="rounded-full w-24 border-2 border-white bg-white"/>
              <p className="text-white text-lg">{userProfile?.fullName}</p>
              <span>{userProfile?.office}</span>
            </div>
            <div className="h-full w-[22rem] flex flex-col items-center justify-between">
              <div className="w-full h-2/3 rounded-2xl bg-white shadow-sm"></div>
              <div className="w-full h-20 rounded-2xl bg-base-green text-center p-2">
                <p className="text-xs text-white">Mais informações</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}