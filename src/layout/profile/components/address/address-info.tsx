import { Address as AddressModel } from '../../../../models/address';

type AddressInfoProps = {
	address: AddressModel;
};

export default function AddressInfo({ address }: AddressInfoProps) {
	return (
		<>
			<div className="w-full flex justify-between items-center">
				<fieldset className="relative w-[48%] my-2 2xl:mt-8">
					<p
						className=" 
                    border-light-green 
                    border-2 rounded-xl 
                    w-full text-xs text-dark-gray 
                    py-1 px-3 outline-base-green
                    placeholder-transparent
                    peer
                    2xl:py-3
                    2xl:px-5
                    2xl:text-sm"
					>
						{address?.streetName}
					</p>
					<label
						className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-2xll
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

				<fieldset className="relative w-[20%] my-2 2xl:mt-8">
					<p
						className=" 
                    border-light-green 
                    border-2 rounded-xl 
                    w-full text-xs text-dark-gray 
                    py-1 px-3 outline-base-green
                    placeholder-transparent
                    peer
                    2xl:py-3
                    2xl:px-5
                    2xl:text-sm"
					>
						{address.addressNumber}
					</p>
					<label
						className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-2xll
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

				<fieldset className="relative w-[30%] my-2 2xl:mt-8">
					<p
						className=" 
                    border-light-green 
                    border-2 rounded-xl 
                    w-full text-xs text-dark-gray 
                    py-1 px-3 outline-base-green
                    placeholder-transparent
                    peer
                    2xl:py-3
                    2xl:px-5
                    2xl:text-sm"
					>
						{address.CEP}
					</p>
					<label
						className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-2xll
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
                      left-3 -top-2 w-24 h-3
                      rounded-full
                      bg-white 
                    "
					/>
				</fieldset>
			</div>
			<div className="w-full flex items-center">
				<fieldset className="relative w-[48%] my-2 2xl:mt-8">
					<p
						className=" 
                    border-light-green 
                    border-2 rounded-xl 
                    w-full text-xs text-dark-gray 
                    py-1 px-3 outline-base-green
                    placeholder-transparent
                    peer
                    2xl:py-3
                    2xl:px-5
                    2xl:text-sm"
					>
						{address.district}
					</p>
					<label
						className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-2xll
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
                      left-3 -top-2 w-24 h-3
                      rounded-full
                      bg-white 
                    "
					/>
				</fieldset>

				<fieldset className="relative w-[48%] my-2 2xl:mt-8">
					<p
						className=" 
                    border-light-green 
                    border-2 rounded-xl 
                    w-full text-xs text-dark-gray 
                    py-1 px-3 outline-base-green
                    placeholder-transparent
                    peer
                    2xl:py-3
                    2xl:px-5
                    2xl:text-sm"
					>
						{address.state}
					</p>
					<label
						className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-2xll
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
                      left-3 -top-2 w-24 h-3
                      rounded-full
                      bg-white 
                    "
					/>
				</fieldset>

				<fieldset className="relative w-[48%] my-2 2xl:mt-8">
					<p
						className=" 
                    border-light-green 
                    border-2 rounded-xl 
                    w-full text-xs text-dark-gray 
                    py-1 px-3 outline-base-green
                    placeholder-transparent
                    peer
                    2xl:py-3
                    2xl:px-5
                    2xl:text-sm"
					>
						{address.city}
					</p>
					<label
						className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-2xll
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
                      left-3 -top-2 w-24 h-3
                      rounded-full
                      bg-white 
                    "
					/>
				</fieldset>
			</div>

			<div className="w-full flex items-center">
				<fieldset className="relative w-[48%] my-2 2xl:mt-8">
					<p
						className=" 
                    border-light-green 
                    border-2 rounded-xl 
                    w-full text-xs text-dark-gray 
                    py-1 px-3 outline-base-green
                    placeholder-transparent
                    peer
                    2xl:py-3
                    2xl:px-5
                    2xl:text-sm"
					>
						{address.complementOrReference}
					</p>
					<label
						className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-2xll
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
                      left-3 -top-2 w-24 h-3
                      rounded-full
                      bg-white 
                    "
					/>
				</fieldset>

				<fieldset className="relative w-[48%] my-2 2xl:mt-8">
					<p
						className=" 
                    border-light-green 
                    border-2 rounded-xl 
                    w-full text-xs text-dark-gray 
                    py-1 px-3 outline-base-green
                    placeholder-transparent
                    peer
                    2xl:py-3
                    2xl:px-5
                    2xl:text-sm"
					>
						aa
					</p>
					<label
						className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-2xll
                    "
					>
						Comprovante de residência
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
			</div>
		</>
	);
}
