import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/base';
import Loader from '../../components/loader';
import { User } from '../../models/user';
import Header from './components/header';

export default function Team() {
	const [team, setTeam] = useState<Partial<User[]>>();
	const [isLoading, setLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		async function handleFetchTeam() {
			const response = await api.get('/team?pageSize=10&page=1');

			setTeam(response.data.data);
		}

		setLoading(true);
		handleFetchTeam();

		setLoading(false);
	}, []);

  document.title = 'Plantus | Equipe'

	return (
		<div className="relative w-full">
			<Header />
			{isLoading && team ? (
				<Loader />
			) : (
				<>
					{/* <div className="w-full my-8">
						<input type="text" placeholder="Pesquisar por nome" />
					</div> */}
					<div className="w-full items-start flex flex-wrap justify-between mb-16">
						{team?.map((member) => (
							<div
								key={member?.id}
								className="w-64 p-5 flex items-center mx-3 mt-5 justify-start flex-col bg-white shadow h-[24rem] rounded-xl relative"
							>
								<img
									src={
										member?.image !== ''
											? member?.image
											: 'http://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile.png'
									}
									alt="Imagem do usuário"
									loading="lazy"
									className="rounded-full border-2 border-slate-300 bg-white object-cover lg:h-20 lg:w-20"
								/>
								<p className="my-2 text-center">{member?.fullName.toUpperCase()}</p>
								<span className="bg-base-green text-center text-white w-full rounded-lg text-sm my-1 lg:text-base lg:w-full">
									{member?.occupation}
								</span>
								<div className="border-slate-500 text-center px-4 border rounded-lg text-sm my-1 lg:text-base w-full whitespace-nowrap">
									<p className="overflow-hidden text-ellipsis">
										{member?.phone}
									</p>
								</div>
								<div className="border-slate-500 text-center px-4 border rounded-lg text-sm my-1 lg:text-base w-full whitespace-nowrap">
									<p className="overflow-hidden text-ellipsis">
										{member?.credentials.email}
									</p>
								</div>
								<div className="w-full absolute bottom-0 flex item-center justify-center my-3 flex-col">
								  <hr className="border-slate-300 border-t-2 my-2 w-full" />
									<button className='bg-dark-green text-white px-6 py-1 rounded-lg mx-auto' onClick={() => navigate(`/perfil/${member?.id}`)}>
										Ver perfil
									</button>
								</div>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
}
