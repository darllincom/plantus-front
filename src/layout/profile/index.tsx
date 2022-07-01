import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader';
import { LoginContext } from '../../context/auth-provider';
import { ProfileContext } from '../../context/profile-provider';
import { User } from '../../models/user';
import { UserRepository } from '../../repositories/user-repository';
import Address from './components/address';
import Documents from './components/documents';
import Header from './components/header';
import Health from './components/health';
import Professional from './components/professional';
import UserDetails from './components/user-details';

export default function Profile() {
	const [leftBar, setLeftBar] = useState('0%');
	const [selectedTab, setSelectedTab] = useState('address');

	const [userProfile, setUserProfile] = useState<User>();

	const { id } = useParams();
	const { isEdition } = useContext(ProfileContext);
	const { user } = useContext(LoginContext);

	useEffect(() => {
		async function handleFetchUserByID(userID: string) {
			const resp = await UserRepository.fetchProfile(userID);

			setUserProfile(resp.data);
		}

		handleFetchUserByID(id!);
	}, [id!, isEdition!]);

	function moveBarTo(tab: 'address' | 'health' | 'professional' | 'documents') {
		switch (tab) {
			case 'address':
				setSelectedTab('address');
				setLeftBar('0%');
				break;
			case 'health':
				setSelectedTab('health');
				setLeftBar('25%');
				break;
			case 'professional':
				setSelectedTab('professional');
				setLeftBar('50%');
				break;
			case 'documents':
				setSelectedTab('documents');
				setLeftBar('75%');
				break;
		}
	}

	document.title = 'Plantus | Perfil';

	return (
		<div className="relative w-full">
			<Header />
			{userProfile === undefined ? (
				<Loader />
			) : (
				<>
					<UserDetails user={userProfile!} />
					<nav className="w-full mt-4 relative">
						<ul className="w-full flex items-center justify-around">
							<li
								onClick={() => moveBarTo('address')}
								className="text-xs text-dark-green font-semibold lg:text-base hover:cursor-pointer"
							>
								<span>Endereço</span>
							</li>
							<li
								onClick={() => moveBarTo('health')}
								className="text-xs text-dark-green font-semibold lg:text-base hover:cursor-pointer"
							>
								<span>Saúde</span>
							</li>
							<li
								onClick={() => moveBarTo('professional')}
								className="text-xs text-dark-green font-semibold lg:text-base hover:cursor-pointer"
							>
								<span>Profissionais</span>
							</li>
							<li
								onClick={() => moveBarTo('documents')}
								className="text-xs text-dark-green font-semibold lg:text-base hover:cursor-pointer"
							>
								<span>Documentos</span>
							</li>
						</ul>
						<div className="w-full h-2 shadow bg-light-gray relative rounded-full transition-all duration-500">
							<div
								style={{ left: `${leftBar}` }}
								className={`w-[25%] h-2 absolute bg-base-green rounded-full transition-all duration-500`}
							></div>
						</div>
					</nav>
					{user?.office === 'MASTER' || user?.office === 'RH ' ? (
						<section className="w-full bg-white px-4 py-3 rounded-b-xl mb-14">
							{(() => {
								switch (selectedTab) {
									case 'address':
										return <Address address={userProfile?.address} />;
									case 'health':
										return <Health health={userProfile?.health} />;
									case 'professional':
										return (
											<Professional professional={userProfile?.professional} />
										);
									case 'documents':
										return <Documents documents={userProfile?.documents} />;
								}
							})()}
						</section>
					) : (
						''
					)}
				</>
			)}
		</div>
	);
}
