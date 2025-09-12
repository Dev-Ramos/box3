import api from "@/services/api";
import { useEffect } from "react";
import DataTableAtendimentos from "./columns/atendimentos-datatable";
import { useCalls } from "@/context/useCalls";

export interface Atendimento {
  chamadoId: number
  dataCadastro: Date
  dataInicio: Date
  id: number
  observacao: string
  pessoaAssistidaId: number
  responsavelId: number
  usuarioCadastro: string
  status: {
    value: string
    label: string
    type: string
  }
  viatura: {
    id: number
    identificador: string
    placa: string
    observacao: string
    manuntencao: boolean
  }
}

const Atendimentos = () => {
  const {getAtendimentoState, atendimentos} = useCalls()
  useEffect(() => {
    api
    .post("/Atendimento/listagem", {
      pageSize: "30",
    })
    .then((res) => getAtendimentoState(res.data.dados.dados));
    ;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-8">
      <DataTableAtendimentos data={atendimentos}/>
    </div>
  );
};

export default Atendimentos;
