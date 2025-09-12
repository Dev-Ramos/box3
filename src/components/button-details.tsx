import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { ReceiptTextIcon } from "lucide-react";


type Prop = {
  label: string
  route: string
}

const ButtonDetails = ({label, route }: Prop) => {
  const navigate = useNavigate()
  const handleDetails = () => {
    navigate(route)
  }
  return (
    <Button variant={'ghost'} size={'sm'} onClick={handleDetails} className="hover:bg-neutral-300">
      {label}
      <ReceiptTextIcon size={16}/>
    </Button>
  )
}

export default ButtonDetails
