import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./private-route";
import Chamados from "@/pages/home/chamados";
import ChamadoDetalhes from "@/pages/home/chamados/detalhesCall/chamado-detalhes";
import CreateCAll from "@/pages/home/chamados/criarChamado";
import Atendimentos from "@/pages/home/atendimentos";
import AtendimentoDetalhes from "@/pages/home/atendimentos/detalhesAtd/atendimento-detalhes";
import CreateAtendimento from "@/pages/home/atendimentos/criaAtendimento";

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/home/chamados",
        element: <Chamados />,
      },
      {
        path: "/home/chamados/:id",
        element: <ChamadoDetalhes />,
      },
      {
        path: "/home/chamados/novo",
        element: <CreateCAll />,
      },
      {
        path: "/home/atendimentos",
        element: <Atendimentos />,
      },
      {
        path: "/home/atendimentos/:id",
        element: <AtendimentoDetalhes />,
      },
      {
        path: "/home/atendimentos/novo",
        element: <CreateAtendimento />,
      },
    ],
  },
]);

export default Rotas;
