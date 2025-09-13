import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import StatusBadge from './status-badge'
import FieldForm from './field-form'
import { FormatterDate } from '@/services/format-date'
import type { ChamadoType } from '@/pages/home/chamados/detalhesCall/chamado-detalhes'

type CallCardProps = {
  call: ChamadoType
}

const CallCard = ({call}: CallCardProps) => {
  return (
    <Card className="text-green-800 h-full">
      <CardHeader className="flex justify-between">
        <CardTitle className="col-span-3">
          Detalhes do Chamado:
        </CardTitle>
        <CardTitle>
          <StatusBadge value={call?.status.label} className="w-fit" />
        </CardTitle>
      </CardHeader>
      <CardContent className=" flex justify-around gap-3 items-center flex-wrap">
        <FieldForm label="ID do Chamado:" fieldValue={call?.id} />
        <FieldForm
          label="Data de Abertura:"
          fieldValue={FormatterDate(call.dataCadastro)}
        />
        <FieldForm
          label="Data de Resposta:"
          fieldValue={FormatterDate(call.dataRespondido)}
        />
        <FieldForm label="Estado:" fieldValue={call?.estado} />
        <FieldForm
          label="Rua:"
          fieldValue={call?.rua}
          className="w-full"
        />
        <FieldForm label="CEP:" fieldValue={call?.cep} />
        <FieldForm label="Bairro:" fieldValue={call?.bairro} />
        <FieldForm label="Cidade:" fieldValue={call?.cidade} />
      </CardContent>
    </Card>
  )
}

export default CallCard
