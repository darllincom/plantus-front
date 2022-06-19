import { Health as HealthModel } from "../../../../models/health"

type HealthInfoProps = {
  health: HealthModel
}

export default function HealthInfo({ health }: HealthInfoProps) {
  return (
    <>
      <div className="w-full"></div>
    </>
  )
}