import { useContext } from 'react';
import Icons, { IconNames } from '../../../../components/icons';
import { LoginContext } from '../../../../context/auth-provider';
import HeaderWrapper from './header-wrapper';

export default function Header() {
	const { user } = useContext(LoginContext);

	return (
		<header className="sticky bg-dark-white/80 backdrop-blur-sm bg-clip-padding py-5 px-3 top-0 z-50 mt-10 xl:mt-16 flex w-full items-center justify-between">
			<div className=" flex items-center">
				<Icons name={IconNames.PERFIL} size="lg" />
				<h1 className="text-dark-green ml-2 text-xl xl:text-2xl">
					Perfil do Usuário
				</h1>
			</div>
			{user?.office === 'MASTER' || user?.office === 'RH' ? (
				<HeaderWrapper />
			) : (
				''
			)}
		</header>
	);
}
