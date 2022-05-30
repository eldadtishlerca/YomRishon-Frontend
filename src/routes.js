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
    label: 'Home',
  },
  {
    path: '/b101',
    component: <BoardPage />,
    label: 'Board',
  },
  {
    path: '/b101/:groupId/:taskId',
    component: <TaskDetails />,
  },
  {
    path: '/user/:userId',
    component: <UserProfile />,
    label: 'Board',
  },
  {
    path: '/loginsignup',
    component: <LoginSignUpPage />,
    label: 'Board',
  },
  {
    path: '/*',
    component: <ErrorPage />,
  },
]

export default routes
