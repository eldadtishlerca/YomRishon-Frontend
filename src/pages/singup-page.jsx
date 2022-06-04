import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { userService } from '../services/user.service'

export const SignUpPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [userame, setUserame] = useState(null)
    const [password, setPassword] = useState(null)

    const onHandleEmail = ({target}) => {
        setEmail(target.value)
    }
    const onHandleUsername = ({target}) => {
        setUserame(target.value)
    }
    const onHandlePassword = ({target}) => {
        setPassword(target.value)
    }

    const onSubmitCredentials = (ev) => {
        ev.preventDefault()
        userService.signup({email, userame, password})
        navigate('/')
    }   

    return <div className="signup-main-container">
        <main className="flex signup-main">
            <header className="flex">
                <h1>Welcome to YomRishon.com</h1>
                <h4>Get started</h4>
            </header>
                <form className="flex" onSubmit={(ev) => {onSubmitCredentials(ev)}}>
                    <label htmlFor="email">Enter Email</label>
                    <input type="email" autoComplete="off" name="email" onChange={(ev) => {onHandleEmail(ev)}}/>
                    <label htmlFor="username">Enter Username</label>
                    <input type="username" autoComplete="off" name="username" onChange={(ev) => {onHandleUsername(ev)}}/>
                    <label htmlFor="password">Enter Password</label>
                    <input type="password" autoComplete="off" name="password" onChange={(ev) => {onHandlePassword(ev)}}/>
                    <button>Continue</button>
                </form>
        </main>
        <div className="singup-side-container"></div>
    </div>

}