import { useContext } from 'react';
import { LoginContext } from '../../context/auth-provider';
import Loader from '../../components/loader';
import Login from '../../layout/login';
import Divider from '../../components/divider';
import Plantus from '../../assets/plantus.png';

export default function SignIn() {
	const { loading } = useContext(LoginContext);

	document.title = 'Plantus | Login';

	return (
		<div className="container relative bg-dark-white max-w-none mx-auto w-full h-screen flex justify-between items-center content-center flex-row">
			<Divider />
			<main className="z-10 w-1/2 h-screen bg-white transition-all">
				{loading ? <Loader /> : <Login />}
			</main>
			<aside className="bg-dark-white relative overflow-hidden w-1/2 h-screen">
				<img src={Plantus} className="absolute z-10 right-0 top-[15%] w-5/6" />
			</aside>
		</div>
	);
}
