import { HomePage } from './pages/home-page.jsx'
import { BoardPage } from './pages/board-page.jsx'

const routes = [
  {
    path: '/',
    component: <HomePage />,
    label: 'Home',
  },
  {
    path: '/board',
    component: <BoardPage />,
    label: 'Home',
  },
]

export default routes
