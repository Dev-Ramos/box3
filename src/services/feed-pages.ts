import api from "./api";

const getChamado = async (id: number) => {
  const data = await api.get(`/Chamado/${id}`).then((chamado) => {
    return chamado.data.dados;
  });

  return data;
};

const getChamados = async () => {
  const chamados = await api.post("/Chamado/listagem", {
    currentPage: "1",
    pageSize: "25",
  });

  return chamados.data.dados.dados;
};

const getPessoa = async (pessoaAssistidaId: number) => {
  const pessoa = await api
    .get(`/PessoaAssistida/${pessoaAssistidaId}`)
    .then((res) => res.data.dados);

  return pessoa;
};

const getChamadoId = async (chamadoId: number) => {
  const chamado = await api
    .get(`/Chamado/${chamadoId}`)
    .then((res) => res.data.dados);

  return chamado;
};

const getAtendimentos = async() => {
  const atendimentos = await api.post('/Atendimento/listagem', {
    pageSize: '30'
  }).then((res) => res.data.dados.dados)
  
  return atendimentos
}

const getAtendimento = async (atendimentoId: number) => {
  const atendimento = await api
    .get(`/Atendimento/${atendimentoId}`)
    .then((res) => res.data.dados);

  return atendimento;
};
export { getChamado, getChamados, getAtendimento, getAtendimentos, getPessoa, getChamadoId };
