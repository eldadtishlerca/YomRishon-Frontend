import { BiDockLeft } from 'react-icons/bi'

export const BoardsList = () => {
  return (
    <div className="boards-list">
      <div className="flex board-active">
        <BiDockLeft />
        <span>YomRishon - Project</span>
      </div>
      <div className="flex">
        <BiDockLeft />
        <span>YomRishon Demo Data</span>
      </div>
    </div>
  )
}
