import {
	createContext,
	ReactNode,
	useEffect,
	useState
} from 'react';

type ContextType = {
	isEdition: boolean;
	isLoading: boolean;
	handleEdition: () => void;
	handleLoading: () => void;
};

type ProfileProps = {
	children: ReactNode;
};

const ProfileContext = createContext<Partial<ContextType>>({});

function ProfileProvider({ children }: ProfileProps) {
	const [isEdition, setEdition] = useState(false);
	const [isLoading, setLoading] = useState(false);

	function handleEdition() {
		setEdition(!isEdition);
	}

	function handleLoading() {
		setLoading(!isLoading);
	}

	useEffect(() => {}, []);

	return (
		<ProfileContext.Provider
			value={{ isEdition, handleEdition, isLoading, handleLoading }}
		>
			{children}
		</ProfileContext.Provider>
	);
}

export { ProfileContext, ProfileProvider };
