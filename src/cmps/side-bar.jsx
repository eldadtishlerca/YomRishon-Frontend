import { useNavigate } from 'react-router-dom'
import { boardsModal } from './boards-modal'
import { UserNotflication } from './user-notflication'
import { UserWork } from './user-work'
import { Search } from './search'
import { FaClipboardList } from 'react-icons/fa'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineCheckSquare, AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

export function SideBar() {
  let nevigate = useNavigate()

  const onToggleBoardModal = () => {
    console.log('open board modal')
  }

  const onToggleNotifications = () => {
    console.log('open notification')
  }

  const onToggleMyWork = () => {
    console.log('open my work')
  }

  const onToggleSearch = () => {
    console.log('open search')
  }

  return (
    <div className="sidebar">
      <div
        className="home-icon-wrapper"
        onClick={() => {
          nevigate('/')
        }}
      >
        Home
      </div>
      <div className="sidebar-line" />
      <div
        className="board-icon-wrapper"
        onClick={() => {
          onToggleBoardModal()
        }}
      >
        <FaClipboardList />
      </div>
      <div
        className="notification-icon-wrapper"
        onClick={() => {
          onToggleNotifications()
        }}
      >
        <IoMdNotificationsOutline />
      </div>
      <div
        onClick={() => {
          onToggleMyWork()
        }}
      >
        <AiOutlineCheckSquare />
      </div>
      <div
        onClick={() => {
          onToggleSearch()
        }}
      >
        <AiOutlineSearch />
      </div>
      <div
        onClick={() => {
          nevigate('/user/:userId')
        }}
      >
        <CgProfile />
      </div>
    </div>
  )
}
