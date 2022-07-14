import { Professional as ProfessionalModel } from '../../../../models/professional';
import NoInfo from '../../no-info';
import ProfessionalInfo from './professional-info';

type ProfessionalProps = {
	professional?: ProfessionalModel;
};

export default function Professional({ professional }: ProfessionalProps) {
	return (
		<div className="w-full min-h-[15vh]">
			{/* {professional ? (
				<ProfessionalInfo professional={professional} />
			) : (
				<NoInfo name="Informações Profissionais" />
			)} */}

			<h1 className="text-center">Em breve</h1>
		</div>
	);
}
