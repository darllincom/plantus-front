import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons, { IconNames } from '../../components/icons';

export default function SuccessPage() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate(`/equipe`);
		}, 2000);
	}, []);

	return (
		<div className="w-full h-full flex items-center justify-center ">
			<div className="w-[70%] flex items-center justify-center rounded-lg bg-white shadow py-9">
				<Icons name={IconNames.V} size="lg" />
				<h1 className="text-2xl ml-5 text-base-green">Deu certo!</h1>
			</div>
		</div>
	);
}
