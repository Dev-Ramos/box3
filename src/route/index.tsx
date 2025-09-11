import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from './private-route';
import Chamados from '@/pages/home/chamados';

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
        element: <Chamados/>
      },
      {
        path: '/home/atendimentos',
        element: <div>Tabela dos atendimentos em andamento aqui</div>
      }
    ]
  }
])
  

export default Rotas;
