import { Address as AddressModel } from '../../../../models/address';
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserRepository } from '../../../../repositories/user-repository';
import Icons, { IconNames } from '../../../../components/icons';
import maskedCep from '../../../../utils/cepMask';

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
		'Comprovante de Residência'
	);
	const [comprovant, setComprovant] = useState<File>();

	const { id } = useParams();

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if (address) {
			try {
				await UserRepository.updateAddress(
					id!,
					{
						streetName,
						addressNumber,
						CEP,
						district,
						state,
						city,
						complementOrReference
					},
					comprovant || comprovantText
				);
			} catch (error) {
			}
		} else {
			await UserRepository.createAddress(
				id!,
				{
					streetName,
					addressNumber,
					CEP,
					district,
					state,
					city,
					complementOrReference
				},
				comprovant!
			);
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
		<div className="w-full">
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
							Número
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
							Município
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
							Complemento / Ponto de referência
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
