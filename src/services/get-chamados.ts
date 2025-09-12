import api from "./api";

const getChamados = async () => {
  const chamados = await api.post("/Chamado/listagem", {
    currentPage: "1",
    pageSize: "25",
  });

  return chamados.data.dados;
};
export default getChamados;
