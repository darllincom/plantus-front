import Logo from '../../assets/plantus-logo.png';
import Grad from '../../assets/grad.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { LoginContext } from '../../context/auth-provider';
import Icons, { IconNames } from '../icons';

type CurrentSelected = 'bemvindo' | 'perfil' | 'equipe' | 'produtos';

export default function Sidebar() {
	const { user } = useContext(LoginContext);
	const [selected, setCurrentSelected] = useState<CurrentSelected>('bemvindo');

	return (
		<aside
			className="
        z-50 top-0 fixed left-0 h-screen w-40 
        flex items-center justify-start content-center flex-col px-4 bg-dark-white
        lg:w-[10%]
      "
		>
			<div className="flex items-start flex-col content-center justify-center mt-12">
				<img src={Logo} alt="Plantus Logo" className="w-36 xl:w-40" />
				<img src={Grad} alt="Gradiente" className="w-36 xl:w-40 mt-2 xl:mt-3" />
			</div>
			<div className="flex items-center justify-start content-center flex-col w-full h-full mt-5 xl:mt-8">
				<Link
					to="/"
					className={`
           w-20 h-20 px-2 text-xs 
           flex items-center align-center content-center 
           justify-center flex-col rounded-2xl text-center 
           border-dark-gray my-2 
           xl:w-24 xl:h-24 xl:text-base transition-all duration-300
           ${selected === 'bemvindo' ? `bg-white shadow-md ` : `bg-darkest-white shadow-inner`}
           `}
           onClick={() => setCurrentSelected('bemvindo')}
				>
					<Icons name={IconNames.HOME} size={'sm'} selected={selected === 'bemvindo'} />
					<span className="mt-2">Inicio</span>
				</Link>
				<Link
					to={`/perfil/${user?.id}`}
					className={`
          w-20 h-20 px-2 text-xs 
          flex items-center align-center content-center 
          justify-center flex-col rounded-2xl text-center 
          border-dark-gray my-2 
          xl:w-24 xl:h-24 xl:text-base transition-all duration-300
          ${selected === 'perfil' ? `bg-white shadow-md ` : `bg-darkest-white shadow-inner`}
          `}
          onClick={() => setCurrentSelected('perfil')}
				>
          <Icons name={IconNames.PERFIL} size={'sm'} selected={selected === 'perfil'} />
					<span className="mt-2">Perfil</span>
				</Link>
				<Link
					to="/equipe"
					className={`
          w-20 h-20 px-2 text-xs 
          flex items-center align-center content-center 
          justify-center flex-col rounded-2xl text-center 
          border-dark-gray my-2 
          xl:w-24 xl:h-24 xl:text-base transition-all duration-300
          ${selected === 'equipe' ? `bg-white shadow-md ` : `bg-darkest-white shadow-inner`}
          `}
          onClick={() => setCurrentSelected('equipe')}
				>
          <Icons name={IconNames.EQUIPE} size={'sm'} selected={selected === 'equipe'} />
					<span className="mt-2">Equipe</span>
				</Link>
				{/* <Link
					to="/produtos"
					className={`
          w-20 h-20 px-2 text-xs 
          flex items-center align-center content-center 
          justify-center flex-col rounded-2xl text-center 
          shadow border-dark-gray my-2 
          xl:w-24 xl:h-24 xl:text-base transition-all duration-300
          ${selected === 'produtos' ? `bg-white shadow-md ` : `bg-darkest-white shadow-inner`}
          `}
          onClick={() => setCurrentSelected('produtos')}
				>
					Produtos
				</Link> */}
			</div>
		</aside>
	);
}
