import { GrClose } from 'react-icons/gr'
import { BsThreeDots } from 'react-icons/bs'
import { defaultNotifications } from '../data/notifications.js'

export const BoardNotifications = ({board}) => {
    

    return (
      <div className="board-notifications-main">
        <div className="board-notifications-header flex">
          <div className="board-notifications-header-buttons flex">
            <span className="menu-button flex"><BsThreeDots /></span>
            <span className="x-button flex"><GrClose /></span>
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
          {defaultNotifications.map(item => <div className="nortification-item" key={item._id}>
            <div><h3>{item.user}</h3><span>{item.createdAt}</span></div>      
            <span>@{item.action}</span><span>{item.txt}</span>
            <h4>{board.title}</h4>
          </div>

          )}
        </div>
      </div>
    )
  }
  