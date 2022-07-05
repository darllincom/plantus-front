import { AxiosError } from 'axios';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Icons, { IconNames } from '../../../../components/icons';
import { ProfileContext } from '../../../../context/profile-provider';
import { User } from '../../../../models/user';
import { UserRepository } from '../../../../repositories/user-repository';
import dateMask from '../../../../utils/dateMask';
import phoneMask from '../../../../utils/phoneMask';

type UserDetailsProps = {
	user: User;
};

export default function PersonalInfoForm({ user }: UserDetailsProps) {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [dateStarted, setDateStarted] = useState('');
	const [hasRegisteringPending, setHasRegisterPending] = useState('');
	const [informations, setInfo] = useState('');

	const [birthDate, setBirthDate] = useState('');

	const [office, setOffice] = useState('');
	const [occupation, setOccupation] = useState('');
	const [offices, setOffices] = useState(['']);

	const [image, setImage] = useState<File>();
	const [imageUrl, setImageUrl] = useState('');

	const [imagePreview, setImagePreview] = useState('');

	async function handleFetchOffices() {
		const res = await UserRepository.fetchOffices();

		setOffices(res.data);
	}

	useEffect(() => {
		if (image) {
			setImagePreview(window.URL.createObjectURL(image));
		}
	}, [image]);

	useEffect(() => {
		setOffice(user.office);
		setOccupation(user.occupation);

		handleFetchOffices();

		setImageUrl(user.image!);
	}, [user]);

	const { handleEdition, handleLoading } = useContext(ProfileContext);

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setFullName(user.fullName);
		setEmail(user.credentials.email);
		setPhone(user.phone);
		setWhatsapp(user.whatsapp);
		setInfo(user.informations);
		setHasRegisterPending(user.hasRegisteringPending);

		setDateStarted(user.dateStarted);
		setBirthDate(dateMask(user.birthDate));
	}, [user]);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		handleLoading!();

		try {
			await UserRepository.updatePersonalInfo(
				id!,
				{
					fullName,
					birthDate,
					credentials: {
						email
					},
					phone,
					whatsapp,
					dateStarted,
					informations,
					hasRegisteringPending,
					office,
					occupation,
				},
				image || imageUrl
			);

			navigate(`/perfil/${user.id}`, { replace: true });
			handleEdition!();
		} catch (error) {
			if (error instanceof AxiosError) {
				if (error.code === 'Internal Server Error') {
					alert(
						'Algum erro interno aconteceu. Mas fique tranquilo, iremos resolver isso o mais rápido possível'
					);
				}
			}
		}

		handleLoading!();
	}

	return (
		<>
			<div className="h-full w-[22rem] lg:w-full">
				<form
					onSubmit={handleSubmit}
					className="h-full w-full flex flex-row items-start justify-start"
				>
					<div className="w-[30%] h-full mr-5 flex items-center content-start justify-start flex-col">
						<div className="w-full h-[67%] bg-dark-green rounded-lg p-5 text-white flex items-center content-start justify-start flex-col shadow">
							<div className="relative">
								<img
									src={imagePreview !== '' ? imagePreview : imageUrl}
									alt="Imagem do usuário"
									loading="lazy"
									className="rounded-full object-cover w-20 h-32 border-2 mt-3 border-white bg-white lg:w-32"
								/>
								<div className="absolute top-3 w-32 h-32 rounded-full bg-white/50 flex items-center justify-center content-center flex-col">
									<input
										type="file"
										accept="image/*"
										onChange={(e) => setImage(e.currentTarget.files![0])}
										className="text-xs h-full rounded-full flex flex-col w-full opacity-0 absolute cursor-pointer"
									/>
									<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center content-center flex-col">
										<Icons name={IconNames.EDIT} size='lg' bg />
									</div>
								</div>
								<div className="absolute bottom-0 -right-2 w-5 h-5 rounded-full bg-white border-light-green border-2">
									{user.hasRegisteringPending ? (
										<Icons name={IconNames.X} size='sm' />
									) : (
										<Icons name={IconNames.V} size='sm' />
									)}
								</div>
							</div>
							<h1 className="mt-4 text-lg text-center">{fullName}</h1>
							<select
								value={office}
								onChange={(e) => setOffice(e.target.value)}
								className="w-full py-1 px-10 my-5 rounded-full text-sm bg-base-green text-white lg:text-lg lg:text-center"
							>
								{offices.map((off, index) => (
									<option
										className="text-center text-dark-green bg-transparent"
										value={off}
										key={index}
									>
										{off}
									</option>
								))}
							</select>
							<input
								type="text"
								value={occupation}
								onChange={(e) => setOccupation(e.target.value)}
								className="py-1 bg-base-green  text-white rounded-full w-full lg:text-center"
							/>
						</div>
					</div>
					<div className="w-[70%] h-full flex flex-col">
						<div className="w-full p-3 rounded-lg bg-white shadow-sm">
							<div className="w-full flex items-center">
								<div className="w-full flex items-center">
									<Icons name={IconNames.PERFIL} selected size="sm" bg />
									<p className="text-xs text-dark-green font-semibold lg:text-lg lg:ml-5">
										Informações Pessoais
									</p>
								</div>
								<button
									type="submit"
									className="px-6 py-1 rounded-lg bg-base-green text-white transition-all duration-300 hover:brightness-95"
								>
									Salvar
								</button>
							</div>
							<fieldset className="relative w-full my-1 lg:mt-4">
								<input
									type="text"
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									className=" 
                      border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
								/>
								<label
									className="
                        absolute left-4 -top-2 z-20
                        text-light-gray text-xs 
                        transition-all
                        2xl:text-xs
                      "
								>
									Nome Completo
								</label>
								<div
									className="
                        absolute 
                        z-10
                        transition-all
                        duration-300
                        left-3 -top-2 w-28 h-3
                        rounded-full
                        bg-white 
                      "
								/>
							</fieldset>
							<div className="w-100 flex items-center flex-col lg:flex-row">
								<fieldset className="relative w-full my-2 lg:mt-4 lg:w-[30%] lg:mr-3">
									<input
										type="text"
										maxLength={10}
										value={birthDate}
										onChange={(e) => setBirthDate(dateMask(e.target.value))}
										className=" 
                      border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
									/>
									<label
										className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-xs
                      "
									>
										Data de Nascimento
									</label>
									<div
										className="
                        absolute 
                        z-10
                        transition-all
                        duration-300
                        left-3 -top-2 w-36 h-3
                        rounded-full
                        bg-white 
                      "
									/>
								</fieldset>
								<fieldset className="relative w-[70%] my-2 lg:mt-4">
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className=" 
                      border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
									/>
									<label
										className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-xs
                      "
									>
										Email
									</label>
									<div
										className="
                        absolute 
                        z-10
                        transition-all
                        duration-300
                        left-3 -top-2 w-12 h-3
                        rounded-full
                        bg-white 
                      "
									/>
								</fieldset>
							</div>
							<div className="w-full flex items-center flex-row justify-between">
								<fieldset className="relative w-[50%] my-2 mr-3 lg:mt-4">
									<input
										type="tel"
										maxLength={16}
										value={phone}
										onChange={(e) => setPhone(phoneMask(e.target.value))}
										className=" 
                        border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
									/>
									<label
										className="
                        absolute left-4 -top-2 z-20
                        text-light-gray text-xs 
                        transition-all
                        2xl:text-xs
                        "
									>
										Telefone
									</label>
									<div
										className="
                          absolute 
                          z-10
                          transition-all
                          duration-300
                          left-3 -top-2 w-16 h-3
                          rounded-full
                          bg-white 
                        "
									/>
								</fieldset>

								<fieldset className="relative w-[50%] my-2 lg:mt-4">
									<input
										type="tel"
										maxLength={16}
										value={whatsapp}
										onChange={(e) => setWhatsapp(phoneMask(e.target.value))}
										className=" 
                        border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
									/>
									<label
										className="
                        absolute left-4 -top-2 z-20
                        text-light-gray text-xs 
                        transition-all
                        2xl:text-xs
                        "
									>
										Whatsapp
									</label>
									<div
										className="
                          absolute 
                          z-10
                          transition-all
                          duration-300
                          left-3 -top-2 w-20 h-3
                          rounded-full
                          bg-white 
                        "
									/>
								</fieldset>
							</div>
							<div className="w-full flex items-center justify-between">
								<fieldset className="relative w-[45%] my-2 lg:mt-4">
									<input
										type="text"
										maxLength={10}
										value={dateStarted}
										onChange={(e) => setDateStarted(dateMask(e.target.value))}
										className=" 
                        border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
									/>
									<label
										className="
                        absolute left-4 -top-2 z-20
                        text-light-gray text-xs 
                        transition-all
                        2xl:text-xs
                        "
									>
										Inicio na Plantus
									</label>
									<div
										className="
                          absolute 
                          z-10
                          transition-all
                          duration-300
                          left-3 -top-2 w-28 h-3
                          rounded-full
                          bg-white 
                        "
									/>
								</fieldset>
								<fieldset className="w-[52%] flex items-start content-center justify-start object-center flex-col lg:justify-around">
									<div className="w-full flex items-center justify-start">
										<input
											type="radio"
											name="registering-pending"
											className="w-5 h-5"
											value={'false'}
											onChange={(e) => {
												setHasRegisterPending(e.target.value);
											}}
										/>
										<label className="text-[0.65rem] ml-2 lg:text-sm">
											Não possui pendência de cadastro
										</label>
									</div>
									<div className="w-full flex items-center justify-start mt-2">
										<input
											type="radio"
											name="registering-pending"
											className="w-5 h-5"
											value={'true'}
											onChange={(e) => {
												setHasRegisterPending(e.target.value);
											}}
										/>
										<label className="text-[0.65rem] ml-2 lg:text-sm">
											Possui pendência de cadastro
										</label>
									</div>
								</fieldset>
							</div>
						</div>
						<div className="w-full h-[9rem] mt-6 rounded-lg bg-base-green text-center p-2">
							<p className="text-xs text-white lg:text-base">
								Mais informações
							</p>
							<textarea
								value={informations}
								onChange={(e) => setInfo(e.target.value)}
								className="text-xs text-white lg:text-base w-full h-3/4 resize-none bg-transparent outline-none"
							/>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
