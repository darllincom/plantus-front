import { useContext } from 'react';
import { ProfileContext } from '../../../../context/profile-provider';
import { User } from '../../../../models/user';
import PersonalInfo from './personal-info';
import PersonalInfoForm from './personal-info-form';

type UserDetailsProps = {
	user: User;
};

export default function UserDetails({ user }: UserDetailsProps) {
	const { isEdition } = useContext(ProfileContext);

	return (
		<section className="w-full h-full">
			<div className="w-full h-[23rem] lg:h-[100%]">
				{isEdition ? (
					<>
						<PersonalInfoForm user={user} />
					</>
				) : (
					<>
						<PersonalInfo user={user} />
					</>
				)}
			</div>
		</section>
	);
}
