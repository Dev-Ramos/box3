import api from "./api";

const getChamado = async (id: number) => {
  const data = await api.get(`/Chamado/${id}`).then(chamado => { return chamado.data.dados })
  
  return data
};

export default getChamado;
// api.get(`/Chamado/${chamadoId}`).then((res) => setCall(res.data.dados))