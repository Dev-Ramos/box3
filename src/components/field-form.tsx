import { Input } from "./ui/input"
import { twMerge } from "tailwind-merge"

interface FieldFormInterface {
  label: string
  fieldValue?: string | number
  className?: string
}

const FieldForm = ({label, fieldValue, className}: FieldFormInterface) => {
  return (
    <div className={twMerge("flex-col grow font-medium items-start", className)}>
      <span className="ml-2 text-sm">{ label }</span>
      <Input value={fieldValue} disabled className="text-center" />
    </div>
  )
}

export default FieldForm
