import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/data-table";
import ButtonDetails from "@/components/button-details";
import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, PlusCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { ChamadoType } from "../detalhesCall/chamado-detalhes";

const columns: ColumnDef<ChamadoType>[] = [
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
      <ButtonDetails route={`/home/chamados/${chamado.id}`} label="Detalhes" />
    ),
  },
];

interface Props {
  data: ChamadoType[];
}

export default function DataTableChamados({ data }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant={"outline"}
        className="absolute right-8 bg-green-600 text-white font-semibold"
        onClick={() => navigate("/home/chamados/novo")}
      >
        <PlusCircleIcon size={16} />
        Criar Novo Chamado
      </Button>
      <DataTable
        columns={columns}
        data={data ?? []}
        pageSize={8}
        searchFields={["id", "status", "bairro", "dataCadastro"]}
      />
    </>
  );
}
