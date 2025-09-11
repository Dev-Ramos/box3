import { Badge } from "./ui/badge"

type Props = {
  value: string
}

const StatusBadge = ({value}: Props) => {
  if (value === 'Finalizado') {
    return (
      <Badge variant={"default"} className="bg-green-200 font-bold text-sm text-green-900 tracking-wide">
        {value}
      </Badge>
    )
  } else if (value === 'Rejeitado') {
    return (
      <Badge variant={'default'} className="bg-red-200 font-bold text-sm text-red-900 tracking-wide">
        {value}
      </Badge>
    )
  } else {
    return (
      <Badge variant={'default'} className="bg-neutral-200 font-bold text-sm text-neutral-800 tracking-wide">
        {value}
      </Badge>
    )
  }
}

export default StatusBadge
