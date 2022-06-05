import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { userService } from '../services/user.service'

export const SignUpPage = () => {
    const navigate = useNavigate()
    const [fullname, setFullname] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [imgUrl, setimgUrl] = useState(null)

    const onHandleFullname = ({target}) => {
        setFullname(target.value)
    }
    const onHandleUsername = ({target}) => {
        setUsername(target.value)
    }
    const onHandlePassword = ({target}) => {
        setPassword(target.value)
    }
    const onHandleimgUrl = ({target}) => {
        setimgUrl(target.value)
    }

    const onSubmitCredentials = (ev) => {
        ev.preventDefault()
        console.log({fullname, username, password});
        userService.signup({fullname, username, password, imgUrl})
        // navigate('/')
    }   

    return <div className="signup-main-container">
        <main className="flex signup-main">
            <header className="flex">
                <h1>Welcome to YomRishon.com</h1>
                <h4>Get started</h4>
            </header>
                <form className="flex" onSubmit={(ev) => {onSubmitCredentials(ev)}}>
                    <label htmlFor="fullname">Enter your full name</label>
                    <input type="fullname" autoComplete="off" name="fullname" onChange={(ev) => {onHandleFullname(ev)}}/>
                    <label htmlFor="username">Enter username</label>
                    <input type="username" autoComplete="off" name="username" onChange={(ev) => {onHandleUsername(ev)}}/>
                    <label htmlFor="password">Enter password</label>
                    <input type="password" autoComplete="off" name="password" onChange={(ev) => {onHandlePassword(ev)}}/>
                    <label htmlFor="imgUrl">Enter your image url</label>
                    <input type="url" autoComplete="off" name="imgUrl" onChange={(ev) => {onHandleimgUrl(ev)}}/>
                    <button>Sign up</button>
                </form>
            <span>Already have an account? <a className="login-link" onClick={() => {navigate('/loginsignup')}}>Log in</a></span>
        </main>
        <div className="singup-side-container"></div>
    </div>

}