import type { ColumnDef } from "@tanstack/react-table";
import type { Chamado } from "../index";
import { DataTable } from "@/components/data-table";
import ButtonDetails from "@/components/button-details";
import StatusBadge from "@/components/status-badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const columns: ColumnDef<Chamado>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <div>{row.getValue("id")}</div>;
    },
  },
  {
    accessorKey: "bairro",
    header: "Bairro",
    cell: ({ row: { original: chamado } }) => chamado.bairro.toUpperCase(),
  },
  {
    accessorKey: "dataCadastro",
    header: "Data de Cadastro",
    cell: ({ row: { original: chamado } }) =>
      new Date(chamado.dataCadastro).toLocaleDateString("pt-BR"),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row: { original: chamado } }) => (
      <StatusBadge value={ chamado.status.label }/>
    )
  },
  {
    accessorKey: "",
    header: "Ações",
    cell: ({ row: { original: chamado } }) => (
      <ButtonDetails id={chamado.id} label="Detalhes" />
    ),
  },
];

interface Props {
  data: Chamado[];
}

export default function DataTableChamados({ data }: Props) {
  return <DataTable columns={columns} data={data ?? []} pageSize={11} />;
}
