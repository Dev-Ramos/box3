import FieldForm from "@/components/field-form";
import LoadingData from "@/components/loading-data";
import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import api from "@/services/api";
import { FormatterDate } from "@/services/format-date";
import { ArrowLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export interface ChamadoType {
  id: number;
  status: {
    value: string;
    label: string;
  };
  estado: string;
  cidade: string;
  bairro: string;
  cep: string;
  rua: string;
  dataCadastro: Date;
  dataRespondido: Date;
  pessoaAssistida: {
    id: number;
    ativo: boolean;
    nome: string;
    cpf: string;
    email?: string;
    telefone: string;
    cidade: string;
    estado: string;
    bairro: string;
    cep: string;
    rua: string;
    dataCadastro: Date;
  };
}

const ChamadoDetalhes = () => {
  const navigate = useNavigate();
  const [call, setCall] = useState<ChamadoType>();
  const { id } = useParams<{ id: string }>();
  const chamadoId = Number(id);

  useEffect(() => {
    api.get(`/Chamado/${chamadoId}`).then((res) => setCall(res.data.dados));
  }, [chamadoId]);

  console.log(call);
  
  return (
    <div className="flex flex-col pl-4 gap-4">
      <Button size={"icon"} variant={"ghost"} onClick={() => navigate(-1)}>
        <ArrowLeftIcon size={16} />
      </Button>
      {call == null ?
        <LoadingData/>
        : (
        <div className="grid grid-cols-4 gap-2 pr-4">
          <div className="col-span-2">
            <Card className="text-green-800 h-full">
              <CardHeader className="flex items-center justify-around">
                <CardTitle className="text-center">Pessoa Assistida</CardTitle>
                <CardTitle className="border border-neutral-400 rounded-full p-2">
                  {call.pessoaAssistida.id}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FieldForm
                  fieldValue={call.pessoaAssistida.nome}
                  label="Nome:"
                  className="w-full"
                />
                <div className="flex gap-2">
                  <FieldForm
                    fieldValue={call.pessoaAssistida.cpf}
                    label="CPF:"
                    className="w-fit"
                  />
                  <FieldForm
                    fieldValue={call.pessoaAssistida.telefone}
                    label="Telefone:"
                    className="w-fit"
                  />
                </div>
                <FieldForm
                  fieldValue={call.pessoaAssistida.email}
                  label="Email:"
                />
                <div className="flex gap-2">
                  <FieldForm
                    fieldValue={call.pessoaAssistida.rua}
                    label="Rua:"
                    className="w-fit"
                  />
                  <FieldForm
                    fieldValue={call.pessoaAssistida.bairro}
                    label="Bairro:"
                    className="w-fit"
                  />
                </div>
                <div className="flex gap-2">
                  <FieldForm
                    fieldValue={call.pessoaAssistida.cep}
                    label="CEP:"
                    className="w-fit"
                  />
                  <FieldForm
                    fieldValue={call.pessoaAssistida.estado}
                    label="Estado:"
                    className="w-fit"
                  />
                  <FieldForm
                    fieldValue={call.pessoaAssistida.cidade}
                    label="Cidade:"
                    className="w-fit"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-2">
            <Card className="text-green-800 h-full">
              <CardHeader className="flex justify-between">
                <CardTitle className="col-span-3">
                  Detalhes do Chamado:
                </CardTitle>
                <CardTitle>
                  <StatusBadge value={ call.status.label } className="w-fit"/>
                </CardTitle>
              </CardHeader>
              <CardContent className=" flex justify-around gap-3 items-center flex-wrap">
                <FieldForm label="ID do Chamado:" fieldValue={call.id} />
                <FieldForm
                  label="Data de Abertura:"
                  fieldValue={FormatterDate(call.dataCadastro)}
                />
                <FieldForm
                  label="Data de Resposta:"
                  fieldValue={FormatterDate(call.dataRespondido)}
                />
                <FieldForm label="Estado:" fieldValue={call.estado} />
                <FieldForm
                  label="Rua:"
                  fieldValue={call.rua}
                  className="w-full"
                />
                <FieldForm label="CEP:" fieldValue={call.cep} />
                <FieldForm label="Bairro:" fieldValue={call.bairro} />
                <FieldForm label="Cidade:" fieldValue={call.cidade} />
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChamadoDetalhes;
