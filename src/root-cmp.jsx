import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { HomePage } from './pages/home-page'
// import { BoardPage } from './pages/board-page'
// import { LoginSignUpPage } from './pages/loginsignup-page'

import routes from './routes'

export function RootCmp() {
  return (
    <div>
      <Router>
        <main>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                element={route.component}
                path={route.path}
              />
            ))}
          </Routes>
        </main>
      </Router>
    </div>
  )
}
