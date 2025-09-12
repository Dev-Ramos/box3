import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/data-table";
import ButtonDetails from "@/components/button-details";
import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, PlusCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Atendimento } from "..";

const columns: ColumnDef<Atendimento>[] = [
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
    accessorKey: "dataInicio",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data de Início
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: atendimento } }) =>
      new Date(atendimento.dataInicio).toLocaleDateString("pt-BR"),
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
    cell: ({ row: { original: atendimento } }) => (
      <StatusBadge value={atendimento.status.label} />
    ),
  },
  {
    accessorKey: "observacao",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Observação
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: atendimento } }) => {
      return <div>{atendimento.viatura.observacao}</div>;
    },
  },
  {
    accessorKey: "placa",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Placa da viatura
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: atendimento } }) => {
      return <div>{atendimento.viatura.placa}</div>;
    },
  },

  {
    accessorKey: "",
    header: " ",
    cell: ({ row: { original: atendimento } }) => (
      <ButtonDetails
        route={`/home/atendimentos/${atendimento.id}`}
        label="Detalhes"
      />
    ),
  },
];

interface Props {
  data: Atendimento[];
}

export default function DataTableAtendimentos({ data }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant={"outline"}
        className="absolute right-8 bg-green-600 text-white font-semibold"
        onClick={() => navigate("/home/atendimentos/novo")}
      >
        <PlusCircleIcon size={16} />
        Novo Atendimento
      </Button>
      <DataTable
        columns={columns}
        data={data ?? []}
        pageSize={9}
        searchFields={["id", "status", "placa", "dataInicio", "observacao"]}
      />
    </>
  );
}
