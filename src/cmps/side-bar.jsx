import { Nav, Link, Routes, Route, useNavigate } from 'react-router-dom'
import { UserNotflication } from './user-notflication'
import { UserProfile } from '../pages/user-profile-page'
import { UserWork } from './user-work'
import { Search } from './search'

export function SideBar() {
  let nevigate = useNavigate()
  return (
    <div>
        <button onClick={() => {nevigate("/user")}}>user profile</button>
        <button onClick={() => {nevigate("/")}}>Home Page</button>

    </div>
  )
}

// homepage
// nav - [usernortifications, searh, user work]
// user profile