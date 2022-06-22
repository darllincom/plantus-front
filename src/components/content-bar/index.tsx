import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/auth-provider';

export default function ContentBar() {
	const { user, handleLogout } = useContext(LoginContext);
	const navigate = useNavigate();

	function doLogout() {
		handleLogout!();
		navigate('/');
	}

	return (
		<aside className="h-screen px-2 py-10 bg-white w-3/12 right-0 top-0 shadow-md">
			<header className="flex w-full items-center justify-around">
				<img
					className="rounded-full w-10 xl:w-14"
					src={
						user?.image !== ''
							? user?.image
							: 'http://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile.png'
					}
					alt="Avatar do Usuário"
				/>
				<section>
					<p className="text-base-green text-xs xl:text-lg">{user?.fullName}</p>
					<p className="text-xs xl:text-base">{user?.office}</p>
				</section>
				<button
					onClick={doLogout}
					className="bg-light-green py-1 px-3 rounded-lg text-sm xl:text-base"
				>
					Sair
				</button>
			</header>
		</aside>
	);
}
