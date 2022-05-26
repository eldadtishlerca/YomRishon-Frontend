import { HomePage } from './pages/home-page'
import { BoardPage } from './pages/board-page'
import { UserProfile } from './pages/user-profile-page'
import { LoginSignUpPage } from './pages/login-signup-page'
import { ErrorPage } from './pages/error-page'
import {TaskDetails} from './cmps/task-details.jsx'

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
    path: '/:groupId/:taskId',
    component: <TaskDetails />,
    label: 'TaskDetails'
  },
  {
    path: '/*',
    component: <ErrorPage />,
  },
]

export default routes
