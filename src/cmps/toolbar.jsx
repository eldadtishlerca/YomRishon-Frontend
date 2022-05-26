import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile, CgColorBucket } from 'react-icons/cg'
import { BiFilterAlt, BiSortAlt2 } from 'react-icons/bi'
import { IoIosArrowDropdown } from 'react-icons/io'

export const ToolBar = () => {
  return (
    <div className="toolbar-main-contianer flex">
      <div className="toolbar-button-container flex">
        <span className='new-task-spn'>New Task</span>
        <IoIosArrowDropdown />
      </div>
      <div className="toolbar-button-container flex">
        <AiOutlineSearch />
        <span>Search</span>
      </div>
      <div className="toolbar-button-container flex">
        <CgProfile />
        <span>Person</span>
      </div>
      <div className="toolbar-button-container flex">
        <BiFilterAlt />
        <span>Filter</span>
      </div>
      <div className="toolbar-button-container flex">
        <BiSortAlt2 />
        <span>Sort</span>
      </div>
      {/* <div>
        <CgColorBucket />
      </div> */}
    </div>
  )
}
