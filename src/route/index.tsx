import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from './private-route';
import Chamados from '@/pages/home/chamados';
import ChamadoDetalhes from '@/pages/home/chamados/detalhes/chamado-detalhes';
import CreateCAll from '@/pages/home/chamados/criarChamad0';
import Atendimentos from '@/pages/home/atendimentos';

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>
  },
  {
    path: '/home',
    element: <PrivateRoute><HomePage /></PrivateRoute>,
    children: [
      {
        path: '/home/chamados',
        element: <Chamados />
      },
      {
        path: '/home/chamados/:id',
        element: <ChamadoDetalhes/>
      },
      {
        path: '/home/chamados/novo',
        element: <CreateCAll/>
      },
      {
        path: '/home/atendimentos',
        element: <Atendimentos/>
      }
    ]
  }
])
  

export default Rotas;
