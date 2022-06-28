import { FormEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../../../context/auth-provider';
import cpfMask from '../../../../utils/cpfMask';

export default function LoginForm() {
	const [cpf, setCPF] = useState('');
	const [password, setPassword] = useState('');

	const { error, handleLogin } = useContext(LoginContext);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		handleLogin!(cpf, password);
	}

	return (
		<form className="mt-5" onSubmit={handleSubmit}>
			<fieldset className="relative w-full my-4 xl:mt-4">
				<input
					type="text"
					id="cpf-login"
					name="cpf-login"
					placeholder="CPF:"
					value={cpf}
					required
					onChange={(e) => setCPF(cpfMask(e.target.value))}
					className="
            border-light-green 
            border-2 rounded-xl 
            w-full text-lg text-dark-gray 
            py-2 px-3 outline-base-green
            placeholder-transparent
            peer
            lg:py-2
            lg:px-3
            lg:text-2xl
          "
				/>
				<label
					htmlFor="cpf-login"
					className="
          absolute left-4 -top-3 z-20
          text-light-gray text-base 
          transition-all
          duration-300
          peer-placeholder-shown:text-lg
          peer-placeholder-shown:top-3
          peer-placeholder-shown:left-5
          peer-focus:-top-2
          peer-focus:left-4
          peer-focus:text-base
          peer-focus:text-light-gray
          lg:peer-placeholder-shown:top-3
          lg:peer-placeholder-shown:text-2xl
          lg:peer-focus:-top-3
          lg:text-lg
          lg:peer-focus:text-lg
        "
				>
					CPF:
				</label>
				<div
					className="
          absolute 
          z-10
          transition-all
          duration-300
          left-3 -top-2 w-14 h-5
          rounded-full
          bg-white 
          peer-placeholder-shown:text-2xl
          peer-placeholder-shown:top-4
          peer-placeholder-shown:left-4
          peer-focus:-top-2
          peer-focus:left-3
          peer-focus:block
        "
				/>
			</fieldset>
			<fieldset className="relative w-full my-5">
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					required
					onChange={(e) => setPassword(e.target.value)}
					placeholder="SENHA:"
					className="
            border-light-green 
            border-2 rounded-xl 
            w-full text-lg text-dark-gray 
            py-2 px-3 outline-base-green
            placeholder-transparent
            peer
            lg:py-2
            lg:px-5
            lg:text-2xl
          "
				/>
				<label
					htmlFor="password"
					className="
          absolute left-4 -top-3 z-20
          text-light-gray text-base 
          transition-all
          duration-300
          peer-placeholder-shown:text-lg
          peer-placeholder-shown:top-3
          peer-placeholder-shown:left-5
          peer-focus:-top-2
          peer-focus:left-4
          peer-focus:text-base
          peer-focus:text-light-gray
          lg:peer-placeholder-shown:top-3
          lg:peer-placeholder-shown:text-2xl
          lg:peer-focus:-top-3
          lg:text-lg
          lg:peer-focus:text-lg
          "
				>
					SENHA:
				</label>
				<div
					className="
          absolute 
          z-10
          transition-all
          duration-300
          left-3 -top-2 w-24 h-5
          rounded-full
          bg-white 
          peer-placeholder-shown:text-2xl
          peer-placeholder-shown:top-4
          peer-placeholder-shown:left-4
          peer-focus:-top-2
          peer-focus:left-3
          peer-focus:block
        "
				/>
			</fieldset>
			{error !== '' ? (
				<span className="text-red-500 2xl:text-base">{error}</span>
			) : (
				''
			)}
			<div className="flex w-full justify-between items-center content-center xl:mt-5">
				<Link to="/esqueci" className="text-dark-green font-bold xl:text-xl">
					Esqueci a senha
				</Link>
				<button
					type="submit"
					className="
            bg-base-green rounded-lg text-white text-xl px-7 py-2 shadow-sm
            transition-all
            duration-300
            hover:bg-base-hover-green
            xl:px-10
            xl:py-3
          "
				>
					Entrar
				</button>
			</div>
		</form>
	);
}
