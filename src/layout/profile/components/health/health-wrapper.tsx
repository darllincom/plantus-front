import { Health } from "../../../../models/health"
import NoInfo from "../../no-info"
import HealthInfo from "./health-info"

type HealthProps = {
  health?: Health
}

export default function HealthWrapper({ health }: HealthProps) {
  return (
    <>
      {health ? <HealthInfo health={health} /> : <NoInfo name="Saúde" />}
    </>
  )
}