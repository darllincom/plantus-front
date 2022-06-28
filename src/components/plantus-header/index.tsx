import Logo from '../../assets/plantus-logo.png';
import Grad from '../../assets/grad.png';

export default function PlantusHeader() {
	return (
		<div className="flex items-start flex-col content-center justify-center mt-10 xl:mt-16">
			<img
				src={Logo}
				alt="Plantus Logo"
				className="w-60 xl:w-[26rem]"
			/>
			<img
				src={Grad}
				alt="Gradiente"
				className="w-60 xl:w-[26rem] mt-5"
			/>
		</div>
	);
}
