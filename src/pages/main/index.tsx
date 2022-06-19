import { useContext } from 'react';
import { LoginContext } from '../../context/auth-provider';
import SignIn from '../../templates/signin';
import MainTemplate from '../../templates/main-template';

export default function Main() {
	const { authenticate } = useContext(LoginContext);

	return <>{authenticate ? <MainTemplate /> : <SignIn />}</>;
}
