import { UserNotflication } from './user-notflication'
import { UserProfile } from '../pages/user-profile-page'
import { UserWork } from './user-work'
import { Search } from './search'

export function SideBar() {
  return (
    <div>
      <Routes></Routes>
      <UserNotflication />
      <UserWork />
      <Search />
    </div>
  )
}
