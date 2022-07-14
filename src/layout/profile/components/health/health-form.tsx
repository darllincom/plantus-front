import { useState } from 'react';
import Icons, { IconNames } from '../../../../components/icons';
import { Health } from '../../../../models/health';

type HealthProps = {
	health?: Health;
};

export default function HealthForm({ health }: HealthProps) {
  const [ hasAllergy, setAllergy ] = useState(false)
  const [ allergyDescrition, setAllergyDescription ] = useState('')
  const [ usesMedicates, setUsesMedicates ] = useState(false)
  const [ medicatesDescription, setMedicatesDescription ] = useState('')
  const [ bloodType, setBloodType ] = useState('')
  const [ SUSNumber, setSUSNumer ] = useState('')
  const [ SUSCard, setSUSCard ] = useState('')
  const [ vaccineCard, setVaccineCard ] = useState('')

	return (
		<div className="w-full">
			<form className="w-full">
				<div className="w-full flex items-start justify-start flex-row">
					<div className="w-1/2 flex items-center justify-center flex-col mr-12">
						<fieldset className="w-full">
							<label htmlFor="alergia">Possui alguma doença ou alergia?</label>
							<div className="w-full flex">
								<div className="">
									<input
										type="radio"
										name="alergia"
										id="alergia"
										className="mr-1"
									/>
									<label htmlFor="alergia">Sim</label>
								</div>
								<div className="ml-4">
									<input
										type="radio"
										name="alergia"
										id="alergia"
										className="mr-1"
									/>
									<label htmlFor="alergia">Não</label>
								</div>
							</div>
						</fieldset>
						<fieldset className="w-full relative mt-5">
							<div className="w-52 bg-white h-3 absolute -top-1 left-2"></div>
							<label
								htmlFor="alergia-descricao"
								className=" absolute -top-2 left-3 text-xs text-light-gray"
							>
								Descreva a doença ou alergia
							</label>
							<textarea
								className="border-light-green border-2 w-full outline-base-green rounded-lg resize-none p-2"
								name="alergia-descricao"
								id="alergia-descricao"
								rows={5}
							></textarea>
						</fieldset>
					</div>
					<div className="w-1/2 flex align-center flex-col justify-center ml-12">
						<fieldset className="w-full">
							<label htmlFor="medicamento">Utiliza medicamento?</label>
							<div className="w-full flex">
								<div className="">
									<input
										type="radio"
										name="medicamento"
										id="medicamento"
										className="mr-1"
									/>
									<label htmlFor="medicamento">Sim</label>
								</div>
								<div className="ml-4">
									<input
										type="radio"
										name="medicamento"
										id="medicamento"
										className="mr-1"
									/>
									<label htmlFor="medicamento">Não</label>
								</div>
							</div>
						</fieldset>
						<fieldset className="w-full relative mt-5">
							<div className="w-44 bg-white h-3 absolute -top-1 left-2"></div>
							<label
								htmlFor="medicamento-descricao"
								className=" absolute -top-2 left-3 text-xs text-light-gray"
							>
								Descreva o medicamento
							</label>
							<textarea
								className="border-light-green border-2 w-full outline-base-green rounded-lg resize-none p-2"
								name="medicamento-descricao"
								id="medicamento-descricao"
								rows={5}
							></textarea>
						</fieldset>
					</div>
				</div>
				<div className="w-full flex items-start justify-between flex-row mt-5">
					<div className="w-[33%] flex items-center justify-start flex-row">
						<fieldset className="relative">
							<div className="w-28 bg-white h-3 absolute -top-1 left-2"></div>
							<label
								htmlFor="tipo-sangue"
								className="absolute text-xs text-light-gray -top-2 left-3"
							>
								Tipo Sanguineo
							</label>
							<input
								type="text"
								maxLength={2}
								minLength={2}
								id="tipo-sangue"
								name="tipo-sangue"
								className="border-2 border-light-green outline-base-green rounded-lg py-1 px-2"
							/>
						</fieldset>
						<fieldset className="flex items-center justify-start ml-2">
							<label
								htmlFor="tipo-sangue-arquivo"
								className="text-xs mr-2 text-light-gray"
							>
								Exame de sangue:
							</label>
							<Icons name={IconNames.FILE} size="lg" />
						</fieldset>
					</div>
					<div className="w-[33%] flex items-center justify-start flex-row">
						<fieldset className="w-full relative">
							<div className="w-44 bg-white h-3 absolute -top-1 left-2"></div>
							<label
								htmlFor="numero-sus"
								className="absolute text-xs text-light-gray -top-2 left-3"
							>
								Numéro do cartão do SUS:
							</label>
							<input
								type="text"
								name="numero-sus"
								id="numero-sus"
								className="w-full border-2 border-light-green rounded-lg py-1 px-2 outline-base-green"
							/>
						</fieldset>
					</div>
					<div className="w-[33%] flex items-center justify-around flex-row">
						<fieldset className="flex items-center justify-start ml-2">
							<label
								htmlFor="cartao-sus-arquivo"
								className="text-xs mr-2 text-light-gray"
							>
								Cartão do SUS:
							</label>
							<Icons name={IconNames.FILE} size="lg" />
						</fieldset>
						<fieldset className="flex items-center justify-start ml-2">
							<label
								htmlFor="cartao-vacina-arquivo"
								className="text-xs mr-2 text-light-gray"
							>
								Cartão de Vacina:
							</label>
							<Icons name={IconNames.FILE} size="lg" />
						</fieldset>
					</div>
				</div>
				<div className="w-full flex items-center justify-between mt-5">
					<div className="w-[33%] flex items-center justify-around flex-row">
						<fieldset className="relative w-full">
							<div className="w-44 bg-white h-3 absolute -top-1 left-2"></div>
							<label
								htmlFor="contato-emergencia-1"
								className="absolute -top-2 left-3 text-xs text-light-gray"
							>
								Contato de emergência 1:
							</label>
							<input
								type="text"
								name="contato-emergencia-1"
								id="contato-emergencia-1"
								className="w-full border-2 border-light-green rounded-lg py-1 px-2 outline-base-green"
							/>
						</fieldset>
					</div>
					<div className="w-[33%] flex items-center justify-around flex-row">
						<fieldset className="relative w-full">
							<div className="w-32 bg-white h-3 absolute -top-1 left-2"></div>
							<label
								htmlFor="nome-emergencia-1"
								className="absolute -top-2 left-3 text-xs text-light-gray"
							>
								Nome do contato:
							</label>
							<input
								type="text"
								name="nome-emergencia-1"
								id="nome-emergencia-1"
								className="w-full border-2 border-light-green rounded-lg py-1 px-2 outline-base-green"
							/>
						</fieldset>
					</div>
					<div className="w-[33%] flex items-center justify-around flex-row">
						<fieldset className="relative w-full">
							<div className="w-36 bg-white h-3 absolute -top-1 left-2"></div>
							<label
								htmlFor="grau-parentesco-emergencia-1"
								className="absolute -top-2 left-3 text-xs text-light-gray"
							>
								Grau de parentesco:
							</label>
							<input
								type="text"
								name="grau-parentesco-emergencia-1"
								id="grau-parentesco-emergencia-1"
								className="w-full border-2 border-light-green rounded-lg py-1 px-2 outline-base-green"
							/>
						</fieldset>
					</div>
				</div>
        <div className="w-full flex items-center justify-between mt-5">
					<div className="w-[33%] flex items-center justify-around flex-row">
						<fieldset className="relative w-full">
							<div className="w-44 bg-white h-3 absolute -top-1 left-2"></div>
							<label
								htmlFor="contato-emergencia-2"
								className="absolute -top-2 left-3 text-xs text-light-gray"
							>
								Contato de emergência 2:
							</label>
							<input
								type="text"
								name="contato-emergencia-2"
								id="contato-emergencia-2"
								className="w-full border-2 border-light-green rounded-lg py-1 px-2 outline-base-green"
							/>
						</fieldset>
					</div>
					<div className="w-[33%] flex items-center justify-around flex-row">
						<fieldset className="relative w-full">
							<div className="w-32 bg-white h-3 absolute -top-1 left-2"></div>
							<label
								htmlFor="nome-emergencia-1"
								className="absolute -top-2 left-3 text-xs text-light-gray"
							>
								Nome do contato:
							</label>
							<input
								type="text"
								name="nome-emergencia-2"
								id="nome-emergencia-2"
								className="w-full border-2 border-light-green rounded-lg py-1 px-2 outline-base-green"
							/>
						</fieldset>
					</div>
					<div className="w-[33%] flex items-center justify-around flex-row">
						<fieldset className="relative w-full">
							<div className="w-36 bg-white h-3 absolute -top-1 left-2"></div>
							<label
								htmlFor="grau-parentesco-emergencia-2"
								className="absolute -top-2 left-3 text-xs text-light-gray"
							>
								Grau de parentesco:
							</label>
							<input
								type="text"
								name="grau-parentesco-emergencia-2"
								id="grau-parentesco-emergencia-2"
								className="w-full border-2 border-light-green rounded-lg py-1 px-2 outline-base-green"
							/>
						</fieldset>
					</div>
				</div>
			</form>
		</div>
	);
}
