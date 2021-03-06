import { AxiosError } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons, { IconNames } from '../../components/icons';
import { UserRepository } from '../../repositories/user-repository';
import UploadService from '../../services/upload-service';
import cpfMask from '../../utils/cpfMask';
import dateMask from '../../utils/dateMask';
import phoneMask from '../../utils/phoneMask';

export default function CreateUser() {
	const [fullName, setFullname] = useState('');
	const [CPF, setCPF] = useState('');
	const [birthDate, setBirthdate] = useState('');
	const [office, setOffice] = useState('');
	const [occupation, setOccupation] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [phone, setPhone] = useState('');
	const [startedDate, setStartedDate] = useState('');
	const [gender, setGender] = useState('');
	const [password, setPassword] = useState('');
	const [informations, setInformations] = useState('');
	const [image, setImage] = useState<File>();

	const [confirmedPassword, setConfirmedPassword] = useState('');
	const [imagePreview, setImagePreview] = useState(
		'http://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile.png'
	);

	const [offices, setOffices] = useState(['']);

	const [successfullySubmitted, setSuccessfullSubmitted] = useState(false);

	const [hasError, setError] = useState(false);
	const [errors, setErrors] = useState(['']);

	const navigate = useNavigate();

	useEffect(() => {
		if (image) {
			setImagePreview(window.URL.createObjectURL(image));
		}
	}, [image]);

	useEffect(() => {
		async function handleFetchOffices() {
			const res = await UserRepository.fetchOffices();

			setOffices(res.data);
		}

		handleFetchOffices();
	}, []);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		try {
			const response = await UploadService.uploadImage(
				'plantus',
				'user-images',
				image!
			);

			const resp = await UserRepository.createUser(
				{
					fullName,
					birthDate,
					cpf: CPF,
					phone,
					whatsapp,
					dateStarted: startedDate,
					office,
					occupation,
					informations,
					gender,
					hasRegisteringPending: 'true',
					image: response.Location
				},
				email,
				password
			);
      
			navigate('/sucesso');
		} catch (error) {
			if (error instanceof AxiosError) {
				if (error.code === 'Internal Server Error') {
					alert(
						'Algum erro interno aconteceu. Mas fique tranquilo, iremos resolver isso o mais r??pido poss??vel'
					);
				}

				if (error.response?.status === 409) {
					setError(true);
					setErrors([error.response?.data.message]);
				}

				setError(true);
				setErrors(error.response?.data.message.map((mess: string) => mess));
			}
		}
	}

	return (
		<div className="w-full h-full">
			{successfullySubmitted ? (
				<div className="w-full h-full flex items-center justify-center ">
					<div className="w-[70%] flex items-center justify-center rounded-lg bg-white shadow py-9">
						<Icons name={IconNames.V} size="lg" />
						<h1 className="text-2xl ml-5 text-base-green">Deu certo!</h1>
					</div>
				</div>
			) : (
				<div className="relative">
					<div
						className={`absolute w-2/4 shadow-lg bg-white p-4 z-50 rounded-lg top-[25%] left-[25%] flex items-center flex-col justify-center ${
							hasError ? 'block' : 'hidden'
						}`}
					>
						<h1 className="text-center text-lg text-red-600 font-semibold">
							Oops... Alguma coisa deu errado...
						</h1>
						<div className="w-full my-3">
							<p>O erros foram: {errors.map((err) => `${err}, `)}</p>
						</div>
						<button
							type={'button'}
							onClick={() => setError(false)}
							className="bg-light-green py-2 px-6 rounded-lg text-base font-semibold"
						>
							Entendi
						</button>
					</div>
					<form onSubmit={handleSubmit}>
						<header className="sticky bg-dark-white/80 backdrop-blur-sm bg-clip-padding py-4 px-3 top-0 z-50 mt-10 xl:mt-16 flex w-full items-center justify-between">
							<div className=" flex items-center">
								<Icons name={IconNames.PERFIL} selected size="lg" />
								<h1 className="text-dark-green ml-2 text-xl xl:text-2xl">
									Adicionar Usu??rio
								</h1>
							</div>
							<button className="px-2 py-1 rounded-md bg-light-green text-xs text-dark-green lg:text-lg lg:px-4">
								Salvar
							</button>
						</header>
						<div className="w-full flex items-start justify-start">
							<div className="w-[30%] mr-5 flex items-center content-start justify-start flex-col">
								<div className="w-full h-[22rem] bg-dark-green rounded-lg p-5 text-white flex items-center content-start justify-start flex-col shadow">
									<div className="relative">
										<img
											src={imagePreview}
											alt="Imagem do usu??rio"
											loading="lazy"
											className="rounded-full h-32 border-2 mt-3 border-white bg-white lg:w-32"
										/>
										<div className="absolute top-3 w-32 h-32 rounded-full bg-white/50 flex items-center justify-center content-center flex-col">
											<input
												type="file"
												accept="image/*"
												onChange={(e) => setImage(e.currentTarget.files![0])}
												className="text-xs h-full rounded-full flex flex-col w-full opacity-0 absolute cursor-pointer"
											/>
											<div className="w-16 h-16 rounded-full flex items-center justify-center content-center flex-col">
												<Icons name={IconNames.EDIT} bg size="lg" />
											</div>
										</div>
									</div>
									<h1 className="mt-4 text-center">{fullName}</h1>
									<select
										defaultValue="DEFAULT"
										onChange={(e) => setOffice(e.target.value)}
										className="w-full py-1 px-10 my-5 border-white border-2 rounded-full text-xs bg-transparent outline-none lg:text-lg lg:text-center"
									>
										<option value="DEFAULT" disabled>
											Selecione um Cargo
										</option>
										{offices.map((off, index) => (
											<option
												className="text-center text-dark-green"
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
										placeholder="Ocupa????o"
										className="py-1 bg-transparent outline-none border-white border-2 text-white rounded-full w-full lg:text-center"
									/>
								</div>
							</div>
							<div className="w-[70%] flex flex-col">
								<div className="w-full bg-white p-5 rounded-lg shadow-sm">
									<div className="w-full flex items-center">
										<div className="w-full flex items-center">
											<Icons name={IconNames.PERFIL} size="sm" bg />
											<p className="text-xs text-dark-green font-semibold lg:text-lg lg:ml-5">
												Informa????es Pessoais
											</p>
										</div>
									</div>
									<div className="w-full flex items-center justify-between">
										<fieldset className="relative w-[70%] mt-5 mr-3">
											<div className="w-32 bg-white h-5 absolute -top-3 left-2"></div>
											<label
												htmlFor="nome-completo"
												className="absolute -top-3 left-3 text-light-gray text-xs"
											>
												Nome completo:
											</label>
											<input
												value={fullName}
												onChange={(e) => setFullname(e.target.value)}
												type="text"
												name="nome-completo"
												id="nome-completo"
												className="border-light-green border-2 rounded-xl w-full text-base px-5 py-1 outline-base-green"
											/>
										</fieldset>

										<fieldset className="relative w-[30%] mt-5">
											<div className="w-10 bg-white h-5 absolute -top-3 left-2"></div>
											<label
												htmlFor="cpf"
												className="absolute -top-3 left-3 text-light-gray text-xs"
											>
												CPF
											</label>
											<input
												value={CPF}
												onChange={(e) => setCPF(cpfMask(e.target.value))}
												type="text"
												name="cpf"
												id="cpf"
												className="border-light-green border-2 rounded-xl w-full text-base px-5 py-1 outline-base-green"
											/>
										</fieldset>
									</div>

									<div className="w-full flex items-center content-center justify-center">
										<fieldset className="relative w-[30%] mt-5 mr-3">
											<div className="w-36 bg-white h-5 absolute -top-3 left-2"></div>
											<label
												htmlFor="data-nascimento"
												className="absolute -top-3 left-3 text-light-gray text-xs"
											>
												Data Nascimento
											</label>
											<input
												value={birthDate}
												onChange={(e) => setBirthdate(dateMask(e.target.value))}
												type="text"
												name="data-nascimento"
												id="data-nascimento"
												className="border-light-green border-2 rounded-xl w-full text-base px-5 py-1 outline-base-green"
											/>
										</fieldset>

										<fieldset className="relative w-[70%] mt-5">
											<div className="w-14 bg-white h-5 absolute -top-3 left-2"></div>
											<label
												htmlFor="email"
												className="absolute -top-3 left-3 text-light-gray text-xs"
											>
												Email
											</label>
											<input
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												type="email"
												name="email"
												id="email"
												className="border-light-green border-2 rounded-xl w-full text-base px-5 py-1 outline-base-green"
											/>
										</fieldset>
									</div>

									<div className="w-full flex items-center content-center justify-center">
										<fieldset className="relative w-[50%] mt-5 mr-3">
											<div className="w-24 bg-white h-5 absolute -top-3 left-2"></div>
											<label
												htmlFor="whatsapp"
												className="absolute -top-3 left-3 text-light-gray text-xs"
											>
												Whatsapp
											</label>
											<input
												type={'tel'}
												value={whatsapp}
												onChange={(e) => setWhatsapp(phoneMask(e.target.value))}
												name="whatsapp"
												id="whatsapp"
												className="border-light-green border-2 rounded-xl w-full text-base px-5 py-1 outline-base-green"
											/>
										</fieldset>

										<fieldset className="relative w-[50%] mt-5">
											<div className="w-20 bg-white h-5 absolute -top-3 left-2"></div>
											<label
												htmlFor="telefone"
												className="absolute -top-3 left-3 text-light-gray text-xs"
											>
												Telefone
											</label>
											<input
												type={'tel'}
												value={phone}
												onChange={(e) => setPhone(phoneMask(e.target.value))}
												name="telefone"
												id="telefone"
												className="border-light-green border-2 rounded-xl w-full text-base px-5 py-1 outline-base-green"
											/>
										</fieldset>
									</div>

									<div className="w-full flex items-center content-center justify-center">
										<fieldset className="relative w-[50%] mt-5 mr-3">
											<div className="w-32 bg-white h-5 absolute -top-3 left-2"></div>
											<label
												htmlFor="inicio-na-plantus"
												className="absolute -top-3 left-3 text-light-gray text-xs"
											>
												Inicio na Plantus
											</label>
											<input
												type={'text'}
												value={startedDate}
												onChange={(e) =>
													setStartedDate(dateMask(e.target.value))
												}
												name="inicio-na-plantus"
												id="inicio-na-plantus"
												className="border-light-green border-2 rounded-xl w-full text-base px-5 py-1 outline-base-green"
											/>
										</fieldset>

										<fieldset className="relative w-[50%] mt-5">
											<div className="w-16 bg-white h-5 absolute -top-3 left-2"></div>
											<label
												htmlFor="genero"
												className="absolute -top-3 left-3 text-light-gray text-xs"
											>
												G??nero
											</label>
											<input
												type={'text'}
												value={gender}
												onChange={(e) => setGender(e.target.value)}
												name="genero"
												id="genero"
												className="border-light-green border-2 rounded-xl w-full text-base px-5 py-1 outline-base-green"
											/>
										</fieldset>
									</div>

									<div className="w-full flex items-start justify-center flex-col">
										<div className="w-full flex items-center justify-between">
											<fieldset className="relative w-[50%] mt-5 mr-3">
												<div className="w-16 bg-white h-5 absolute -top-3 left-2"></div>
												<label
													htmlFor="senha"
													className="absolute -top-3 left-3 text-light-gray text-xs"
												>
													Senha
												</label>
												<input
													type="password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													name="senha"
													id="senha"
													className="border-light-green border-2 rounded-xl w-full text-base px-5 py-1 outline-base-green"
												/>
											</fieldset>
											<fieldset className="relative w-[50%] mt-5">
												<div className="w-32 bg-white h-5 absolute -top-3 left-2"></div>
												<label
													htmlFor="confirme-senha"
													className="absolute -top-3 left-3 text-light-gray text-xs"
												>
													Confirme Senha
												</label>
												<input
													type="password"
													value={confirmedPassword}
													onChange={(e) => setConfirmedPassword(e.target.value)}
													name="confirme-senha"
													id="confirme-senha"
													className="border-light-green border-2 rounded-xl w-full text-base px-5 py-1 outline-base-green"
												/>
											</fieldset>
										</div>
										<small>
											{confirmedPassword.length === password.length
												? ''
												: 'As senhas s??o diferentes'}
										</small>
									</div>
									<small className="text-xs text-light-gray">
										A senha deve conter pelo menos: m??nimo de 8 caracteres, 1
										caracter mai??sculo, 1 caracter min??sculo e 1 s??mbolo
									</small>
								</div>
								<div className="w-full mt-5 rounded-lg mb-16 bg-base-green h-[9rem] text-center p-2 text-white shadow">
									<h1>Descri????o</h1>
									<textarea
										value={informations}
										onChange={(e) => setInformations(e.target.value)}
										className="w-full h-[75%] border-none resize-none bg-transparent outline-none"
									></textarea>
								</div>
							</div>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}
