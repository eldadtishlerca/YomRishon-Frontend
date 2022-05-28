import { BsThreeDots } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

export const TaskDetails = () => {
  return (
    <div className="task-details-warpper">
      <div className="task-details-header">
        <button className="close-modal-btn">✖</button>
        <div className="upper-task-details-header">
          <input
            className="task-name-input"
            typeof="string"
            placeholder="Loader animations"
          ></input>
          <div className="header-options-container">
            <div className="invite-members">Invite</div>
            <p>|</p>
            <button className="task-details-options">
              <BsThreeDots />
            </button>
          </div>
        </div>
        <nav className="task-detail-header-nav">
          <button className="updates-btn">Updates</button>
          <button className="files-btn">Files</button>
          <button className="activity-log-btn">Activity Log</button>
        </nav>
      </div>
      <div className="task-details-main">
        <input
          className="add-task-update-input"
          typeof="string"
          placeholder="Write an update..."
        ></input>
        <a className='write-email-link'>
         <HiOutlineMail /> Write updates via email:
          </a>
      </div>
      <div className='updates-container'>
      </div>
    </div>
  )
}
