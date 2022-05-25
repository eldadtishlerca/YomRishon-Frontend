import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
                exact={true}
                element={route.component}
                path={route.path}
              />
            ))}
            {/* <Route path="user/:id" element={<UserDetails />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  )
}
