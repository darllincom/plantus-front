import Divider from '../../components/divider';
import PlantusHeader from '../../components/plantus-header';
import NotFoundImg from '../../assets/not_found.png';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	function handleNavigateToHome() {
		navigate('/');
	}

	return (
		<div className="container relative bg-dark-white max-w-none mx-auto w-screen h-screen flex justify-between items-center content-center flex-row">
			<Divider />
			<main className="w-1/2 h-screen bg-white transition-all flex justify-start items-center content-center flex-col">
				<PlantusHeader />
				<h3 className="text-light-gray text-xl mt-20">Página em Construção</h3>
				<button
					className="
            bg-base-green rounded-lg text-white text-2xl px-14 py-2 shadow-sm
              transition-all
              duration-300
              mt-8
              hover:bg-base-hover-green"
					onClick={handleNavigateToHome}
				>
					Voltar
				</button>
			</main>
			<aside className="w-1/2 relative h-screen bg-dark-white">
				<img
					src={NotFoundImg}
					className="w-full absolute top-32 -left-32 z-30 xl:top-44 xl:-left-28"
					alt="Não encontramos esse site"
				/>
			</aside>
		</div>
	);
}
