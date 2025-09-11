import getChamado from "@/services/get-chamado"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { ReceiptTextIcon } from "lucide-react";


type Prop = {
  id: number
  label: string
}

const ButtonDetails = ({ id, label }: Prop) => {
  const navigate = useNavigate()
  const handleDetails = async () => {
    await getChamado(id).then((res) => {
      console.log(res);
      navigate(`/home/chamados/${id}`)
    })
  }
  return (
    <Button variant={'ghost'} size={'sm'} onClick={handleDetails}>
      {label}
      <ReceiptTextIcon size={16}/>
    </Button>
  )
}

export default ButtonDetails
