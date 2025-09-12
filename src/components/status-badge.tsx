import { Badge } from "./ui/badge";
import { twMerge } from "tailwind-merge";

type Props = {
  value: string;
  className?: string
};
// usar tMerge para receber um w-fit na pagina de detalhes chamado
const StatusBadge = ({ value, className }: Props) => {
  if (value === "Finalizado" || value === "Iniciado") {
    return (
      <Badge
        variant={"default"}
        className={twMerge("bg-green-200 font-bold text-sm text-green-900 tracking-wide w-3/5", className)}
      >
        {value}
      </Badge>
    );
  } else if (value === "Rejeitado") {
    return (
      <Badge
        variant={"default"}
        className={twMerge("bg-red-200 font-bold text-sm text-red-900 tracking-wide w-3/5", className)}
      >
        {value}
      </Badge>
    );
  } else {
    return (
      <Badge
        variant={"default"}
        className={twMerge("bg-neutral-200 font-bold text-sm text-neutral-800 tracking-wide w-3/5", className )}
      >
        {value}
      </Badge>
    );
  }
};

export default StatusBadge;
