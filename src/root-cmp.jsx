import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home-page'
import { BoardPage } from './pages/board-page'
import { UserProfile } from './pages/user-profile-page'
import { LoginSignUpPage } from './pages/login-signup-page'
import { ErrorPage } from './pages/error-page'
import { TaskDetails } from './cmps/task/task-details'
import { LoginPage } from './pages/login-page'
import { SignUpPage } from './pages/singup-page'

import routes from './routes'

export function RootCmp() {
  return (
    <div>
      <Router>
        <main>
          <Routes>
            {/* {routes.map((route) => (
              <Route
                key={route.path}
                element={route.component}
                path={route.path}
              />
            ))} */}
            <Route path='/' element={<HomePage />}/>
            <Route path='/:boardId' element={<BoardPage />}/>
            <Route path='/:boardId/:groupId/:taskId' element={<TaskDetails />}/>
            <Route path='/user/:userId' element={<UserProfile />}/>
            <Route path='/loginsignup' element={<LoginSignUpPage />}>
                <Route path='signup' element={<SignUpPage />} />
                <Route path='' element={<LoginPage />} /></Route>
            <Route path='/*' element={<ErrorPage />}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
}
