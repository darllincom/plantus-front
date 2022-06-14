import PlantusHeader from "../../../../components/plantus-header";

export default function LoginHeader() {
	return (
		<>
      <PlantusHeader />
			<div className="welcome-wrapper mt-10">
				<h1 className="text-xl font-semibold text-dark-green">
					Bem-vindo à Plataforma Plantus
				</h1>
				<h3 className="text-md text-light-gray">
					Por favor, insira as credenciais solicitadas
				</h3>
			</div>
		</>
	);
}
