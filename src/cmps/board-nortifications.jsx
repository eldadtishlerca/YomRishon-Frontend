import { GrClose } from 'react-icons/gr'
import { BsThreeDots } from 'react-icons/bs'
import { defaultNotifications } from '../data/notifications.js'
import { utilService } from '../services/util.service'

export const BoardNotifications = ({board, onOpenNortification}) => {
  
  const timestampToTime = (timeStamps) => {
    const time = new Date(+timeStamps)
    const year = time.getFullYear()
    const month = utilService.monthIdxToName(time.getMonth())
    const day = time.getDate()

    const currTime = new Date()
    if (currTime.getFullYear() === year) return `${month} ${day}`
    if (currTime.getDate() === day) return `${currTime.getHours()-time.getHours()}h`
    return `${month} ${day}, ${year}`
  }

    return (
      <section className="board-notifications-main">
        <div className="board-notifications-header flex">
          <div className="board-notifications-header-buttons flex">
            <span className="menu-button flex"><BsThreeDots /></span>
            <span className="x-button flex" onClick={() => {onOpenNortification()}}><GrClose /></span>
          </div>
            <div className="board-notifications-title-container">
                <h3>Notifications</h3>  
            </div>
            <div className='board-notifications-header-navbar-container'>
              <nav className="board-notifications-header-navbar flex">
                  <div className='a'><div className="board-notifications-header-navbar-item flex"><span>All</span></div></div>
                  <div className='a'><div className="board-notifications-header-navbar-item flex"><span>Unread</span></div></div>
                  <div className='a'><div className="board-notifications-header-navbar-item flex"><span>I was mentioned</span></div></div>
                  <div className='a'><div className="board-notifications-header-navbar-item flex"><span>Assigned to me</span></div></div>
              </nav>
            </div>
        </div>
        <div className="nortification-container flex">
          {defaultNotifications.map(item => <div className={item.isRead ? "nortification-item read flex" : "nortification-item unread flex"} key={item._id}>
            <img src={item.imgUrl} alt="" />
            <div className="nortification-item-main flex">
              <div className="nortification-title-container flex"><h3>{item.user} </h3><span>{timestampToTime(item.createdAt)}</span></div>      
              <div><span className="nortification-title-action">@{item.action} </span><span>you {item.txt}</span></div>
              <span>{board.title}</span>
            </div>
          </div>
          )}
        </div>
      </section>
    )
  }
  