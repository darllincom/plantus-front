import Logo from '../../assets/plantus-logo.png'
import Grad from '../../assets/grad.png'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="z-50 top-0 fixed left-0 h-screen w-40 flex items-center justify-start content-center flex-col px-5 bg-dark-white ">
      <div className="flex items-start flex-col content-center justify-center mt-12">
				<img src={Logo} alt="Plantus Logo" className="w-36" />
				<img src={Grad} alt="Gradiente" className="w-36 mt-2" />
			</div>
      <div className="flex items-center justify-start content-center  flex-col w-full h-full mt-5">
        <Link to="/" className="bg-white w-20 h-20 rounded-2xl text-center shadow-sm my-3">Inicio</Link>
        <Link to="/perfil" className="bg-white w-20 h-20 rounded-2xl text-center shadow-sm my-3">Perfil</Link>
        <Link to="/equipe" className="bg-white w-20 h-20 rounded-2xl text-center shadow-sm my-3">Equipe</Link>
        <Link to="/produtos" className="bg-white w-20 h-20 rounded-2xl text-center shadow-sm my-3">Produtos</Link>
      </div>
    </aside>
  )
}