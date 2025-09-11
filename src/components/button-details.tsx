import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { ReceiptTextIcon } from "lucide-react";


type Prop = {
  id: number
  label: string
}

const ButtonDetails = ({ id, label }: Prop) => {
  const navigate = useNavigate()
  const handleDetails = () => {
    navigate(`/home/chamados/${id}`)
  }
  return (
    <Button variant={'ghost'} size={'sm'} onClick={handleDetails} className="hover:bg-neutral-300">
      {label}
      <ReceiptTextIcon size={16}/>
    </Button>
  )
}

export default ButtonDetails
