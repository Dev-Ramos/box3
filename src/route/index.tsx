import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from './private-route';

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>
  },
  {
    path: '/home',
    element: <PrivateRoute><HomePage/></PrivateRoute>
  }
])
  

export default Rotas;
