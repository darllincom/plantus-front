import { useContext } from "react";
import { ProfileContext } from "../../context/profile-provider";

type NoInfoProps = {
  name: string
}

export default function NoInfo({ name }: NoInfoProps) {
  const { handleEdition } = useContext(ProfileContext);

  return (
    <div className="w-full h-full flex items-center content-center justify-items-center justify-center flex-col">
      <h1>Este usuário possui pendências de {name}</h1>
      <button onClick={handleEdition} className="px-2 py-1 rounded-md bg-base-green text-xs mt-5 text-white lg:text-lg lg:px-4">Adicionar Informações</button>
    </div>
  )
}