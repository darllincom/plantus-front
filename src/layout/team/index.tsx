import { useEffect, useState } from 'react';
import { api } from '../../api/base';
import Loader from '../../components/loader';
import { User } from '../../models/user';
import Header from './components/header';

export default function Team() {
	const [team, setTeam] = useState<Partial<User[]>>()
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		async function handleFetchTeam() {
			const response = await api.get('/team?pageSize=10&page=1');

			setTeam(response.data.data)
		}

		setLoading(true);
		handleFetchTeam();

    console.log(team)
		setLoading(false);
	}, []);

	return (
		<div className="relative w-full">
			<Header />
			{isLoading && team ? (
				<Loader />
			) : (
				<>
					<div className="w-full my-8">
						<input type="text" placeholder="Pesquisar por nome" />
					</div>
					<div className="w-full flex">
            {
              team?.map(member => (
                <div key={member?.id}  >
                  <div className="w-64 flex items-center justify-start flex-col bg-white shadow h-80 rounded-xl p-5">
                    <img
                      src={
                        member?.image !== ''
                          ? member?.image
                          : 'http://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile.png'
                      }
                      alt="Imagem do usuário"
                      loading="lazy"
                      className="rounded-full border-2 border-white bg-white lg:w-20"
                    />
                    <p className='my-2'>
                      {member?.fullName}
                    </p>
                    <span className="bg-base-green text-white px-10 rounded-lg text-sm my-2 lg:text-base lg:w-full lg:text-center">
                      {member?.occupation}
                    </span>
                    <span className="border-slate-500 border px-10 rounded-full text-sm mt-2 lg:text-base  lg:text-center">
                      {member?.phone}
                    </span>
                    <span className="border-slate-500 border px-10 rounded-full text-sm my-2 lg:text-base  lg:text-center">
                      {member?.credentials.email}
                    </span>
                    <hr className='border-slate-300 border-t-2 my-2 w-full' />
                    <div className="w-full">
                      <button>Ver perfil</button>
                    </div>
                  </div>
                </div>
              ))
            }
					</div>
				</>
			)}
		</div>
	);
}
