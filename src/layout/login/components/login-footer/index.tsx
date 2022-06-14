import { Link } from "react-router-dom";

export default function LoginFooter() {
  return(
    <div className="helpfull-links mt-28 w-9/12 flex justify-around items-center content-center">
      <Link to="/visite">Visitar site Plantus</Link>
      <Link to="/termos">Termos de Uso</Link>
    </div>
  )
}