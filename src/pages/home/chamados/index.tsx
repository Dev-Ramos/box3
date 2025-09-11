import DataTableChamados from './columns/chamados-datatable'
import { useOutletContext } from "react-router-dom";

export interface Chamado {
  id: number,
  bairro: string,
  dataCadastro: Date,
  status: {
    label: string,
    type: string,
    value: string
  }
}
const Chamados = () => {
  const data = useOutletContext<Chamado[]>()
  return (
    <div className="p-8">
      <DataTableChamados data={data ?? []}/>
    </div>
  )
}

export default Chamados
