import PlantusHeader from '../../../../components/plantus-header';

export default function LoginHeader() {
	return (
		<>
			<PlantusHeader size='lg' />
			<div className="welcome-wrapper mt-10 xl:mt-14">
				<h1 className="text-xl font-semibold text-dark-green xl:text-4xl">
					Bem-vindo à Plataforma Plantus
				</h1>
				<h3 className="text-md text-light-gray xl:text-2xl">
					Por favor, insira as credenciais solicitadas
				</h3>
			</div>
		</>
	);
}
