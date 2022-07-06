import Icons, { IconNames } from '../../../../components/icons';
import { Address as AddressModel } from '../../../../models/address';

type AddressInfoProps = {
	address: AddressModel;
};

export default function AddressInfo({ address }: AddressInfoProps) {
	return (
		<>
			<div className="w-full flex justify-between items-center">
				<fieldset className="relative w-[48%] my-2 lg:mt-4">
					<p
						className=" 
            border-light-green 
            border-2 rounded-xl 
            w-full text-xs text-dark-gray 
            py-1 px-3 outline-base-green
            placeholder-transparent
            lg:py-1
            lg:px-5
            lg:text-base"
					>
						{address.streetName}
					</p>
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
					<p
						className=" 
                    border-light-green 
              border-2 rounded-xl 
              w-full text-xs text-dark-gray 
              py-1 px-3 outline-base-green
              placeholder-transparent
              lg:py-1
              lg:px-5
              lg:text-base"
					>
						{address.addressNumber}
					</p>
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
					<p
						className=" 
                    border-light-green 
              border-2 rounded-xl 
              w-full text-xs text-dark-gray 
              py-1 px-3 outline-base-green
              placeholder-transparent
              lg:py-1
              lg:px-5
              lg:text-base"
					>
						{address.CEP}
					</p>
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
			<div className="w-full flex items-center  justify-between">
				<fieldset className="relative w-[48%] my-2 lg:mt-4">
					<p
						className=" 
                    border-light-green 
              border-2 rounded-xl 
              w-full text-xs text-dark-gray 
              py-1 px-3 outline-base-green
              placeholder-transparent
              lg:py-1
              lg:px-5
              lg:text-base"
					>
						{address.district}
					</p>
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
					<p
						className=" 
                    border-light-green 
              border-2 rounded-xl 
              w-full text-xs text-dark-gray 
              py-1 px-3 outline-base-green
              placeholder-transparent
              lg:py-1
              lg:px-5
              lg:text-base"
					>
						{address.state}
					</p>
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
					<p
						className=" 
                    border-light-green 
              border-2 rounded-xl 
              w-full text-xs text-dark-gray 
              py-1 px-3 outline-base-green
              placeholder-transparent
              lg:py-1
              lg:px-5
              lg:text-base"
					>
						{address.city}
					</p>
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

			<div className="w-full flex items-center">
				<fieldset className="relative w-[69%] my-2 lg:mt-4">
					<p
						className=" 
                    border-light-green 
              border-2 rounded-xl 
              w-full text-xs text-dark-gray 
              py-1 px-3 outline-base-green
              placeholder-transparent
              lg:py-1
              lg:px-5
              lg:text-base"
					>
						{address.complementOrReference}
					</p>
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
					<div className="w-full px-3 flex items-center justify-around flex-row">
						<label
							className="
                text-light-gray text-xs"
						>
							{address.residenceComprovant
								? address.residenceComprovant
								: 'Documento Pendente'}
						</label>
						<Icons name={IconNames.FILE} size="lg" />
					</div>
				</fieldset>
			</div>
		</>
	);
}
