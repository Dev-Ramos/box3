import api from "./api";

const getChamado = async (id: number) => {
  const chamado = await api.get(`/Chamado/${id}`);
  return chamado.data.dados
};

export default getChamado;
