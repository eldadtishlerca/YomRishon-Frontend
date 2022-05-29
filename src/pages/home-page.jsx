import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="homepage-logo-wrapper">
          <img src="imgs/yomlogo.png" alt="" />
        </div>
        {/* <h1 className="logo">
          <span className="yom">Yom</span>
          <span className="ris">Ris</span>
          <span className="hon">hon</span>
        </h1> */}
        <div className="header-btn-warpper">
          <button
            className="login-btn"
            onClick={() => {
              navigate('/loginsignup')
            }}
          >
            Login
          </button>
          <button
            className="get-started-btn"
            onClick={() => {
              navigate('/vmPrT')
            }}
          >
            Get Started{' '}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </header>
      <main>
        <section className="shooting-stars">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </section>
        <div className="hero">
          <h1>A platform built for a new way of working</h1>
          <h3>Manage your workflow with powerful tools</h3>
          <div className="hero-btn-wrapper">
            <button
              className="get-started-btn"
              onClick={() => {
                navigate('/vmPrT')
              }}
            >
              Get Started{' '}
              <span>
                <FaArrowRight />
              </span>
            </button>
            <p>
              No credit card needed &nbsp; ⌖ &nbsp; Unlimted time on Free plan
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
