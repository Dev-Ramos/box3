import FieldForm from "@/components/field-form";
import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftIcon, Circle } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Atendimento } from "..";
import type { ChamadoType } from "../../chamados/detalhesCall/chamado-detalhes";
import LoadingData from "@/components/loading-data";
import { getAtendimento, getChamadoId, getPessoa } from "@/services/feed-pages";
import PersonCard from "@/components/person-card";
import CallCard from "@/components/call-card";
import { FormatterDate } from "@/services/format-date";

export type PessoaAssistidaType = {
  id: number;
  ativo: boolean;
  nome: string;
  cpf: string;
  email?: string;
  telefone?: string;
  cidade?: string;
  estado?: string;
  bairro?: string;
  cep?: string;
  rua?: string;
  dataCadastro: Date;
};

const AtendimentoDetalhes = () => {
  const navigate = useNavigate();
  const [atendimento, setAtendimento] = useState<Atendimento>();
  const [pessoa, setPessoa] = useState<PessoaAssistidaType>();
  const [call, setCall] = useState<ChamadoType>();
  const { id } = useParams<{ id: string }>();
  const atendimentoId = Number(id);

  useLayoutEffect(() => {
    getAtendimento(atendimentoId).then((res) => setAtendimento(res));
  }, [atendimentoId]);

  useEffect(() => {
    if (atendimento) {
      getPessoa(atendimento.pessoaAssistidaId).then((res) => setPessoa(res));
      getChamadoId(atendimento.chamadoId).then((res) => setCall(res));
    }
  }, [atendimento]);

  return (
    <div className="flex flex-col pl-4 gap-2">
      <Button size={"icon"} variant={"ghost"} onClick={() => navigate(-1)}>
        <ArrowLeftIcon size={16} />
      </Button>
      {call == null ? (
        <LoadingData />
      ) : (
        <div className="grid grid-cols-4 gap-2 pr-4">
          <div className="col-span-4">
            <Card className="text-green-800">
              <CardHeader className="flex justify-between">
                <CardTitle>Informações do Atendimento</CardTitle>
                <CardTitle>
                  <StatusBadge
                    value={atendimento?.status?.label}
                    className="w-fit"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <FieldForm label="N°" fieldValue={atendimento?.id} />
                  <FieldForm
                    label="Chamado N°"
                    fieldValue={atendimento?.chamadoId}
                  />
                  <FieldForm
                    label="Data de Cadastro"
                    fieldValue={FormatterDate(atendimento!.dataCadastro)}
                  />
                  <FieldForm
                    label="Inicio do Atendimento:"
                    fieldValue={FormatterDate(atendimento!.dataInicio)}
                  />
                  <FieldForm
                    label="Fim do Atendimento:"
                    fieldValue={FormatterDate(atendimento!.dataFim)}
                  />
                </div>
                <div className="flex gap-2">
                  <FieldForm
                    label="Observação"
                    fieldValue={atendimento?.observacao}
                    className="w-1/2"
                  />
                  <div
                    className={`flex flex-col border rounded-lg p-2 mt-5 shadow-md ${
                      atendimento?.viatura?.manuntencao === false
                      ?"border-yellow-400"
                      : "border-green-400"
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="font-semibold">Dados da Viatura:</span>
                      <span
                        className={`flex flex-row rounded-lg items-center gap-1 p-1 font-semibold tracking-widest text-sm ${
                          atendimento?.viatura.manuntencao === false
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-green-200 text-green-800"
                        }`}
                      >
                        <Circle
                          size={12}
                          fill={`${
                            atendimento?.viatura.manuntencao === false
                              ? "#CA8A04"
                              : "#016630"
                          }`}
                        />
                        {atendimento?.viatura.manuntencao === false
                          ? "Manutenção"
                          : "Ativo"}
                      </span>
                      <div className="flex space-x-2">
                        <span className="font-semibold">Placa:</span>
                        <StatusBadge
                          value={atendimento?.viatura?.placa}
                          className="w-fit"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <FieldForm
                        label="Viatura N°:"
                        fieldValue={atendimento?.viatura?.id}
                      />
                      <FieldForm
                        label="Identificador:"
                        fieldValue={atendimento?.viatura?.identificador}
                      />
                      <FieldForm
                        label="Observação:"
                        fieldValue={atendimento?.viatura?.observacao}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-2">
            {pessoa && <PersonCard pessoa={pessoa} />}
          </div>
          <div className="col-span-2">
            <CallCard call={call} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AtendimentoDetalhes;
