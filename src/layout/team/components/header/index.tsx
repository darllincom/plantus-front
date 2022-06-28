import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Icons, { IconNames } from "../../../../components/icons";
import { LoginContext } from "../../../../context/auth-provider";

export default function Header() {
  const { user } = useContext(LoginContext);

  const navigate = useNavigate()

  function handlePushToCreateMember() {
    navigate('/perfil/adicionar')
  }

  return (
		<header className="sticky bg-dark-white/80 backdrop-blur-sm bg-clip-padding py-4 px-3 top-0 z-50 mt-10 xl:mt-16 flex w-full items-center justify-between">
			<div className=" flex items-center">
				<Icons name={IconNames.PERFIL} size="lg" />
				<h1 className="text-dark-green ml-2 text-xl xl:text-2xl">
					Equipe Plantus
				</h1>
			</div>
			{user?.office === 'MASTER' || user?.office === 'RH' ? (
				<button
          onClick={handlePushToCreateMember}
          className="px-2 py-1 rounded-md bg-light-green text-xs text-dark-green lg:text-lg lg:px-4"
        >
          Adicionar Membro
        </button>
			) : (
				''
			)}
		</header>
	);
}