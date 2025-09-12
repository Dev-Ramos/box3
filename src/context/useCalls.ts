import type { Atendimento } from "@/pages/home/atendimentos";
import type { ChamadoType } from "@/pages/home/chamados/detalhesCall/chamado-detalhes";
import api from "@/services/api";
import { create } from "zustand";

type BairroSelect = {
  id: number;
  descricao: string;
};
type PessoaAssistidaSelect = {
  id: number;
  descricao: string;
};

interface UserCallsType {
  error: string;
  chamados: ChamadoType[];
  atendimentos: Atendimento[];
  selectBairro: BairroSelect[];
  selectPessoaAssistida: PessoaAssistidaSelect[];
  getChamadosState: (calls: ChamadoType[]) => void;
  getAtendimentoState: (atend: Atendimento[]) => void;
  getSelectBairro: () => Promise<void>;
  getSelectPessoaAssistida: () => Promise<void>;
}

export const useCalls = create<UserCallsType>((set) => ({
  error: "",
  chamados: [],
  atendimentos: [],
  selectBairro: [],
  pessoaAssitida: {
    id: 1,
    ativo: false,
    nome: '',
    cpf: '',
    dataCadastro: new Date(),
  },
  selectPessoaAssistida: [],
  getSelectBairro: async () => {
    const res = await api.post("/Chamado/select/bairro", {
      pageSize: "10",
    });
    set({ selectBairro: res.data.dados });
  },
  getSelectPessoaAssistida: async () => {
    const res = await api.post("/PessoaAssistida/Select", {
      pageSize: "10",
    });
    set({ selectPessoaAssistida: res.data.dados });
  },
  getChamadosState: (calls: ChamadoType[]) => {
    set({ chamados: calls });
  },
  getAtendimentoState: (atend: Atendimento[]) => {
    set({ atendimentos: atend });
  },
}));
