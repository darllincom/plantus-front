import { useContext } from 'react';
import { ProfileContext } from '../../../../context/profile-provider';
import { User } from '../../../../models/user';
import PersonalInfo from './personal-info';
import PersonalInfoForm from './personal-info-form';
import UserCard from './user-card';
import UserCardForm from './user-card-form';

type UserDetailsProps = {
	user: User;
};

export default function UserDetails({ user }: UserDetailsProps) {
	const { isEdition } = useContext(ProfileContext);

	return (
		<section className="w-full lg:h-[65vh]">
			<div className="w-full h-[23rem] lg:h-[100%] p-2 flex align-baseline flex-row items-center justify-between">
				{isEdition ? (
					<>
						<UserCardForm user={user} />
						<PersonalInfoForm user={user} />
					</>
				) : (
					<>
						<UserCard user={user} />
						<PersonalInfo user={user} />
					</>
				)}
			</div>
		</section>
	);
}
