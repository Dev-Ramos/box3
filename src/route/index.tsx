import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import { createBrowserRouter } from 'react-router-dom'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>
  },
  {
    path: '/home',
    element: <HomePage/>
  }
])
  

export default Rotas;
