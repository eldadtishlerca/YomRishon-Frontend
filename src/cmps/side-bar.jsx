import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {UserNotflication} from './user-notflication'
import {UserProfile} from '../pages/user-profile'
import {UserWork} from './user-work'
import {Search} from './search'

export function SideBar() {
    return <div>IM SideBar
        <UserNotflication />
        <UserWork />
        <Search /> 
        
    </div>
}