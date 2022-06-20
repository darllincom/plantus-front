import { User } from '../../../../models/user';
import PersonalInfo from './personal-info';
import UserCard from './user-card';

type UserDetailsProps = {
	user: User;
};

export default function UserDetails({ user }: UserDetailsProps) {
	return (
		<section className="w-full lg:h-[45vh]">
			<div className="w-full h-[23rem] lg:h-[100%] p-2 flex align-baseline flex-row items-center justify-between">
				<UserCard user={user} />
				<PersonalInfo user={user} />
			</div>
		</section>
	);
}
