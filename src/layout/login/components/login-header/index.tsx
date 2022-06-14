import PlantusHeader from "../../../../components/plantus-header";

export default function LoginHeader() {
	return (
		<>
      <PlantusHeader />
			<div className="welcome-wrapper mt-10">
				<h1 className="text-xl font-semibold text-dark-green xl:text-2xl">
					Bem-vindo à Plataforma Plantus
				</h1>
				<h3 className="text-md text-light-gray xl:text-xl">
					Por favor, insira as credenciais solicitadas
				</h3>
			</div>
		</>
	);
}
