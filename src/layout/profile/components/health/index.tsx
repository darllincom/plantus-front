import { Health as HealthModel } from "../../../../models/health"
import NoInfo from "../../no-info"
import HealthInfo from "./health-info"

type HealthProps = {
  health?: HealthModel
}

export default function Health({ health }: HealthProps) {
  return (
    <div className="w-full min-h-[15vh]">
      { health ? (
        <HealthInfo health={health} />
      ) : (
        <NoInfo name="Saúde" />
      )}
    </div>
  )
}