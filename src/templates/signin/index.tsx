import { useContext } from "react";
import Loader from "../../components/loader";
import { LoginContext } from "../../context/auth-provider";
import Login from "../../layout/login";

export default function SignIn() {
  const { loading } = useContext(LoginContext)

  document.title = 'Plantus | Login'

  return (
    <div className="container bg-dark-white max-w-none mx-auto w-screen h-full flex justify-between items-center content-center flex-row">
      <main className="z-10 w-1/2 h-screen bg-white rounded-br-landing transition-all">
        { loading ? (
          <Loader />
        ) : (
          <Login />
        )}
      </main>
      <aside className="bg-dark-white w-1/2 h-screen rounded-tl-landing"></aside>
    </div>
  )
}