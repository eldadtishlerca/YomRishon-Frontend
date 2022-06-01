import { HomePage } from './pages/home-page'
import { BoardPage } from './pages/board-page'
import { UserProfile } from './pages/user-profile-page'
import { LoginSignUpPage } from './pages/login-signup-page'
import { ErrorPage } from './pages/error-page'
import { TaskDetails } from './cmps/task/task-details'

const routes = [
  {
    path: '/',
    component: <HomePage />,
  },
  {
    path: '/:boardId',
    component: <BoardPage />,
  },
  {
    path: '/:boardId/:groupId/:taskId',
    component: <TaskDetails />,
  },
  {
    path: '/user/:userId',
    component: <UserProfile />,
  },
  {
    path: '/loginsignup',
    component: <LoginSignUpPage />,
  },
  {
    path: '/*',
    component: <ErrorPage />,
  },
]

export default routes
