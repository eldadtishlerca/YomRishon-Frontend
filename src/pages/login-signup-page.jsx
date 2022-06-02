import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { userService } from '../services/user.service'
import { AiOutlineHome } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

export const LoginSignUpPage = () => {
  const navigate = useNavigate()
  const [userame, setUserame] = useState(null)
  const [password, setPassword] = useState(null)

  const onHandleChangeUsername = ({target}) => {
    setUserame(target.value)
  }
  const onHandleChangePassword = ({target}) => {
    setPassword(target.value)
  }

  const onSubmitCredentials = (ev) => {
    ev.preventDefault(ev)
    userService.login({userame, password})
  }

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
        <form onSubmit={(ev) => {onSubmitCredentials(ev)}}>
          <h3>Enter your work email address</h3>
          <div className="form-warpper">
            <input autoComplete="off"  type="username" placeholder="User name" name="username" onChange={(ev) => {onHandleChangeUsername(ev)}}/>
            <input autoComplete="off" type="password" placeholder="Password" onChange={(ev) => {onHandleChangePassword(ev)}}/>
            <div className="submit-btn-warpper">
              <button className="submit-btn">login</button>
            </div>
          </div>
        </form>
        <div className="line-modal-wrapper">
          <div className="straight-line"></div>
          <p>
            Or sign in <br /> with
          </p>
        </div>
        <div className="google-signin-btn-warpper">
          <div className="google-signin-btn">
            <span className="google-svg-container">
              <FcGoogle /> 
            </span>
            &nbsp; Google
          </div>
        </div>
        <div className="register-link-container">
          <span>Don't have an account yet? </span>
          <a className="register-link" href="/">Sign up</a>
        </div>
      </main>
    </div>
  )
}
