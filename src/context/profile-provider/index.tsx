import { createContext, ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../models/user';
import { UserRepository } from '../../repositories/user-repository';

type ContextType = {
	isEdition: boolean;
	userProfile: User | undefined;
	isLoading: boolean;
	handleEdition: () => void;
};

type ProfileProps = {
	children: ReactNode;
};

const ProfileContext = createContext<Partial<ContextType>>({});

function ProfileProvider({ children }: ProfileProps) {
	const [isEdition, setEdition] = useState(false);
	const [userProfile, setUserProfile] = useState<User>();
	const [isLoading, setLoading] = useState(true);

	const { id } = useParams();

	function handleEdition() {
		setEdition(!isEdition);
	}

	async function handleFetchUserByID(userID: string) {
		const resp = await UserRepository.fetchProfile(userID);

		setUserProfile(resp.data);
	}

	useEffect(() => {
		setLoading(true);
		handleFetchUserByID(id!);

		setLoading(false);
	}, [id]);

	useEffect(() => {}, []);

	return (
		<ProfileContext.Provider
			value={{ isEdition, userProfile, isLoading, handleEdition }}
		>
			{children}
		</ProfileContext.Provider>
	);
}

export { ProfileContext, ProfileProvider };
