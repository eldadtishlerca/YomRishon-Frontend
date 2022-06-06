import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaArrowRight } from 'react-icons/fa'
import { userService } from '../services/user.service'
import { getLoggedinUser, logoutUser } from '../store/actions/board.actions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


export const HomePage = () => {
  const dispatch = useDispatch()
  const { currUser } = useSelector((storeState) => storeState.boardModule)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getLoggedinUser())
  }, [])
  const onLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="homepage-logo-wrapper">
          <img src="imgs/yomlogo.png" alt="" />
        </div>
        <div className="header-btn-warpper">
          {currUser.fullName ? <span>Hello {currUser.fullName} <a className="logout-link" 
                    onClick={() => onLogout()}>Log out</a></span> :
                    <button
                    className="login-btn"
                    onClick={() => {
                      navigate('/loginsignup')
                    }}
                  >
                    Login
                  </button>
          }
          <button
            className="get-started-btn"
            onClick={() => {
              navigate('/629de877b830c8383bee9b74')
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
          <h1>
            A platform built for a <br />
            new way of working
          </h1>
          <h3>Manage your workflow with powerful tools</h3>
          <div className="hero-btn-wrapper">
            <button
              className="get-started-btn"
              onClick={() => {
                navigate('/629de877b830c8383bee9b74')
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
