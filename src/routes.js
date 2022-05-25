import { HomePage } from './pages/home-page'
import { BoardPage } from './pages/board-page'
import { UserProfile } from './pages/user-profile-page'
import { LoginSignUpPage } from './pages/login-signup-page'
import { ErrorPage } from './pages/error-page'

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
    path: '/*',
    component: <ErrorPage />,
  },
]

export default routes
