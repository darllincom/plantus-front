import { Professional as ProfessionalModel } from '../../../../models/professional';

type ProfessionalInfoProps = {
	professional: ProfessionalModel;
};

export default function ProfessionalInfo({
	professional
}: ProfessionalInfoProps) {
	return (
		<>
			<h1>Informações Profissionais</h1>
		</>
	);
}
