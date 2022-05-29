import { GrClose } from 'react-icons/gr'
import { BsThreeDots } from 'react-icons/bs'

export const BoardNotifications = () => {
    return (
      <div className="board-notifications-main">
        <div className="board-notifications-header flex">
          <div className="board-notifications-header-buttons flex">
            <span className="menu-button"><BsThreeDots /></span>
            <span className="x-button"><GrClose /></span>
          </div>
            <div className="board-notifications-title-container">
                <h2>Notifications</h2>  
            </div>
            <nav className="board-notifications-header-navbar flex">
                <div className="board-notifications-header-navbar-item flex"><span>All</span></div>
                <div className="board-notifications-header-navbar-item flex"><span>Unread</span></div>
                <div className="board-notifications-header-navbar-item flex"><span>I was mentioned</span></div>
                <div className="board-notifications-header-navbar-item flex"><span>Assigned to me</span></div>
            </nav>
        </div>
        {/* <BoardNortificationBar /> */}
        <div className="nortification-container">
             
        </div>
      </div>
    )
  }
  