import { useContext } from 'react';
import { LoginContext } from './context/auth-provider';
import Main from './pages/main';
import PublicPages from './pages/public-pages';

export default function App() {
	const { authenticate } = useContext(LoginContext);

	return <>{authenticate ? <Main /> : <PublicPages />}</>;
}
