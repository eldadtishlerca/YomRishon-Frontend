import { useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'

export const LoginSignUpPage = () => {
  const navigate = useNavigate()

  return (
    <div className="login-page">
      <header className="login-header">
        <div className="login-logo-wrapper">
          <img className="logo" src="imgs/yomlogo.png" alt="" />
        </div>
        <div className="home-btn-warpper">
          <button
            className="home-btn"
            onClick={() => {
              navigate('/')
            }}
          >
            <AiOutlineHome />
          </button>
        </div>
      </header>
      <main className="login-main">
        <h1>Log in to your account</h1>
        <form>
          <h3>Enter your work email address</h3>
          <div className="form-warpper">
            <input type="email" placeholder="example@company.com" />
            <input type="password" placeholder="password" />
            <div className="submit-btn-warpper">
              <button className="submit-btn">login</button>
            </div>
          </div>
        </form>
        <h4>Or sign in with</h4>
        <div className="google-signin-btn-warpper">
          <button className="google-signin-btn">Google</button>
        </div>
        <div className="register-link-container">
          Don't have an account yet?{' '}
          <a className="register-link" href="/">
            Sign up
          </a>
        </div>
      </main>
    </div>
  )
}
