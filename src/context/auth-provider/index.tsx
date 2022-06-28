import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useState
} from 'react';
import jwt from 'jwt-decode';
import { api } from '../../api/base';
import { User } from '../../models/user';
import { AuthRepository } from '../../repositories/auth-repository';
import { AxiosError } from 'axios';

type ContextType = {
	authenticate: boolean;
	loading: boolean;
	user: User | undefined;
	error: string;
	handleLogin: (cpf: string, password: string) => Promise<any>;
	handleLogout: () => void;
};

type AuthProps = {
	children: ReactNode;
};

const LoginContext = createContext<Partial<ContextType>>({});

function AuthProvider({ children }: AuthProps) {
	const [authenticate, setAuthenticate] = useState(false);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<User>();

	const token = localStorage.getItem('accessToken');

	function handleLogout() {
		localStorage.removeItem('accessToken');
		api.defaults.headers.common.Authorization = '';
		setAuthenticate(false);
	}

	const getUserFromJWT = useCallback(() => {
		if (token) {
			const { user, exp } = jwt<{ user: User; exp: number }>(token);

			const now = new Date();

			if (Math.trunc(now.getTime() / 1000) > exp) {
				handleLogout();
				return null;
			}

			setUser(user);
		}
	}, [token]);

	async function handleLogin(cpf: string, password: string) {
		setLoading(true);

		try {
			const { data } = await AuthRepository.handleSignIn(cpf, password);

			if (data.accessToken) {
				localStorage.setItem('accessToken', data.accessToken);

				api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;

				setAuthenticate(true);
				getUserFromJWT();
				setLoading(false);
				setError('');
			} else {
				return data;
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				setError(error.response?.data.message);
			}
		}

		setLoading(false);
	}

	useEffect(() => {
		if (token) {
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			setAuthenticate(true);
		}

		setLoading(false);
		getUserFromJWT();
	}, [getUserFromJWT, token]);

	useEffect(() => {});

	return (
		<LoginContext.Provider
			value={{ authenticate, loading, error, user, handleLogin, handleLogout }}
		>
			{children}
		</LoginContext.Provider>
	);
}

export { LoginContext, AuthProvider };
