import Logo from '../../assets/plantus-logo.png'
import Grad from '../../assets/grad.png'

export default function Sidebar() {
  return (
    <aside className="z-50 top-0 left-0 h-full w-52 flex items-center justify-start content-center flex-col px-8">
      <div className="flex items-start flex-col content-center justify-center mt-12">
				<img src={Logo} alt="Plantus Logo" className="w-32" />
				<img src={Grad} alt="Gradiente" className="w-32 mt-2" />
			</div>
      <div className="flex items-center justify-start content-center  flex-col w-full h-full mt-16">
        <a href="" className="bg-white w-24 h-24 rounded-2xl text-center shadow-sm my-5">Inicio</a>
        <a href="" className="bg-white w-24 h-24 rounded-2xl text-center shadow-sm my-5">Perfil</a>
        <a href="" className="bg-white w-24 h-24 rounded-2xl text-center shadow-sm my-5">Equipe</a>
        <a href="" className="bg-white w-24 h-24 rounded-2xl text-center shadow-sm my-5">Produtos</a>
      </div>
    </aside>
  )
}