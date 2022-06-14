import Logo from '../../assets/plantus-logo.png'
import Grad from '../../assets/grad.png'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside 
      className="
        z-50 top-0 fixed left-0 h-screen w-40 
        flex items-center justify-start content-center flex-col px-4 bg-dark-white
        xl:w-2/12
      ">
      <div className="flex items-start flex-col content-center justify-center mt-12">
				<img src={Logo} alt="Plantus Logo" className="w-36 xl:w-40" />
				<img src={Grad} alt="Gradiente" className="w-36 xl:w-40 mt-2 xl:mt-3" />
			</div>
      <div className="flex items-center justify-start content-center flex-col w-full h-full mt-5 xl:mt-8">
        <Link to="/" className="bg-white w-20 h-20 px-2 text-xs flex align-center content-center justify-center flex-col rounded-2xl text-center shadow-sm my-2 xl:w-24 xl:h-24 xl:text-base">Inicio</Link>
        <Link to="/perfil" className="bg-white w-20 h-20 px-2 text-xs flex align-center content-center justify-center flex-col rounded-2xl text-center shadow-sm my-2 xl:w-24 xl:h-24 xl:text-base">Perfil</Link>
        <Link to="/equipe" className="bg-white w-20 h-20 px-2 text-xs flex align-center content-center justify-center flex-col rounded-2xl text-center shadow-sm my-2 xl:w-24 xl:h-24 xl:text-base">Equipe</Link>
        <Link to="/produtos" className="bg-white w-20 h-20 px-2 text-xs flex align-center content-center justify-center flex-col rounded-2xl text-center shadow-sm my-2 xl:w-24 xl:h-24 xl:text-base">Produtos</Link>
      </div>
    </aside>
  )
}