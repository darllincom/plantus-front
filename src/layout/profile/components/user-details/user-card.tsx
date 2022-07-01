import Icons, { IconNames } from '../../../../components/icons';
import { User } from '../../../../models/user';

type UserCardProps = {
	user: User;
};

export default function UserCard({ user }: UserCardProps) {
	return (
		<div className="h-full w-52 rounded-2xl bg-dark-green flex items-center content-start justify-start flex-col py-4 lg:w-[30%] lg:mr-5 lg:py-6 lg:px-6">
			<div className="relative">
				<img
					src={
						user.image !== ''
							? user.image
							: 'http://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile.png'
					}
					alt="Imagem do usuário"
					loading="lazy"
					className="rounded-full object-cover w-20 h-32 border-2 mt-3 border-white bg-white lg:w-32"
				/>
				<div className="absolute bottom-0 -right-2 w-5 h-5 rounded-full bg-white border-light-green border-2">
					{user.hasRegisteringPending ? (
						<Icons name={IconNames.X} size={'sm'} />
					) : (
						<Icons name={IconNames.V} size={'sm'} />
					)}
				</div>
			</div>
			<p className="text-white text-lg text-center mt-2">{user.fullName}</p>
			<span className="bg-base-green w-full text-white text-center my-2 rounded-full text-sm lg:text-lg lg:w-full">
				{user.office}
			</span>
			<span className="bg-base-green w-full text-white text-center rounded-full text-sm lg:text-lg lg:w-full">
				{user.occupation}
			</span>
		</div>
	);
}
