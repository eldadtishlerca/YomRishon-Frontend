import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile, CgColorBucket } from 'react-icons/cg'
import { BiFilterAlt, BiSortAlt2 } from 'react-icons/bi'
import { IoIosArrowDropdown } from 'react-icons/io'
import { RiArrowDownSLine } from 'react-icons/ri'

export const ToolBar = () => {
  return (
    <div className="toolbar-main-contianer flex">
      <div className="toolbar-button-container new-task flex">
        <span className="new-task-spn">New Project</span>
        {/* <IoIosArrowDropdown /> */}
        <div className="new-task-spn-icon"><RiArrowDownSLine /></div>
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
