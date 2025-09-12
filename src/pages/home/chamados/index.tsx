import { useCalls } from "@/context/useCalls";
import DataTableChamados from "./columns/chamados-datatable";

export interface Chamado {
  id: number;
  bairro: string;
  dataCadastro: Date;
  status: {
    label: string;
    type: string;
    value: string;
  };
}
const Chamados = () => {
  const { chamados } = useCalls();
  console.log(chamados);
  
  return (
    <div className="p-8">
      <DataTableChamados data={chamados ?? []} />
    </div>
  );
};

export default Chamados;
