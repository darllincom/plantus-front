import PlantusHeader from "../../../../components/plantus-header";

export default function LoginHeader() {
	return (
		<>
      <PlantusHeader />
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
