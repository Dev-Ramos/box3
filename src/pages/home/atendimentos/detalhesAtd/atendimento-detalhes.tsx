import FieldForm from "@/components/field-form";
import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormatterDate } from "@/services/format-date";
import { ArrowLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "@/services/api";
import type { Atendimento } from "..";
import type { ChamadoType } from "../../chamados/detalhesCall/chamado-detalhes";

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
  const [atd, setAtd] = useState<Atendimento>();
  const [pessoa, setPessoa] = useState<PessoaAssistidaType>();
  const [call, setCall] = useState<ChamadoType>();
  const { id } = useParams<{ id: string }>();
  const atendimentoId = Number(id);

  const getPessoa = async (atd: Atendimento) => {
    await api
      .get(`/PessoaAssistida/${atd.pessoaAssistidaId}`)
      .then((res) => setPessoa(res.data.dados));
  };

  const getChamadoId = async (id: number) => {
    await api.get(`/Chamado/${id}`).then((res) => setCall(res.data.dados));
  };

  const getAtendimento = async () => {
    api
      .get(`/Atendimento/${atendimentoId}`)
      .then((res) => setAtd(res.data.dados));
  };

  useEffect(() => {
    getAtendimento();
    // eslint-disable-next-line
  }, [atendimentoId]);

  if (atd) {
    getPessoa(atd);
    getChamadoId(atd.chamadoId);
  }

  return (
    <div className="flex flex-col pl-4 gap-4">
      <Button size={"icon"} variant={"ghost"} onClick={() => navigate(-1)}>
        <ArrowLeftIcon size={16} />
      </Button>
      {call && (
        <div className="grid grid-cols-4 gap-2 pr-4">
          <div className="col-span-4">
            <Card className="text-green-800">
              <CardHeader className="flex justify-between">
                <CardTitle>Informações do Atendimento</CardTitle>
                <CardTitle>
                  <StatusBadge value={atd?.status?.label} className="w-fit" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <FieldForm label="N°" fieldValue={atd?.id} />
                  <FieldForm label="Chamado N°" fieldValue={atd?.chamadoId} />
                  <FieldForm label="Data de Cadastro" fieldValue={atd?.id} />
                  <FieldForm label="Data de Inicio" fieldValue={atd?.id} />
                  <FieldForm label="Data de Fim" fieldValue={atd?.id} />
                </div>
                <div className="flex gap-2">
                  <FieldForm
                    label="Observação"
                    fieldValue={atd?.observacao}
                    className="w-1/2"
                  />
                  <div
                    className={`flex flex-col border rounded-lg p-2 mt-5 shadow-md ${
                      atd?.viatura?.manuntencao == true
                        ? "border-red-400"
                        : "border-green-400"
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="font-semibold">Dados da Viatura:</span>
                      {/* Alterna entre ativo e manutenção de acordo com viatura.manutencao: */}
                      {/* <span className="flex flex-row bg-green-300 rounded-lg items-center gap-1 p-1">
                        <Circle size={12} />
                        Ativo
                      </span> */}
                      <div className="flex space-x-2">
                        <span className="font-semibold">Placa:</span>
                        <StatusBadge
                          value={atd?.viatura?.placa}
                          className="w-fit"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <FieldForm
                        label="Viatura N°:"
                        fieldValue={atd?.viatura?.id}
                      />
                      <FieldForm
                        label="Identificador:"
                        fieldValue={atd?.viatura?.identificador}
                      />
                      <FieldForm
                        label="Observação:"
                        fieldValue={atd?.viatura?.observacao}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-2">
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
          </div>
          <div className="col-span-2">
            {call && (
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
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AtendimentoDetalhes;
