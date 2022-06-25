import { Link } from 'react-router-dom';
import LogoClara from '../../../../assets/logo_clara.svg';

export default function LoginFooter() {
	return (
		<div className="absolute bottom-0 w-full flex justify-between items-center content-center">
			<Link to="/visite">Visitar site Plantus</Link>
			<Link to="/termos">Termos de Uso</Link>
			<img src={LogoClara} alt="Logomarca da Plantus" className="w-28" />
		</div>
	);
}
