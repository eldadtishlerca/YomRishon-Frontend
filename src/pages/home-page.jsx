import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1 className="logo">
          <span className="yom">Yom</span>
          <span className="ris">Ris</span>
          <span className="hon">hon</span>
        </h1>
        <button
          className="login-btn"
          onClick={() => {
            navigate('/loginsignup')
          }}
        >
          Login
        </button>
      </header>
      <main>
        <section className='shooting-stars'>
          <span className='star'></span>
          <span className='star'></span>
          <span className='star'></span>
          <span className='star'></span>
          <span className='star'></span>
          <span className='star'></span>
          <span className='star'></span>
          <span className='star'></span>
        </section>
        <div className="hero">
          <h1>Feel the workflow</h1>
          <h3>Manage your work with powerful tools</h3>
          <div className="hero-btn-wrapper">
            <button
              className="hero-btn"
              onClick={() => {
                navigate('/board')
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
