import { Address as AddressModel } from '../../../../models/address';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserRepository } from '../../../../repositories/user-repository';
import Icons, { IconNames } from '../../../../components/icons';
import maskedCep from '../../../../utils/cepMask';
import UploadService from '../../../../services/upload-service';
import { AxiosError } from 'axios';
import { ProfileContext } from '../../../../context/profile-provider';

type AddressFormProps = {
	address?: AddressModel;
};

export default function AddressForm({ address }: AddressFormProps) {
	const [streetName, setStreetName] = useState('');
	const [addressNumber, setAddressNumber] = useState('');
	const [CEP, setCEP] = useState('');
	const [district, setDistrict] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [complementOrReference, setComplementOrReference] = useState('');

	const [comprovantText, setComprovantText] = useState(
		'Comprovante de ResidĂȘncia *'
	);
	const [comprovant, setComprovant] = useState<File>();

	const [hasError, setError] = useState(false);
	const [errors, setErrors] = useState(['']);

	const { handleEdition } = useContext(ProfileContext);

	const { id } = useParams();
	const navigate = useNavigate();

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if (address) {
			let comprovantUrl = '';

			try {
				if (comprovant) {
					const response = await UploadService.uploadImage(
						'plantus',
						'docs',
						comprovant!
					);

					comprovantUrl = response.Location;
				} else {
					comprovantUrl = comprovantText;
				}

				await UserRepository.updateAddress(id!, {
					streetName,
					addressNumber,
					CEP,
					district,
					state,
					city,
					complementOrReference,
					residenceComprovant: comprovantUrl
				});

				handleEdition!();
				navigate('/sucesso');
			} catch (error) {
				if (error instanceof AxiosError) {
					if (error.response?.data.message === 'Internal server error') {
						alert(
							'Algum erro interno aconteceu. Mas fique tranquilo, iremos resolver isso o mais rĂĄpido possĂ­vel'
						);
					} else {
						if (error.response?.status === 409) {
							setError(true);
							setErrors([error.response?.data.message]);
						}

						setError(true);
						setErrors(error.response?.data.message.map((mess: string) => mess));
					}
				}
			}
		} else {
			try {
				let comprovantUrl = '';

				if (comprovant) {
					const response = await UploadService.uploadImage(
						'plantus',
						'docs',
						comprovant!
					);

					comprovantUrl = response.Location;
				}

				await UserRepository.createAddress(id!, {
					streetName,
					addressNumber,
					CEP,
					district,
					state,
					city,
					complementOrReference,
					residenceComprovant: comprovantUrl
				});

				handleEdition!();
				navigate('/sucesso');
			} catch (error) {
				if (error instanceof AxiosError) {
					if (error.response?.data.message === 'Internal server error') {
						alert(
							'Algum erro interno aconteceu. Mas fique tranquilo, iremos resolver isso o mais rĂĄpido possĂ­vel'
						);
					} else {
						if (error.response?.status === 409) {
							setError(true);
							setErrors([error.response?.data.message]);
						}

						setError(true);
						setErrors(error.response?.data.message.map((mess: string) => mess));
					}
				}
			}
		}
	}

	useEffect(() => {
		if (address) {
			setStreetName(address!.streetName);
			setAddressNumber(address!.addressNumber);
			setCEP(address!.CEP);
			setDistrict(address!.district);
			setState(address!.state);
			setCity(address!.city);
			setComplementOrReference(address!.complementOrReference);
			setComprovantText(address!.residenceComprovant!);
		}
	}, [address]);

	return (
		<div className="w-full relative">
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
				<div className="w-full flex justify-between items-center">
					<fieldset className="relative w-[48%] my-2 lg:mt-4">
						<input
							autoFocus
							type="text"
							value={streetName}
							onChange={(e) => setStreetName(e.target.value)}
							className=" 
              border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base
                      "
						/>
						<label
							className="
              absolute left-4 -top-2 z-20
              text-light-gray text-xs 
              transition-all
              lg:text-xs
            "
						>
							Nome da Rua
						</label>
						<div
							className="
              absolute 
              z-10
              transition-all
              duration-300
              left-3 -top-2 w-24 h-3
              rounded-full
              bg-white 
                    "
						/>
					</fieldset>

					<fieldset className="relative w-[20%] my-2 lg:mt-4">
						<input
							type="text"
							value={addressNumber}
							onChange={(e) => setAddressNumber(e.target.value)}
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
              lg:text-xs
                    "
						>
							NĂșmero
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

					<fieldset className="relative w-[30%] my-2 lg:mt-4">
						<input
							type="text"
							value={CEP}
							onChange={(e) => setCEP(maskedCep(e.target.value))}
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
              lg:text-xs
                    "
						>
							CEP
						</label>
						<div
							className="
                      absolute 
                      z-10
                      transition-all
                      duration-300
                      left-3 -top-2 w-10 h-3
                      rounded-full
                      bg-white 
                    "
						/>
					</fieldset>
				</div>
				<div className="w-full flex items-center justify-between">
					<fieldset className="relative w-[48%] my-2 lg:mt-4">
						<input
							type="text"
							value={district}
							onChange={(e) => setDistrict(e.target.value)}
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
              lg:text-xs
                    "
						>
							Nome do Bairro
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

					<fieldset className="relative w-[20%] my-2 lg:mt-4">
						<input
							type="text"
							maxLength={2}
							minLength={2}
							value={state}
							onChange={(e) => setState(e.target.value.toUpperCase())}
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
              lg:text-xs
                    "
						>
							Estado
						</label>
						<div
							className="
                      absolute 
                      z-10
                      transition-all
                      duration-300
                      left-3 -top-2 w-14 h-3
                      rounded-full
                      bg-white 
                    "
						/>
					</fieldset>

					<fieldset className="relative w-[30%] my-2 lg:mt-4">
						<input
							type="text"
							value={city}
							onChange={(e) => setCity(e.target.value)}
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
              lg:text-xs
                    "
						>
							MunicĂ­pio
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
					<fieldset className="relative w-[69%] my-2 lg:mt-4">
						<input
							type="text"
							value={complementOrReference}
							onChange={(e) => setComplementOrReference(e.target.value)}
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
              lg:text-xs
                    "
						>
							Complemento / Ponto de referĂȘncia
						</label>
						<div
							className="
                      absolute 
                      z-10
                      transition-all
                      duration-300
                      left-3 -top-2 w-60 h-3
                      rounded-full
                      bg-white 
                    "
						/>
					</fieldset>

					<fieldset className="relative w-[30%] my-2 lg:mt-4">
						<input
							type="file"
							className="absolute opacity-0 z-10"
							onChange={(e) => setComprovant(e.currentTarget.files![0])}
						/>
						<div className="px-3 w-full flex content-center items-center justify-around flex-row">
							<p
								className="
                text-light-gray text-xs text-ellipsis"
							>
								{comprovant?.name ? comprovant?.name : comprovantText}
							</p>
							<Icons name={IconNames.FILE} size="lg" />
						</div>
					</fieldset>
				</div>
				<div className="w-full mt-5 flex align-end justify-end">
					<button
						type="submit"
						className="px-6 py-1 rounded-lg bg-base-green text-white transition-all duration-300 hover:brightness-95"
					>
						Salvar
					</button>
				</div>
			</form>
		</div>
	);
}
