import { FormEvent, useContext, useState } from "react"
import { LoginContext } from "../../../../context/auth-provider"
import cpfMask from "../../../../utils/cpfMask"

export default function LoginForm() {
  const [cpf, setCPF] = useState('')
  const [password, setPassword] = useState('')

  const { error, handleLogin } = useContext(LoginContext)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    handleLogin!(cpf, password)
  }

  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <fieldset className="relative w-9/12 h-14 my-6">
        <input 
          type="text" 
          id="cpf-login" 
          name="cpf-login" 
          placeholder='CPF:'
          value={cpf}
          required
          onChange={(e) => setCPF(cpfMask(e.target.value))}
          className="
            border-light-green 
            border-2 rounded-xl 
            w-full text-2xl text-dark-gray 
            py-3 px-5 outline-base-green
            placeholder-transparent
            peer
          "/>
        <label htmlFor="cpf-login" className="
          absolute left-4 -top-2 z-20
          text-light-gray text-base 
          transition-all
          duration-300
          peer-placeholder-shown:text-2xl
          peer-placeholder-shown:top-4
          peer-placeholder-shown:left-5
          peer-focus:-top-2
          peer-focus:left-4
          peer-focus:text-base
          peer-focus:text-light-gray
        ">CPF:</label>
        <div className="
          absolute 
          z-10
          transition-all
          duration-300
          left-3 -top-2 w-12 h-5
          rounded-full
          bg-white 
          peer-placeholder-shown:text-2xl
          peer-placeholder-shown:top-4
          peer-placeholder-shown:left-4
          peer-focus:-top-2
          peer-focus:left-3
          peer-focus:block
        "/>
      </fieldset>
      <fieldset className="relative w-9/12 h-14 my-6">
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder='SENHA:'
          className="
            border-light-green 
            border-2 rounded-xl 
            w-full text-2xl text-dark-gray 
            py-3 px-5 outline-base-green
            placeholder-transparent
            peer
          "
        />
        <label
          htmlFor="password" className="
            absolute left-4 -top-2 z-20
            text-light-gray text-base 
            transition-all
            duration-300
            peer-placeholder-shown:text-2xl
            peer-placeholder-shown:top-4
            peer-placeholder-shown:left-5
            peer-focus:-top-2
            peer-focus:left-4
            peer-focus:text-base
            peer-focus:text-light-gray
          ">SENHA:</label>
        <div className="
          absolute 
          z-10
          transition-all
          duration-300
          left-3 -top-2 w-20 h-5
          rounded-full
          bg-white 
          peer-placeholder-shown:text-2xl
          peer-placeholder-shown:top-4
          peer-placeholder-shown:left-4
          peer-focus:-top-2
          peer-focus:left-3
          peer-focus:block
        "/>
      </fieldset>
      { error !== '' ? <span className="text-red-500" >{error}</span> : '' }
      <div className="flex w-9/12 justify-between items-center content-center">
        <a href="" className="text-dark-green font-bold">Esqueci a senha</a>
        <button
          type="submit"
          className="
            bg-base-green rounded-lg text-white text-2xl px-7 py-2 shadow-sm
            transition-all
            duration-300
            hover:bg-base-hover-green
          ">Entrar</button>
      </div>
    </form>
  )
}