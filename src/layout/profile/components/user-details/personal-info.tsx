import Icons, { IconNames } from '../../../../components/icons';
import { User } from '../../../../models/user';

type UserDetailsProps = {
	user: User;
};

export default function PersonalInfo({ user }: UserDetailsProps) {
	return (
		<div className="w-[22rem] lg:w-full flex flex-row items-start justify-start">
			<div className="w-52 rounded-lg bg-dark-green flex p-5 items-center content-start justify-start flex-col py-4 lg:w-[30%] lg:mr-5">
				<div className="relative">
					<img
						src={
							user.image !== ''
								? user.image
								: 'http://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile.png'
						}
						alt="Imagem do usuário"
						loading="lazy"
						className="rounded-full object-cover h-32 border-2 mt-3 border-white bg-white lg:w-32"
					/>
					<div className="absolute bottom-0 -right-2 w-5 h-5 rounded-full bg-white border-light-green border-2">
						{user.hasRegisteringPending ? (
							<Icons name={IconNames.X} size={'sm'} />
						) : (
							<Icons name={IconNames.V} size={'sm'} />
						)}
					</div>
				</div>
				<h1 className="text-white text-lg text-center mt-4">{user.fullName}</h1>
				<span className="bg-base-green w-full text-white text-center my-5 rounded-full text-sm lg:text-lg lg:w-full">
					{user.office}
				</span>
				<span className="bg-base-green w-full text-white text-center rounded-full text-sm lg:text-lg lg:w-full">
					{user.occupation}
				</span>
			</div>
			<div className="w-[70%]">
				<div className="w-full p-3 rounded-lg bg-white shadow-sm">
					<div className="w-full flex items-center">
						<Icons name={IconNames.PERFIL} selected size="sm" bg />
						<p className="text-xs text-dark-green font-semibold lg:text-lg lg:ml-5">
							Informações Pessoais
						</p>
					</div>
					<div className="relative w-full my-1 lg:mt-4">
						<div className="w-28 bg-white h-3 absolute -top-2 left-3"></div>
						<label
							htmlFor="nome-completo"
							className="absolute -top-2 left-4 text-light-gray text-xs"
						>
							Nome Completo:
						</label>
						<p
							className=" 
                border-light-green border-2  rounded-xl w-full text-base px-5 py-1"
						>
							{user.fullName}
						</p>
					</div>
					<div className="w-100 flex items-center flex-col lg:flex-row">
						<div className="relative w-[30%] my-1 mr-3 lg:mt-4">
							<div className="w-36 bg-white h-3 absolute -top-2 left-3"></div>
							<label
								htmlFor="nome-completo"
								className="absolute -top-2 left-4 text-light-gray text-xs"
							>
								Data de Nascimento:
							</label>
							<p
								className=" 
                border-light-green border-2 rounded-xl w-full text-base px-5 py-1"
							>
								{user.birthDate}
							</p>
						</div>
						<div className="relative w-[70%] my-1 lg:mt-4">
							<div className="w-14 bg-white h-3 absolute -top-2 left-3"></div>
							<label
								htmlFor="nome-completo"
								className="absolute -top-2 left-4 text-light-gray text-xs"
							>
								Email:
							</label>
							<p
								className=" 
                border-light-green border-2 rounded-xl w-full text-base px-5 py-1"
							>
								{user.credentials.email}
							</p>
						</div>
					</div>
					<div className="w-full flex items-center flex-row justify-between">
						<div className="relative w-[50%] my-1 mr-3 lg:mt-4">
							<div className="w-16 bg-white h-3 absolute -top-2 left-3"></div>
							<label
								htmlFor="nome-completo"
								className="absolute -top-2 left-4 text-light-gray text-xs"
							>
								Telefone:
							</label>
							<p
								className=" 
                border-light-green border-2 rounded-xl w-full text-base px-5 py-1"
							>
								{user.phone}
							</p>
						</div>

						<div className="relative w-[50%] my-1 lg:mt-4">
							<div className="w-20 bg-white h-3 absolute -top-2 left-3"></div>
							<label
								htmlFor="nome-completo"
								className="absolute -top-2 left-4 text-light-gray text-xs"
							>
								Whatsapp:
							</label>
							<p
								className=" 
                border-light-green border-2 rounded-xl w-full text-base px-5 py-1"
							>
								{user.whatsapp}
							</p>
						</div>
					</div>
					<div className="w-full flex items-center justify-between">
						<div className="relative w-[50%] my-1 lg:mt-4">
							<div className="w-32 bg-white h-3 absolute -top-2 left-3"></div>
							<label
								htmlFor="nome-completo"
								className="absolute -top-2 left-4 text-light-gray text-xs"
							>
								Inicio na Plantus:
							</label>
							<p
								className=" 
                border-light-green border-2 rounded-xl w-full text-base px-5 py-1"
							>
								{user.dateStarted}
							</p>
						</div>
						<div className="w-[52%] flex items-center content-center justify-between object-center flex-row lg:justify-around">
							<div className="w-5 h-5 rounded-full bg-white border-light-green border-2">
								{user.hasRegisteringPending ? (
									<Icons name={IconNames.X} size="sm" />
								) : (
									<Icons name={IconNames.V} size="sm" />
								)}
							</div>
							<p className="text-[0.65rem] lg:text-sm">
								{user.hasRegisteringPending
									? 'Possui pendências de cadastro'
									: 'Não possui pendências de cadastro'}
							</p>
						</div>
					</div>
				</div>
				<div className="w-full h-[9rem] lg:mt-5  rounded-lg bg-base-green text-center p-2">
					<p className="text-xs text-white lg:text-base">Mais informações</p>
					<p className="text-xs text-white lg:text-base text-left">
						{user.informations}
					</p>
				</div>
			</div>
		</div>
	);
}
