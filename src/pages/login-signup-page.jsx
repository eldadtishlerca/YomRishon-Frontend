import { Route, Routes, useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { SignUpPage } from './singup-page.jsx'
import { LoginPage } from './login-page'

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
      <Routes>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/*' element={<LoginPage />} />
      </Routes>
    </div>
  )
}
