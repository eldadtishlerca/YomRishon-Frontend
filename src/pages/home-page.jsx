import { useNavigate } from "react-router-dom"

export function HomePage() {

  const navigate = useNavigate()

  return <div className="homepage">
    <header className="homepage-header">
      <h1 className="logo">
        <span className="yom">Yom</span><span className="ris">Ris</span><span className="hon">hon</span>
        </h1>
      <button className="login-btn" onClick={()=> {navigate('/loginsignup')}}>Login</button>
    </header>
    <main>
      <div className="hero">
        <h1>Feel the workflow</h1>
        <h3>Manage your work with powerful tools</h3>
      <button className="hero-btn" onClick={()=> {navigate('/board')}}>Get Started</button>
      </div>
    </main>
  </div>
}
