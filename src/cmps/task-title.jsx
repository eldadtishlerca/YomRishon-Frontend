import { BiCheckboxChecked } from 'react-icons/bi'

export const TaskTitle = ({ color, title, counter }) => {
  return (
    <div className="task-title flex">
      <div>
        <BiCheckboxChecked />
        {/* <BiCheckbox /> */}
      </div>
      <div>{title}</div>
    </div>
  )
}
