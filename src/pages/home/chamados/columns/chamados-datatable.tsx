import type { ColumnDef } from "@tanstack/react-table";
import type { Chamado } from "../index";
import { DataTable } from "@/components/data-table";
import ButtonDetails from "@/components/button-details";
import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const columns: ColumnDef<Chamado>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.getValue("id")}</div>;
    },
  },
  {
    accessorKey: "bairro",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Bairro
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: chamado } }) => chamado.bairro.toUpperCase(),
  },
  {
    accessorKey: "dataCadastro",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data de Cadastro
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: chamado } }) =>
      new Date(chamado.dataCadastro).toLocaleDateString("pt-BR"),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: chamado } }) => (
      <StatusBadge value={chamado.status.label} />
    ),
  },
  {
    accessorKey: "",
    header: " ",
    cell: ({ row: { original: chamado } }) => (
      <ButtonDetails id={chamado.id} label="Detalhes" />
    ),
  },
];

interface Props {
  data: Chamado[];
}

export default function DataTableChamados({ data }: Props) {
  return (
    <DataTable
      columns={columns}
      data={data ?? []}
      pageSize={8}
      searchFields={["id", "status", "bairro", "dataCadastro"]}
    />
  );
}
