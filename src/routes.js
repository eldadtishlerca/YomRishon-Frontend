import { HomePage } from './pages/home-page'
import { BoardPage } from './pages/board-page'

const routes = [
  {
    path: '/',
    component: <HomePage />,
    label: 'Home',
  },
  {
    path: '/board',
    component: <BoardPage />,
    label: 'Board',
  },
]

export default routes
