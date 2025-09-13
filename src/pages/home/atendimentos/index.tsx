import DataTableAtendimentos from "./columns/atendimentos-datatable";
import { useCalls } from "@/context/useCalls";

export interface Atendimento {
  chamadoId: number
  dataCadastro: Date
  dataInicio: Date
  dataFim: Date
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
  const { atendimentos } = useCalls()
  
  return (
    <div className="p-8">
      <DataTableAtendimentos data={atendimentos}/>
    </div>
  );
};

export default Atendimentos;
