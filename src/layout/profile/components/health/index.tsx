import { useContext } from 'react';
import { ProfileContext } from '../../../../context/profile-provider';
import { Health as HealthModel } from '../../../../models/health';
import HealthForm from './health-form';
import HealthWrapper from './health-wrapper';

type HealthProps = {
	health?: HealthModel;
};

export default function Health({ health }: HealthProps) {
	const { isEdition } = useContext(ProfileContext);

	return (
		<div className="w-full min-h-[15vh]">
			{/* { isEdition ? (
        <HealthForm health={health} />
      ) : (
        <HealthWrapper health={health} />
      ) } */}

			<h1 className='text-center'>Em breve</h1>
		</div>
	);
}
