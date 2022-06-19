import { useContext } from 'react';
import { ProfileContext } from '../../../../context/profile-provider';

export default function HeaderWrapper() {
	const { isEdition, handleEdition } = useContext(ProfileContext);

	return (
		<div className="w-1/2 flex justify-end">
			{isEdition ? (
				<div className="w-full flex content-center items-start justify-evenly lg:justify-between">
					<button className="px-2 py-1 rounded-md bg-dark-green text-xs text-white lg:text-lg lg:px-4">
						Salvar Edição
					</button>
					<button
						onClick={handleEdition!}
						className="px-2 py-1 rounded-md bg-light-green text-xs text-dark-green lg:text-lg lg:px-4"
					>
						Cancelar edição
					</button>
				</div>
			) : (
				<button
					onClick={handleEdition!}
					className="px-2 py-1 rounded-md bg-light-green text-xs text-dark-green lg:text-lg lg:px-4"
				>
					Modo edição
				</button>
			)}
		</div>
	);
}
