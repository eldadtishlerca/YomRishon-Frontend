import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"

export function HomePage() {

  const navigate = useNavigate()

  return <div>
    <header>
      <h1>Logo</h1>
      <button onClick={()=> {navigate('/loginsignup')}}>Login</button>
    </header>
    <main>
      <div>
        <h1>Feel the workflow</h1>
        <h3>Manage your work with powerful tools</h3>
        <button>Get Started</button>
      </div>
    </main>
  </div>
}
