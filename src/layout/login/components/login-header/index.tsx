import Logo from '../../../../assets/plantus-logo.png'
import Grad from '../../../../assets/grad.png'

export default function LoginHeader() {
	return (
		<>
			<div className="flex items-start flex-col content-center justify-center mt-20">
				<img src={Logo} alt="Plantus Logo" className="w-90" />
				<img src={Grad} alt="Gradiente" className="w-90 mt-5" />
			</div>
			<div className="welcome-wrapper mt-20">
				<h1 className="text-3xl font-semibold text-dark-green">
					Bem-vindo à Plataforma Plantus
				</h1>
				<h3 className="text-xl text-light-gray">
					Por favor, insira as credenciais solicitadas
				</h3>
			</div>
		</>
	);
}
