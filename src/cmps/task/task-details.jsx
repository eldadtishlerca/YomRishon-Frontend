import { utilService } from '../../services/util.service'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateTask } from '../../store/actions/board.actions'
import { BsThreeDots } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { BiLike } from 'react-icons/bi'
import { RiShareForwardLine } from 'react-icons/ri'

export const TaskDetails = ({ setShowModal, task, groupId }) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()
  const [titleValue, setTitleValue] = useState(task.title || '')
  const [update, setUpdate] = useState('Write an update...')
  const [isEditTitle, setIsEditTitle] = useState(false)
  const updates = task.updates

  const onSubmitTitle = (ev) => {
    if (ev.key === 'Enter' || ev.type === 'blur') {
      setIsEditTitle(false)
      const taskToUpdate = { ...task, title: titleValue }
      dispatch(updateTask(currBoard, groupId, task.id, taskToUpdate))
    }
  }
  const onHandleChangeTitle = (ev) => {
    const { value } = ev.target
    console.log(value)
    setTitleValue(value)
  }

  const setLastUpdateTime = (createdTime) => {
    const currTime = new Date()
    const updatedTime = currTime - createdTime
    const getTime = utilService.msToUpdate(updatedTime)
    return getTime
  }

  const onHandleChangeUpdate = (ev) => {
    const { value } = ev.target
    setUpdate(value)
  }

  const onHandleSubmitUpdate = (ev) => {
    ev.preventDefault()
    const taskToUpdate = { ...task, updates: [ {
      id: utilService.makeId(),
      txt: update,
      createdAt: Date.now(),
      byMember: {
        _id: "u103",
        fullname: "Elon Barzani",
        imgUrl: "imgs/mini-user-imgs/u103.png"
      }
    } ,...updates] }
    setUpdate('Write an update...')
    console.log(taskToUpdate)
    dispatch(updateTask(currBoard, groupId, task.id, taskToUpdate))
  }

  return (
    <div className="task-details slideInRight">
      <div className="task-details-warpper">
        <div className="task-details-header">
          <button
            className="close-modal-btn"
            onClick={() => setShowModal(false)}
          >
            ✖
          </button>
          <div className="upper-task-details-header" onClick={() => setIsEditTitle(true)}>
            {isEditTitle ? <input
              value={titleValue}
              type="text"
              className="work-hours-input"
              onBlur={(ev) => {
                onSubmitTitle(ev)
              }}
              onKeyUp={(ev) => {
                onSubmitTitle(ev)
              }}
              onChange={(ev) => {
                onHandleChangeTitle(ev)
              }}
              name="titleValue"
            ></input> : <span>{task.title}</span>}
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
            <div className="active-border select">
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
          <form onSubmit={(ev) => onHandleSubmitUpdate(ev)}>
            <input
              className="add-task-update-input"
              typeof="string"
              value={update}
              onChange={(ev) => onHandleChangeUpdate(ev)}
            ></input>
          </form>
          <div className="write-email-link">
            <div className="email-icon-warpper">
              <HiOutlineMail /> Write updates via email:
            </div>
          </div>
          {updates.map((update) => 
          <div key={update.id} className="updates-container">
            <div className="updates-container-warpper">
                  <div className="task-update" key={update.id}>
                    <div className="task-update-header">
                      <img src={update.byMember.imgUrl} alt="" />
                      <h2 className="user-name">
                        &nbsp; &nbsp;{update.byMember.fullname}
                      </h2>
                      <div className="time-stamp-warpper">
                        <div className="time-stamp">
                          {' '}
                          {setLastUpdateTime(update.createdAt)}{' '}
                        </div>
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
            </div>
          </div>
                )
              })
        </div>
      </div>
    </div>
  )
}
