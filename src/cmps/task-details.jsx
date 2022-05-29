import { utilService } from '../services/util.service'
import { BsThreeDots } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { BiLike } from 'react-icons/bi'
import { RiShareForwardLine } from 'react-icons/ri'

export const TaskDetails = ({ SetShowModal, task }) => {

  const updates = task.updates

  const setLastUpdateTime = (createdTime) => {
    const currTime = new Date()
    const updatedTime = currTime - createdTime
    const getTime = utilService.msToUpdate(updatedTime)
    return getTime
  }

  return (
    <div className="task-details">
      <div className="task-details-warpper">
        <div className="task-details-header">
          <button
            className="close-modal-btn"
            onClick={() => SetShowModal(false)}
          >
            ✖
          </button>
          <div className="upper-task-details-header">
            <input
              className="task-name-input"
              typeof="string"
              placeholder={task.title}
            ></input>
            <div className="header-options-container">
              <div className="header-btn-wrapper">
                <button className="header-btn"> Invite </button>
              </div>
              <p>|</p>
              <div className="header-btn-wrapper">
                <button className="header-btn-options">
                  <BsThreeDots />
                </button>
              </div>
            </div>
          </div>
          <nav className="task-detail-header-nav">
            <div className="active-border">
              <button className="updates-btn">Updates</button>
            </div>
            <div className="active-border">
              <button className="files-btn">Files</button>
            </div>
            <div className="active-border">
              <button className="activity-log-btn">Activity Log</button>
            </div>
          </nav>
        </div>
        <hr />
        <div className="task-details-main">
          <input
            className="add-task-update-input"
            typeof="string"
            placeholder="Write an update..."
          ></input>
          <a className="write-email-link">
            <div className="email-icon-warpper">
              <HiOutlineMail /> Write updates via email:
            </div>
          </a>
          <div className="updates-container">
            <div className="updates-container-warpper">
              {updates.map((update) => {
                return (
                  <div className="task-update" key={update.id}>
                    <div className="task-update-header">
                      <img src={update.byMember.imgUrl} /> &nbsp; &nbsp;
                      <h2 className="user-name">{update.byMember.fullname}</h2>
                      <div className='time-stamp-warpper'>
                       <div className='time-stamp'> {setLastUpdateTime(update.createdAt)} </div>
                        </div>
                    </div>
                    <div className="update-txt">
                      <p>{update.txt}</p>
                    </div>
                    <div className="button-container">
                      <button>
                        <div className="inside-button-container">
                          <BiLike /> Like
                        </div>
                      </button>
                      <button>
                        <div className="inside-button-container">
                          <span className="icon-container">
                            <RiShareForwardLine />
                          </span>{' '}
                          Replay
                        </div>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
