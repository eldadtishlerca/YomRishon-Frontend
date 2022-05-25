import { HomePage } from './pages/home-page'
import { BoardPage } from './pages/board-page'
import { TaskDetails } from './cmps/task-details'

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
  {
    path: '/task/:taskId',
    component: <TaskDetails />,
    label: 'Task',
  },
]

export default routes
