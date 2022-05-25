import { useNavigate } from 'react-router-dom'
import { UserNotflication } from './user-notflication'
import { UserWork } from './user-work'
import { Search } from './search'

export function SideBar() {
  let nevigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => {
          nevigate('/')
        }}
      >
        Home Page
      </button>
      <UserNotflication />
      <UserWork />
      <Search />
      <button
        onClick={() => {
          nevigate('/user')
        }}
      >
        user profile
      </button>
    </div>
  )
}
