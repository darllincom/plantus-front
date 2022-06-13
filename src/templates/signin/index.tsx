import { useContext } from "react";
import { LoginContext } from "../../context/auth-provider";
import Loader from "../../components/loader";
import Login from "../../layout/login";
import Divider from '../../components/divider'

export default function SignIn() {
  const { loading } = useContext(LoginContext)

  document.title = 'Plantus | Login'

  return (
    <div className="container relative bg-dark-white max-w-none mx-auto w-screen h-full flex justify-between items-center content-center flex-row">
      <Divider />
      <main className="z-10 w-1/2 h-screen  rounded-br-landing bg-white transition-all">
        { loading ? (
          <Loader />
        ) : (
          <Login />
        )}
      </main>
      <aside className="bg-dark-white w-1/2 h-screen"></aside>
    </div>
  )
}