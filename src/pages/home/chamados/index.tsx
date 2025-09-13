import { useCalls } from "@/context/useCalls";
import DataTableChamados from "./columns/chamados-datatable";

const Chamados = () => {
  const { chamados } = useCalls();
  
  return (
    <div className="p-8">
      <DataTableChamados data={chamados ?? []} />
    </div>
  );
};

export default Chamados;
