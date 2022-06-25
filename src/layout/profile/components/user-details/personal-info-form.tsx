import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Icons, { IconNames } from '../../../../components/icons';
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
	const [hasRegisteringPending, setHasRegisterPending] = useState(true);
	const [informations, setInfo] = useState('');

	const [birthDate, setBirthDate] = useState('');

	const { id } = useParams();

	useEffect(() => {
		setFullName(user.fullName);
		setEmail(user.credentials.email);
		setPhone(user.phone);
		setWhatsapp(user.whatsapp);
		setInfo(user.informations);
		setHasRegisterPending(user.hasRegisteringPending);

		setDateStarted(user.dateStarted.split('/').reverse().join('/'));
		setBirthDate(dateMask(user.birthDate.split('/').reverse().join('/')));
	}, [user]);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		const formatedBDay = birthDate.split('/').reverse().join('/');
		const formatedStarted = dateStarted.split('/').reverse().join('/');

		const res = await UserRepository.updatePersonalInfo(id!, {
			fullName,
			birthDate: formatedBDay,
			credentials: {
				email
			},
			phone,
			whatsapp,
			dateStarted: formatedStarted,
			informations,
			hasRegisteringPending
		});

		if (res.status === 200) {
			document.location.reload();
		}
	}

	return (
		<>
			<div className="h-full w-[22rem] lg:w-[70%] ">
				<form
					onSubmit={handleSubmit}
					className="h-full w-full flex flex-col items-center justify-between"
				>
					<div className="w-full h-[70%] p-3 rounded-2xl bg-white shadow-sm">
						<div className="w-full flex items-center">
							<div className="w-full flex items-center">
								<Icons name={IconNames.PERFIL} size="sm" bg />
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
							<fieldset className="relative w-full my-2 lg:mt-4 lg:w-[48%] lg:mr-4">
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
							<fieldset className="relative w-full my-2 lg:mt-4">
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
							<fieldset className="relative w-[48%] my-2 lg:mt-4 lg:w-[49%]">
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

							<fieldset className="relative w-[48%] my-2 lg:mt-4 lg:w-[49%]">
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
							<fieldset className="w-[52%] flex items-center content-center justify-between object-center flex-row lg:justify-around">
								<input
									type="checkbox"
									className="w-5 h-5"
									value={hasRegisteringPending as unknown as string}
									onChange={(e) => setHasRegisterPending(e.target.checked)}
								/>
								<p className="text-[0.65rem] lg:text-base">
									Não possui pendência de cadastro
								</p>
							</fieldset>
						</div>
					</div>
					<div className="w-full h-[30%] mt-6 rounded-2xl bg-base-green text-center p-2">
						<p className="text-xs text-white lg:text-base">Mais informações</p>
						<textarea
							value={informations}
							onChange={(e) => setInfo(e.target.value)}
							className="text-xs text-white lg:text-base w-full h-3/4 resize-none bg-transparent outline-none"
						/>
					</div>
				</form>
			</div>
		</>
	);
}
