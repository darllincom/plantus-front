import Icons, { IconNames } from '../../components/icons';
import Header from './components/header';

export default function CreateUser() {
	return (
		<div className="relative w-full">
			<Header />
			<div className="w-full flex items-start justify-start">
				<div className="w-[30%]">card</div>
				<div className="w-[70%] bg-white p-5 rounded-lg shadow-sm">
					<form>
						<div className="w-full flex items-center">
							<div className="w-full flex items-center">
								<Icons name={IconNames.PERFIL} size="sm" bg />
								<p className="text-xs text-dark-green font-semibold lg:text-lg lg:ml-5">
									Informações Pessoais
								</p>
							</div>
						</div>
						<fieldset className="relative w-full mt-5">
              <div className="w-32 bg-white h-5 absolute -top-3 left-2"></div>
							<label htmlFor="nomeCompleto" className="absolute -top-3 left-3 text-light-gray text-sm">
								Nome completo:
							</label>
							<input
								type="text"
								name="nomeCompleto"
								id="nomeCompleto"
								className="border-light-green border-2 rounded-xl text-base px-5 py-1 outline-base-green"
							/>
						</fieldset>

						<button
							type="submit"
							className="px-6 py-1 rounded-lg bg-base-green text-white transition-all duration-300 hover:brightness-95"
						>
							Salvar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
