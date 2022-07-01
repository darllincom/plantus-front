import { AxiosError } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/base';
import Icons, { IconNames } from '../../components/icons';
import { UserRepository } from '../../repositories/user-repository';
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

  const navigate = useNavigate()

	useEffect(() => {
		if (image) {
			console.log(window.URL.createObjectURL(image));
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

		const formData = new FormData();

		formData.append('fullName', fullName);
		formData.append('birthDate', birthDate);
		formData.append('cpf', CPF);
		formData.append('phone', phone);
		formData.append('whatsapp', whatsapp);
		formData.append('dateStarted', startedDate);
		formData.append('office', office);
		formData.append('occupation', occupation);
		formData.append('informations', informations);
		formData.append('gender', gender);
		formData.append('hasRegisteringPending', 'true');
		formData.append('imageFile', image!);
		formData.append('email', email);
		formData.append('password', password);

		try {
			const resp = await api.post('/auth/signup', formData, {
				headers: {
					'content-type': 'multipart/form-data'
				}
			});

      alert('Deu certo! Usuário cadastrado com sucesso')
      navigate(`/perfil/${resp.data.id}`)
		} catch (error) {
      if (error instanceof AxiosError) {
				if (error.code === 'Internal Server Error') {
					alert(
						'Algum erro interno aconteceu. Mas fique tranquilo, iremos resolver isso o mais rápido possível'
					);
				}
        alert(`Falha ao cadastrar um usuário. O(s) erro(s) é/foram: ${error.response?.data.message.map((mess: string) => mess )}`)
			}
		}
	}

	return (
		<div className="relative w-full">
			<form onSubmit={handleSubmit}>
				<header className="sticky bg-dark-white/80 backdrop-blur-sm bg-clip-padding py-4 px-3 top-0 z-50 mt-10 xl:mt-16 flex w-full items-center justify-between">
					<div className=" flex items-center">
						{/* <Icons name={IconNames.PERFIL} size="lg" /> */}
						<h1 className="text-dark-green ml-2 text-xl xl:text-2xl">
							Adicionar Usuário
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
									alt="Imagem do usuário"
									loading="lazy"
									className="rounded-full w-20 h-32 border-2 mt-3 border-white bg-white lg:w-32"
								/>
								<div className="absolute top-3 w-32 h-32 rounded-full bg-white/50 flex items-center justify-center content-center flex-col">
									<input
										type="file"
										accept="image/*"
										onChange={(e) => setImage(e.currentTarget.files![0])}
										className="text-xs h-full rounded-full flex flex-col w-full opacity-0 absolute cursor-pointer"
									/>
									<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center content-center flex-col">
										<svg
											width="33"
											height="28"
											viewBox="0 0 33 28"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M32.9975 3.67589V4.31547C32.9746 4.35224 32.9556 4.39133 32.9409 4.43207C32.8942 4.61861 32.8643 4.80846 32.8076 4.99001C32.6661 5.42445 32.4248 5.81974 32.1031 6.14424C32.0481 6.20253 32.0165 6.18921 31.9682 6.14424C31.815 5.97769 31.6584 5.83278 31.5035 5.67621L27.826 1.99869C27.7294 1.90209 27.7277 1.89544 27.826 1.80051C28.0286 1.60781 28.2594 1.44716 28.5105 1.32415C28.8453 1.15383 29.2092 1.04817 29.5831 1.0127C30.0568 0.959706 30.5363 1.0097 30.9888 1.15926C31.4966 1.32889 31.946 1.63901 32.2847 2.05366C32.6378 2.47538 32.8651 2.98788 32.9409 3.53266C32.954 3.58249 32.973 3.63057 32.9975 3.67589Z"
												fill="#2A6905"
											/>
											<path
												d="M12.4196 20.2434C12.4259 19.9156 12.5026 19.593 12.6444 19.2974C12.8776 18.7761 13.1258 18.2598 13.3623 17.7401C13.7134 16.9357 14.1289 16.1609 14.6048 15.4233C15.1962 14.5363 15.874 13.71 16.6284 12.9567C19.8074 9.78993 22.9813 6.61765 26.1503 3.4398C26.2419 3.34819 26.2486 3.34819 26.3418 3.4398C27.7276 4.82664 29.1155 6.21459 30.5057 7.60365C30.5723 7.67027 30.5656 7.71356 30.5057 7.77019L22.7742 15.4983C22.143 16.1295 21.5084 16.7591 20.8789 17.3937C20.1764 18.0951 19.4159 18.7359 18.6054 19.3091C17.9828 19.7536 17.33 20.1543 16.6517 20.5083C16.242 20.7231 15.8439 20.9563 15.4342 21.1745C15.1422 21.3386 14.8389 21.4817 14.5265 21.6025C14.2629 21.72 13.9717 21.7616 13.6858 21.7228C13.3998 21.684 13.1303 21.5662 12.9076 21.3827C12.743 21.244 12.6131 21.0688 12.5284 20.8709C12.4437 20.6731 12.4064 20.4582 12.4196 20.2434Z"
												fill="#78B608"
											/>
											<path
												d="M6.01035 27.5824C5.41242 27.5824 4.81449 27.5824 4.2149 27.5824C3.90677 27.5824 3.59698 27.5824 3.28719 27.5824C3.26042 27.5688 3.2318 27.5593 3.20225 27.5541C3.03569 27.5541 2.86914 27.5541 2.70258 27.5541C2.3878 27.5441 2.07301 27.5291 1.75822 27.5174C1.74823 27.5174 1.73824 27.5291 1.72658 27.5341L1.68494 27.5257L1.4934 27.4425C1.49185 27.444 1.48975 27.4449 1.48757 27.4449C1.48539 27.4449 1.4833 27.444 1.48174 27.4425L1.43344 27.4109C1.43174 27.4121 1.4297 27.4127 1.42761 27.4127C1.42552 27.4127 1.42348 27.4121 1.42178 27.4109L1.3535 27.3592L1.24191 27.2093L1.13198 27.0595L1.11699 27.0295C1.08868 26.9295 1.06036 26.8279 1.03038 26.7279C1.03038 26.7163 1.00873 26.7097 0.99707 26.6997V26.3666C1.01706 26.3394 1.03435 26.3104 1.0487 26.2799C1.06702 26.23 1.07036 26.1751 1.09367 26.1268C1.17559 25.9394 1.31164 25.7807 1.48436 25.6712C1.65708 25.5617 1.85859 25.5063 2.06302 25.5121C2.41944 25.5121 2.77587 25.5221 3.13229 25.5255C4.04168 25.5332 4.95106 25.5399 5.86045 25.5455C7.03965 25.5533 8.21941 25.5599 9.39972 25.5654L16.32 25.5854C17.3027 25.5854 18.2854 25.5988 19.2697 25.6055C20.2091 25.6055 21.1484 25.6221 22.0878 25.6254C23.0871 25.6254 24.0948 25.6254 25.0991 25.6254C25.2382 25.6284 25.3747 25.6643 25.4972 25.7303C25.6475 25.8047 25.7767 25.9159 25.8728 26.0534C25.9688 26.1909 26.0288 26.3504 26.047 26.5171C26.0653 26.6839 26.0413 26.8526 25.9772 27.0076C25.9131 27.1626 25.811 27.299 25.6804 27.4042C25.4932 27.5573 25.2558 27.6357 25.0142 27.6241C24.3713 27.6241 23.7284 27.6074 23.0855 27.6074C21.6487 27.6074 20.2119 27.6074 18.7751 27.6074C18.7434 27.6108 18.7121 27.6176 18.6818 27.6274H16.878H16.0103C15.9806 27.6134 15.9493 27.6033 15.917 27.5974L13.1389 27.5774C11.9497 27.5774 10.7605 27.5608 9.57127 27.5575C8.41428 27.5575 7.25784 27.5575 6.10195 27.5575C6.07053 27.5621 6.03978 27.5704 6.01035 27.5824Z"
												fill="#2A6905"
											/>
										</svg>
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
								placeholder="Ocupação"
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
										Informações Pessoais
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

								<fieldset className="relative w-w-[30%] mt-5">
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
										onChange={(e) => setStartedDate(dateMask(e.target.value))}
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
										Gênero
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
										: 'As senhas são diferentes'}
								</small>
							</div>
							<small className="text-xs text-light-gray">
								A senha deve conter pelo menos: mínimo de 8 caracteres, 1
								caracter maiúsculo, 1 caracter minúsculo e 1 símbolo
							</small>
						</div>
						<div className="w-full mt-5 rounded-lg mb-16 bg-base-green h-[9rem] text-center p-2 text-white shadow">
							<h1>Descrição</h1>
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
	);
}
