import { BiClipboard } from 'react-icons/bi'

export function BoardsList() {
  return (
    <div className="boards-list">
      <div className="flex board-active">
        <BiClipboard />
        <span>YomRishon - Project</span>
      </div>
      <div className="flex">
        <BiClipboard />
        <span>YomRishon Demo Data</span>
      </div>
    </div>
  )
}
