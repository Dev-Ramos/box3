import type { PessoaAssistidaType } from "@/pages/home/atendimentos/detalhesAtd/atendimento-detalhes"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import FieldForm from "./field-form"

type PersonCardProps = {
  pessoa: PessoaAssistidaType
}

const PersonCard = ({pessoa}: PersonCardProps) => {
  return (
    <Card className="text-green-800 h-full">
      <CardHeader className="flex items-center justify-around">
        <CardTitle className="text-center">Pessoa Assistida</CardTitle>
        <CardTitle className="border border-neutral-400 rounded-full p-2">
          {pessoa?.id}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FieldForm
          fieldValue={pessoa?.nome}
          label="Nome:"
          className="w-full"
        />
        <div className="flex gap-2">
          <FieldForm
            fieldValue={pessoa?.cpf}
            label="CPF:"
            className="w-fit"
          />
          <FieldForm
            fieldValue={pessoa?.telefone}
            label="Telefone:"
            className="w-fit"
          />
        </div>
        <FieldForm fieldValue={pessoa?.email} label="Email:" />
        <div className="flex gap-2">
          <FieldForm
            fieldValue={pessoa?.rua}
            label="Rua:"
            className="w-fit"
          />
          <FieldForm
            fieldValue={pessoa?.bairro}
            label="Bairro:"
            className="w-fit"
          />
        </div>
        <div className="flex gap-2">
          <FieldForm
            fieldValue={pessoa?.cep}
            label="CEP:"
            className="w-fit"
          />
          <FieldForm
            fieldValue={pessoa?.estado}
            label="Estado:"
            className="w-fit"
          />
          <FieldForm
            fieldValue={pessoa?.cidade}
            label="Cidade:"
            className="w-fit"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default PersonCard
